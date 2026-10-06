// Shared admin UI helper components and styles

export const s = {
  section: { marginBottom: '2rem' },
  title: { color: '#f1f1f1', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' },
  subtitle: { color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.5rem' },
  card: { background: '#1a1a22', border: '1px solid #2a2a35', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' },
  label: { display: 'block', color: '#9ca3af', fontSize: '0.78rem', fontWeight: 500, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
  input: { width: '100%', background: '#0f0f13', border: '1px solid #2a2a35', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#e5e7eb', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  textarea: { width: '100%', background: '#0f0f13', border: '1px solid #2a2a35', borderRadius: '8px', padding: '0.6rem 0.9rem', color: '#e5e7eb', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'vertical', minHeight: '80px' },
  btnPrimary: { background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: 'white', border: 'none', borderRadius: '8px', padding: '0.6rem 1.25rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'inherit' },
  btnSecondary: { background: '#1e1e2e', color: '#9ca3af', border: '1px solid #2a2a35', borderRadius: '8px', padding: '0.6rem 1.25rem', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit' },
  btnDanger: { background: '#2d1515', color: '#fca5a5', border: '1px solid #7f1d1d', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' },
  btnAdd: { background: '#0f1e2d', color: '#60a5fa', border: '1px solid #1e3a5f', borderRadius: '8px', padding: '0.6rem 1.25rem', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '0.4rem' },
  row: { display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexWrap: 'wrap' },
  col: { flex: 1, minWidth: '180px' },
  divider: { borderTop: '1px solid #2a2a35', margin: '1.25rem 0' },
  successMsg: { color: '#4ade80', fontSize: '0.82rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' },
  errorMsg: { color: '#fca5a5', fontSize: '0.82rem', marginTop: '0.5rem' },
  imgPreview: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #2a2a35' },
  uploadArea: { display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' },
  fileInputLabel: { background: '#1e1e2e', color: '#9ca3af', border: '1px dashed #3f3f50', borderRadius: '8px', padding: '0.6rem 1rem', cursor: 'pointer', fontSize: '0.8rem', display: 'inline-block' },
}

export function SaveButton({ loading, onClick, label = 'Save Changes' }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{ ...s.btnPrimary, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
    >
      {loading ? 'Saving...' : label}
    </button>
  )
}

export function StatusMsg({ msg, error }) {
  if (!msg) return null
  return <div style={error ? s.errorMsg : s.successMsg}>
    {error ? '❌' : '✅'} {msg}
  </div>
}

export async function uploadImageToServer(file, token) {
  const form = new FormData()
  form.append('image', file)
  const res = await fetch('/api/content/upload', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  })
  if (!res.ok) throw new Error('Upload failed')
  return await res.json() // { url, publicId }
}

export async function deleteImageFromServer(publicId, token) {
  const encoded = encodeURIComponent(publicId)
  await fetch(`/api/content/upload/${encoded}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
}

export function ImageUploader({ currentUrl, onUploaded, token, label = 'Image', aspectHint = '' }) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState('')

  const handleFile = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setErr('')
    try {
      const result = await uploadImageToServer(file, token)
      onUploaded(result)
    } catch {
      setErr('Upload failed. Check your Cloudinary config.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <label style={s.label}>{label}{aspectHint && <span style={{ color: '#6b7280', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}> ({aspectHint})</span>}</label>
      <div style={s.uploadArea}>
        {currentUrl && (
          <img src={currentUrl} alt="preview" style={s.imgPreview} onError={(e) => e.target.style.display='none'} />
        )}
        <label style={s.fileInputLabel}>
          {uploading ? 'Uploading...' : '📁 Choose File'}
          <input type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} disabled={uploading} />
        </label>
        {currentUrl && (
          <span style={{ color: '#6b7280', fontSize: '0.75rem', wordBreak: 'break-all', maxWidth: '200px' }}>
            {currentUrl.length > 50 ? currentUrl.slice(0, 50) + '...' : currentUrl}
          </span>
        )}
      </div>
      {err && <div style={s.errorMsg}>{err}</div>}
    </div>
  )
}

// Need to import useState for ImageUploader
import { useState } from 'react'
