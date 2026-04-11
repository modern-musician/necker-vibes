'use client'

import { useRef, useState } from 'react'

export default function CreatorVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="creator-video-wrapper">
      <video
        ref={videoRef}
        className="creator-video-element"
        controls
        preload="metadata"
        playsInline
        poster="/necker-vibes-creator-poster.jpg"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/necker-vibes-creator.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <div
          className="creator-video-play-overlay"
          aria-hidden="true"
          onClick={() => videoRef.current?.play()}
        >
          <div className="creator-video-play-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
