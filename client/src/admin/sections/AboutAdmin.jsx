import { useState } from 'react'
import { s, SaveButton, StatusMsg, ImageUploader, deleteImageFromServer } from '../adminUtils'

export default function AboutAdmin({ content, token, onRefresh }) {
  const [images, setImages] = useState(content?.about?.images || [])
  const [aboutText, setAboutText] = useState((content?.about?.aboutText || []).join('\n\n'))
  const [whyText, setWhyText] = useState((content?.about?.whyChooseUsText || []).join('\n\n'))
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    // Split paragraphs by double newline
    const aboutParagraphs = aboutText.split('\n\n').map(p => p.trim()).filter(Boolean)
    const whyParagraphs = whyText.split('\n\n').map(p => p.trim()).filter(Boolean)

    try {
      const res = await fetch('/api/content/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ images, aboutText: aboutParagraphs, whyChooseUsText: whyParagraphs }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('About section saved!')
      setIsError(false)
      onRefresh()
    } catch (e) {
      setMsg(e.message || 'Save failed')
      setIsError(true)
    } finally {
      setSaving(false)
    }
  }

  const handleRemoveImg = async (idx) => {
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
      <div style={s.title}>📖 About Section</div>
      <div style={s.subtitle}>Edit images and text for the About Us and Why Choose Us sections.</div>

      {/* Images */}
      <div style={s.card}>
        <div style={{ color: '#9ca3af', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>
          Slideshow Images
        </div>
        {images.map((img, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img
              src={img.url}
              alt={`About ${idx + 1}`}
              style={{ width: '90px', height: '65px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #2a2a35', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: '180px' }}>
              <input
                style={s.input}
                value={img.description || ''}
                onChange={(e) => updateDesc(idx, e.target.value)}
                placeholder="Image description..."
              />
            </div>
            <button onClick={() => handleRemoveImg(idx)} style={s.btnDanger}>🗑️</button>
          </div>
        ))}
        <ImageUploader token={token} label="Add Image" onUploaded={handleUploaded} />
      </div>

      {/* About Us Text */}
      <div style={s.card}>
        <label style={s.label}>About Us Text</label>
        <div style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          Separate paragraphs with a blank line (double Enter)
        </div>
        <textarea
          style={{ ...s.textarea, minHeight: '140px' }}
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          placeholder="Paragraph 1&#10;&#10;Paragraph 2..."
        />
      </div>

      {/* Why Choose Us Text */}
      <div style={s.card}>
        <label style={s.label}>Why Choose Us Text</label>
        <div style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          Last paragraph will appear as the italic tagline (e.g., "Your Idea. Our Creativity.")
        </div>
        <textarea
          style={{ ...s.textarea, minHeight: '140px' }}
          value={whyText}
          onChange={(e) => setWhyText(e.target.value)}
          placeholder="Paragraph 1&#10;&#10;Paragraph 2&#10;&#10;Your tagline here."
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
