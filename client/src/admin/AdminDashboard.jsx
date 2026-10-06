import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroAdmin from './sections/HeroAdmin'
import AboutAdmin from './sections/AboutAdmin'
import StatsAdmin from './sections/StatsAdmin'
import ServicesAdmin from './sections/ServicesAdmin'
import ShowreelAdmin from './sections/ShowreelAdmin'
import TeamAdmin from './sections/TeamAdmin'
import ContactAdmin from './sections/ContactAdmin'

const TABS = [
  { id: 'hero', label: 'Hero', icon: '🖼️' },
  { id: 'about', label: 'About', icon: '📖' },
  { id: 'stats', label: 'Stats', icon: '📊' },
  { id: 'services', label: 'Services', icon: '⚙️' },
  { id: 'showreel', label: 'Recent Work', icon: '🎬' },
  { id: 'team', label: 'Team', icon: '👥' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
]

const s = {
  wrap: { minHeight: '100vh', background: '#0f0f13', fontFamily: "'Inter', 'Outfit', sans-serif", color: '#e5e7eb' },
  header: { background: '#1a1a22', borderBottom: '1px solid #2a2a35', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', position: 'sticky', top: 0, zIndex: 50 },
  logo: { color: '#f1f1f1', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoBadge: { background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', letterSpacing: '0.05em' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  viewSite: { color: '#9ca3af', fontSize: '0.8rem', textDecoration: 'none', padding: '6px 12px', border: '1px solid #2a2a35', borderRadius: '6px' },
  logoutBtn: { background: 'transparent', border: '1px solid #3f3f50', color: '#9ca3af', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer', fontSize: '0.8rem' },
  body: { display: 'flex', minHeight: 'calc(100vh - 60px)' },
  sidebar: { width: '200px', background: '#14141c', borderRight: '1px solid #2a2a35', padding: '1rem 0', flexShrink: 0, position: 'sticky', top: '60px', height: 'calc(100vh - 60px)', overflowY: 'auto' },
  tab: (active) => ({
    display: 'flex', alignItems: 'center', gap: '0.6rem', width: '100%', padding: '0.65rem 1.25rem',
    background: active ? '#1e1e2e' : 'transparent',
    borderLeft: active ? '3px solid #7c3aed' : '3px solid transparent',
    color: active ? '#e5e7eb' : '#6b7280',
    cursor: 'pointer', fontSize: '0.875rem', fontWeight: active ? 600 : 400,
    transition: 'all 0.15s', border: 'none', textAlign: 'left',
  }),
  content: { flex: 1, padding: '2rem', maxWidth: '900px' },
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('hero')
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const token = localStorage.getItem('tropixie_admin_token')

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content')
      const data = await res.json()
      setContent(data)
    } catch (e) {
      console.error('Failed to fetch content', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('tropixie_admin_token')
    navigate('/admin/login')
  }

  const activeProps = { content, token, onRefresh: fetchContent }

  return (
    <div style={s.wrap}>
      {/* Header */}
      <header style={s.header}>
        <div style={s.logo}>
          <span>🎬</span>
          <span>Tropixie</span>
          <span style={s.logoBadge}>ADMIN</span>
        </div>
        <div style={s.headerRight}>
          <a href="/" target="_blank" rel="noopener noreferrer" style={s.viewSite}>View Site ↗</a>
          <button onClick={handleLogout} style={s.logoutBtn}>Logout</button>
        </div>
      </header>

      <div style={s.body}>
        {/* Sidebar */}
        <aside style={s.sidebar}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={s.tab(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main style={s.content}>
          {loading ? (
            <div style={{ color: '#6b7280', padding: '2rem 0' }}>Loading content...</div>
          ) : !content ? (
            <div style={{ color: '#fca5a5', padding: '2rem 0' }}>
              <p>No content found in database.</p>
            </div>
          ) : (
            <>
              {activeTab === 'hero' && <HeroAdmin {...activeProps} />}
              {activeTab === 'about' && <AboutAdmin {...activeProps} />}
              {activeTab === 'stats' && <StatsAdmin {...activeProps} />}
              {activeTab === 'services' && <ServicesAdmin {...activeProps} />}
              {activeTab === 'showreel' && <ShowreelAdmin {...activeProps} />}
              {activeTab === 'team' && <TeamAdmin {...activeProps} />}
              {activeTab === 'contact' && <ContactAdmin {...activeProps} />}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
