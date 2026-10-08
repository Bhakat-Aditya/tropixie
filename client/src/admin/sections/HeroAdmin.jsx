import { useState } from 'react'
import { s, SaveButton, StatusMsg } from '../adminUtils'

export default function HeroAdmin({ content, token, onRefresh }) {
  const [youtubeId, setYoutubeId] = useState(content?.hero?.youtubeId || '')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const extractYoutubeId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  }

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const finalId = extractYoutubeId(youtubeId)
      const res = await fetch('/api/content/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ youtubeId: finalId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setYoutubeId(finalId)
      setMsg('Hero video saved!')
      setIsError(false)
      onRefresh()
    } catch (e) {
      setMsg(e.message || 'Save failed')
      setIsError(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={s.section}>
      <div style={s.title}>🎥 Hero Section</div>
      <div style={s.subtitle}>Manage the background video on the homepage hero. Video plays on loop, muted, without controls.</div>

      <div style={{ ...s.card, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={s.label}>YouTube Video Link or ID</label>
          <input
            style={s.input}
            value={youtubeId}
            onChange={(e) => setYoutubeId(e.target.value)}
            placeholder="e.g. dQw4w9WgXcQ or https://www.youtube.com/watch?v=..."
          />
        </div>

        {youtubeId && (
          <div style={{ marginTop: '1rem' }}>
            <label style={s.label}>Preview (Muted & Autoplay preview not guaranteed in admin)</label>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src={`https://www.youtube.com/embed/${extractYoutubeId(youtubeId)}?controls=0`}
                title="Preview"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>

      <div style={{ ...s.card, marginTop: '1.5rem', background: '#111118' }}>
        <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>
          <strong style={{ color: '#9ca3af' }}>ℹ️ Notes:</strong>
          <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem', lineHeight: 1.8 }}>
            <li>The video will automatically loop and play muted on the homepage.</li>
            <li>No player controls will be visible to users.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
