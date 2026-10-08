import { useEffect, useState } from 'react'

export default function Hero() {
  const [youtubeId, setYoutubeId] = useState('')

  useEffect(() => {
    fetch('/api/content')
      .then((r) => r.json())
      .then((data) => {
        if (data?.hero?.youtubeId) {
          setYoutubeId(data.hero.youtubeId)
        }
      })
      .catch(() => {}) // silently use defaults
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-transparent" id="hero">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        {youtubeId && (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1`}
            title="Hero Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
            style={{ pointerEvents: 'none' }}
          ></iframe>
        )}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}
