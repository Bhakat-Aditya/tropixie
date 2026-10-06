import { useState } from 'react'
import { s, SaveButton, StatusMsg } from '../adminUtils'

export default function ContactAdmin({ content, token, onRefresh }) {
  const [tagline, setTagline] = useState(content?.contact?.tagline || '')
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ tagline }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Contact section saved!')
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
      <div style={s.title}>✉️ Contact Section</div>
      <div style={s.subtitle}>Edit the description text shown under "Let's Create" in the contact box.</div>

      <div style={s.card}>
        <label style={s.label}>Description Paragraph</label>
        <textarea
          style={{ ...s.textarea, minHeight: '120px' }}
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder="Enter the contact section description..."
        />

        <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: '#0f0f13', borderRadius: '8px', border: '1px solid #2a2a35' }}>
          <div style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.4rem' }}>Preview:</div>
          <div style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, fontStyle: 'italic' }}>
            {tagline || '(empty)'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
