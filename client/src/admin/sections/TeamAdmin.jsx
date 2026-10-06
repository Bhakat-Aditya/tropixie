import { useState } from 'react'
import { s, SaveButton, StatusMsg, ImageUploader, deleteImageFromServer } from '../adminUtils'

export default function TeamAdmin({ content, token, onRefresh }) {
  const [team, setTeam] = useState(content?.team || [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [adding, setAdding] = useState(false)
  const [newMember, setNewMember] = useState({ name: '', role: '', bio: '', image: { url: '', publicId: '' } })

  const update = (idx, field, val) => {
    const updated = [...team]
    updated[idx] = { ...updated[idx], [field]: val }
    setTeam(updated)
  }

  const updateImage = (idx, result) => {
    const updated = [...team]
    updated[idx] = { ...updated[idx], image: { url: result.url, publicId: result.publicId } }
    setTeam(updated)
  }

  const removeMember = async (idx) => {
    if (!window.confirm(`Remove ${team[idx].name}?`)) return
    const member = team[idx]
    if (member.image?.publicId && !member.image.publicId.startsWith('local_')) {
      await deleteImageFromServer(member.image.publicId, token).catch(() => {})
    }
    setTeam(team.filter((_, i) => i !== idx))
    setExpanded(null)
  }

  const handleAddMember = () => {
    if (!newMember.name || !newMember.role) {
      alert('Name and Role are required')
      return
    }
    setTeam([...team, { ...newMember }])
    setNewMember({ name: '', role: '', bio: '', image: { url: '', publicId: '' } })
    setAdding(false)
  }

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ team }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Team saved!')
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
      <div style={s.title}>👥 Team Section</div>
      <div style={s.subtitle}>Add or remove team members. Profile images should be 1:1 square ratio for best display.</div>

      {team.map((member, idx) => (
        <div key={member._id || idx} style={s.card}>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            {member.image?.url && (
              <img
                src={member.image.url}
                alt={member.name}
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2a2a35', flexShrink: 0 }}
                onError={(e) => e.target.style.display='none'}
              />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ color: '#e5e7eb', fontWeight: 600, fontSize: '0.9rem' }}>{member.name || `Member ${idx + 1}`}</div>
              <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>{member.role}</div>
            </div>
            <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{expanded === idx ? '▲' : '▼'}</span>
          </div>

          {expanded === idx && (
            <div style={{ marginTop: '1rem', borderTop: '1px solid #2a2a35', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <div style={{ flex: 1, minWidth: '160px' }}>
                  <label style={s.label}>Name</label>
                  <input style={s.input} value={member.name} onChange={(e) => update(idx, 'name', e.target.value)} />
                </div>
                <div style={{ flex: 1, minWidth: '140px' }}>
                  <label style={s.label}>Role</label>
                  <input style={s.input} value={member.role} onChange={(e) => update(idx, 'role', e.target.value)} />
                </div>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <label style={s.label}>Bio</label>
                <textarea style={{ ...s.textarea, minHeight: '100px' }} value={member.bio} onChange={(e) => update(idx, 'bio', e.target.value)} />
              </div>

              <ImageUploader
                token={token}
                label="Profile Photo"
                currentUrl={member.image?.url}
                onUploaded={(result) => updateImage(idx, result)}
                aspectHint="1:1 square required"
              />

              <div style={{ marginTop: '1rem' }}>
                <button onClick={() => removeMember(idx)} style={s.btnDanger}>🗑️ Remove Member</button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add New Member */}
      {adding ? (
        <div style={{ ...s.card, border: '1px solid #1e3a5f' }}>
          <div style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>+ New Team Member</div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <label style={s.label}>Name *</label>
              <input style={s.input} value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} placeholder="Full name" />
            </div>
            <div style={{ flex: 1, minWidth: '140px' }}>
              <label style={s.label}>Role *</label>
              <input style={s.input} value={newMember.role} onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} placeholder="e.g. 3D Animator" />
            </div>
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <label style={s.label}>Bio</label>
            <textarea style={{ ...s.textarea }} value={newMember.bio} onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })} placeholder="Brief description..." />
          </div>

          <ImageUploader
            token={token}
            label="Profile Photo"
            currentUrl={newMember.image?.url}
            onUploaded={(result) => setNewMember({ ...newMember, image: { url: result.url, publicId: result.publicId } })}
            aspectHint="1:1 square required"
          />

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button onClick={handleAddMember} style={s.btnPrimary}>✓ Add to List</button>
            <button onClick={() => setAdding(false)} style={s.btnSecondary}>Cancel</button>
          </div>

          <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.75rem' }}>
            ⚠️ Click "Save Changes" after adding to persist to database.
          </div>
        </div>
      ) : (
        <button onClick={() => setAdding(true)} style={s.btnAdd}>
          <span>+</span> Add Team Member
        </button>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
