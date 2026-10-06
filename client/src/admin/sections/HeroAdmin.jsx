import { useState } from 'react'
import { s, SaveButton, StatusMsg, ImageUploader, deleteImageFromServer } from '../adminUtils'

export default function HeroAdmin({ content, token, onRefresh }) {
  const [images, setImages] = useState(content?.hero?.images || [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ images }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Hero images saved!')
      setIsError(false)
      onRefresh()
    } catch (e) {
      setMsg(e.message || 'Save failed')
      setIsError(true)
    } finally {
      setSaving(false)
    }
  }

  const handleRemove = async (idx) => {
    const img = images[idx]
    if (img.publicId && !img.publicId.startsWith('local_')) {
      await deleteImageFromServer(img.publicId, token).catch(() => {})
    }
    setImages(images.filter((_, i) => i !== idx))
  }

  const handleUploaded = (result) => {
    setImages([...images, { url: result.url, publicId: result.publicId, description: '' }])
  }

  const updateDesc = (idx, val) => {
    const updated = [...images]
    updated[idx] = { ...updated[idx], description: val }
    setImages(updated)
  }

  return (
    <div style={s.section}>
      <div style={s.title}>🖼️ Hero Section</div>
      <div style={s.subtitle}>Manage the slideshow images on the homepage hero. Images cycle automatically every 4 seconds.</div>

      {images.map((img, idx) => (
        <div key={idx} style={{ ...s.card, display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <img
            src={img.url}
            alt={`Hero ${idx + 1}`}
            style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #2a2a35', flexShrink: 0 }}
            onError={(e) => { e.target.style.background = '#1e1e2e'; e.target.style.display = 'flex' }}
          />
          <div style={{ flex: 1, minWidth: '200px' }}>
            <label style={s.label}>Description (optional)</label>
            <input
              style={s.input}
              value={img.description || ''}
              onChange={(e) => updateDesc(idx, e.target.value)}
              placeholder="Slide description..."
            />
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280', wordBreak: 'break-all' }}>
              {img.url}
            </div>
          </div>
          <button onClick={() => handleRemove(idx)} style={{ ...s.btnDanger, flexShrink: 0, alignSelf: 'center' }}>
            🗑️ Remove
          </button>
        </div>
      ))}

      <div style={s.card}>
        <ImageUploader
          token={token}
          label="Add New Hero Image"
          onUploaded={handleUploaded}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>

      <div style={{ ...s.card, marginTop: '1.5rem', background: '#111118' }}>
        <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>
          <strong style={{ color: '#9ca3af' }}>ℹ️ Notes:</strong>
          <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem', lineHeight: 1.8 }}>
            <li>Order of images here = order in the slideshow</li>
            <li>Recommended: landscape images (16:9 or wider) for best display</li>
            <li>Click Remove to delete an image (also removes from Cloudinary if cloud-hosted)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
