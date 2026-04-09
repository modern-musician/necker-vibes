import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Necker Vibes | Where Songs Are Born and Stars Are Made',
  description: 'The world\'s stage uniting music, mentorship, and mission. Join Richard Branson, Timbaland, Ron Fair, and legendary producers on Necker Island. October 8-16, 2026.',
  keywords: 'Necker Island, music mentorship, Richard Branson, Timbaland, Ron Fair, music production, artist development, Virgin Unite',
  openGraph: {
    title: 'Necker Vibes | Where Songs Are Born and Stars Are Made',
    description: 'The world\'s stage uniting music, mentorship, and mission. Join legendary producers on Necker Island.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
