import { useState } from 'react'
import { s, SaveButton, StatusMsg, ImageUploader } from '../adminUtils'

export default function ServicesAdmin({ content, token, onRefresh }) {
  const [services, setServices] = useState(content?.services || [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)
  const [expanded, setExpanded] = useState(null)

  const update = (idx, field, val) => {
    const updated = [...services]
    updated[idx] = { ...updated[idx], [field]: val }
    setServices(updated)
  }

  const updateIcon = (idx, result) => {
    const updated = [...services]
    updated[idx] = { ...updated[idx], icon: { url: result.url, publicId: result.publicId } }
    setServices(updated)
  }

  const addService = () => {
    setServices([...services, { title: '', shortDesc: '', fullDesc: '', icon: { url: '', publicId: '' }, externalLink: '' }])
    setExpanded(services.length)
  }

  const removeService = (idx) => {
    setServices(services.filter((_, i) => i !== idx))
    setExpanded(null)
  }

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ services }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Services saved!')
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
      <div style={s.title}>⚙️ Services Section</div>
      <div style={s.subtitle}>
        Edit service cards. The last service in the list is displayed as the special highlighted card (like 3D Printing).
      </div>

      {services.map((svc, idx) => (
        <div key={idx} style={s.card}>
          {/* Collapsed header */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {svc.icon?.url && (
              <img src={svc.icon.url} alt="" style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }} onError={(e) => e.target.style.display='none'} />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#e5e7eb', fontWeight: 600, fontSize: '0.9rem' }}>{svc.title || `Service ${idx + 1}`}</div>
              {idx === services.length - 1 && (
                <span style={{ color: '#a855f7', fontSize: '0.7rem' }}>⭐ Special highlighted card</span>
              )}
            </div>
            <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{expanded === idx ? '▲' : '▼'}</span>
          </div>

          {/* Expanded editor */}
          {expanded === idx && (
            <div style={{ marginTop: '1rem', borderTop: '1px solid #2a2a35', paddingTop: '1rem' }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={s.label}>Service Title</label>
                <input style={s.input} value={svc.title} onChange={(e) => update(idx, 'title', e.target.value)} placeholder="e.g. 3D Modeling" />
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={s.label}>Popup Description (shown when user clicks the card)</label>
                <textarea style={s.textarea} value={svc.fullDesc} onChange={(e) => update(idx, 'fullDesc', e.target.value)} placeholder="Full description shown in popup..." />
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={s.label}>External Link (optional — shows "Explore" button in popup)</label>
                <input style={s.input} value={svc.externalLink || ''} onChange={(e) => update(idx, 'externalLink', e.target.value)} placeholder="https://..." />
              </div>

              <ImageUploader
                token={token}
                label="Service Icon"
                currentUrl={svc.icon?.url}
                onUploaded={(result) => updateIcon(idx, result)}
                aspectHint="square recommended"
              />

              <div style={{ marginTop: '1rem' }}>
                <button onClick={() => removeService(idx)} style={s.btnDanger}>🗑️ Remove This Service</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <button onClick={addService} style={s.btnAdd}>
        <span>+</span> Add New Service
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
