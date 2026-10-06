import { useState } from 'react'
import { s, SaveButton, StatusMsg } from '../adminUtils'

export default function StatsAdmin({ content, token, onRefresh }) {
  const [stats, setStats] = useState(content?.stats || [])
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const update = (idx, field, val) => {
    const updated = [...stats]
    updated[idx] = { ...updated[idx], [field]: val }
    setStats(updated)
  }

  const addStat = () => setStats([...stats, { title: '', subtitle: '' }])

  const removeStat = (idx) => setStats(stats.filter((_, i) => i !== idx))

  const handleSave = async () => {
    setSaving(true)
    setMsg('')
    try {
      const res = await fetch('/api/content/stats', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ stats }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setMsg('Stats saved!')
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
      <div style={s.title}>📊 Stats Section</div>
      <div style={s.subtitle}>Edit the statistic boxes shown between About and Services sections.</div>

      {stats.map((stat, idx) => (
        <div key={idx} style={s.card}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ ...s.col }}>
              <label style={s.label}>Title (large text)</label>
              <input
                style={s.input}
                value={stat.title}
                onChange={(e) => update(idx, 'title', e.target.value)}
                placeholder="e.g. 100%"
              />
            </div>
            <div style={{ ...s.col }}>
              <label style={s.label}>Subtitle (small text)</label>
              <input
                style={s.input}
                value={stat.subtitle}
                onChange={(e) => update(idx, 'subtitle', e.target.value)}
                placeholder="e.g. Satisfaction"
              />
            </div>
            <button onClick={() => removeStat(idx)} style={{ ...s.btnDanger, flexShrink: 0 }}>🗑️ Remove</button>
          </div>
        </div>
      ))}

      <button onClick={addStat} style={s.btnAdd}>
        <span>+</span> Add Stat Box
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
        <SaveButton loading={saving} onClick={handleSave} />
        <StatusMsg msg={msg} error={isError} />
      </div>
    </div>
  )
}
