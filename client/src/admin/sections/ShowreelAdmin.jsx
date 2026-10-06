import { useState } from 'react'
import { s, SaveButton, StatusMsg, ImageUploader, deleteImageFromServer } from '../adminUtils'

export default function ShowreelAdmin({ content, token, onRefresh }) {
  const [videos, setVideos] = useState(content?.showreel || [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const update = (idx, field, val) => {
    const updated = [...videos]
    updated[idx] = { ...updated[idx], [field]: val }
    setVideos(updated)
  }

  const updateThumbnail = (idx, result) => {
    const updated = [...videos]
    updated[idx] = { ...updated[idx], thumbnail: { url: result.url, publicId: result.publicId } }
    setVideos(updated)
  }

  const addVideo = () => setVideos([...videos, { youtubeId: '', title: '', thumbnail: { url: '', publicId: '' } }])

  const removeVideo = async (idx) => {
    const video = videos[idx]
    if (video.thumbnail?.publicId && !video.thumbnail.publicId.startsWith('local_')) {
      await deleteImageFromServer(video.thumbnail.publicId, token).catch(() => {})
    }
    setVideos(videos.filter((_, i) => i !== idx))
  }

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/showreel', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ showreel: videos }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Showreel saved!')
      setIsError(false)
      onRefresh()
    } catch (e) {
      setMsg(e.message || 'Save failed')
      setIsError(true)
    } finally {
      setSaving(false)
    }
  }

  const getYouTubeId = (input) => {
    const match = input.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/)
    return match ? match[1] : input
  }

  return (
    <div style={s.section}>
      <div style={s.title}>🎬 Our Recent Work</div>
      <div style={s.subtitle}>Manage YouTube videos shown in the portfolio section. Paste either the full YouTube URL or just the video ID.</div>

      {videos.map((video, idx) => (
        <div key={idx} style={s.card}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Thumbnail preview - prefers custom thumbnail, falls back to YT */}
            {(video.thumbnail?.url || video.youtubeId) && (
              <img
                src={video.thumbnail?.url || `https://img.youtube.com/vi/${getYouTubeId(video.youtubeId)}/mqdefault.jpg`}
                alt="thumb"
                style={{ width: '120px', height: '68px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #2a2a35', flexShrink: 0 }}
                onError={(e) => e.target.style.display='none'}
              />
            )}

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                <div style={{ flex: 2, minWidth: '160px' }}>
                  <label style={s.label}>YouTube URL or Video ID</label>
                  <input
                    style={s.input}
                    value={video.youtubeId}
                    onChange={(e) => update(idx, 'youtubeId', getYouTubeId(e.target.value))}
                    placeholder="dQw4w9WgXcQ or https://youtube.com/..."
                  />
                </div>
                <div style={{ flex: 1, minWidth: '120px' }}>
                  <label style={s.label}>Title</label>
                  <input
                    style={s.input}
                    value={video.title}
                    onChange={(e) => update(idx, 'title', e.target.value)}
                    placeholder="Project title"
                  />
                </div>
              </div>
              
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #2a2a35' }}>
                <ImageUploader
                  token={token}
                  label="Custom Thumbnail (Optional)"
                  currentUrl={video.thumbnail?.url}
                  onUploaded={(result) => updateThumbnail(idx, result)}
                  aspectHint="16:9 recommended"
                />
              </div>
            </div>

            <button onClick={() => removeVideo(idx)} style={{ ...s.btnDanger, flexShrink: 0, alignSelf: 'flex-start', marginTop: '1.4rem' }}>
              🗑️ Remove
            </button>
          </div>
        </div>
      ))}

      <button onClick={addVideo} style={s.btnAdd}>
        <span>+</span> Add Video
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
