'use client'

import { useRef, useState } from 'react'

export default function BransonVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="branson-video branson-video-large">
      <video
        ref={videoRef}
        className="branson-video-element"
        controls
        preload="metadata"
        playsInline
        poster="/richard-branson-poster.png"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/richard-branson.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <div className="branson-video-play-overlay" aria-hidden="true">
          <div className="branson-video-play-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
