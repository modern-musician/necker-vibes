import FadeInSection from '@/components/FadeInSection'
import ApplicationForm from '@/components/ApplicationForm'

const mentors = [
  {
    name: 'Timbaland',
    title: 'Anchor Mentor',
    stats: ['35B+ streams worldwide', '250M+ records sold', 'Multi-Grammy producer'],
    featured: true,
  },
  {
    name: 'Ron Fair',
    title: 'Legendary A&R Executive',
    stats: ['40B+ streams', '6 Grammy Awards', 'Chairman of Virgin Records'],
    featured: true,
  },
  {
    name: 'Sooman Lee',
    title: 'Pioneer of K-Pop',
    stats: ['60B+ streams', 'SM Entertainment Founder', 'Revolutionized global pop'],
    featured: false,
  },
  {
    name: 'Poo Bear',
    title: 'Hitmaker & Songwriter',
    stats: ['Multi-platinum writer', 'Justin Bieber collaborator', 'Grammy nominated'],
    featured: false,
  },
  {
    name: 'Dominic Owen',
    title: 'Music Producer',
    stats: ['Award-winning producer', 'Cross-genre expertise', 'Artist developer'],
    featured: false,
  },
  {
    name: 'Jamie Beard',
    title: 'Music Executive',
    stats: ['Industry veteran', 'Artist management', 'Global music strategy'],
    featured: false,
  },
  {
    name: 'Joe Killington',
    title: 'Producer & Songwriter',
    stats: ['UK hitmaker', 'Pop & electronic specialist', 'Chart-topping tracks'],
    featured: false,
  },
  {
    name: 'Leon Bolier',
    title: 'Electronic Producer',
    stats: ['Dance music pioneer', 'Trance & progressive', 'International DJ'],
    featured: false,
  },
  {
    name: 'Mark Hill',
    title: 'BRIT Award Winner',
    stats: ['Craig David collaborator', 'UK Garage legend', 'Multi-platinum producer'],
    featured: false,
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-container">
          <div className="hero-video-placeholder">
            <div className="hero-overlay" />
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">NECKER VIBES</h1>
          <p className="hero-tagline">Where Songs Are Born and Stars Are Made</p>
          <p className="hero-subtitle">The World&apos;s Stage Uniting Music, Mentorship, and Mission</p>
          <div className="hero-date">October 8&ndash;16, 2026 &bull; Necker Island</div>
          <a href="#apply" className="cta-button">Apply Now</a>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-line" />
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-label">The Experience</span>
              <h2 className="section-title">What is Necker Vibes?</h2>
            </div>
          </FadeInSection>

          <div className="about-content">
            <FadeInSection delay={100}>
              <div className="about-text">
                <p>
                  Necker Vibes is an unprecedented global music initiative that transforms undiscovered talent into tomorrow&apos;s stars. Through worldwide auditions, 16 exceptional artists are selected to journey to the exclusive Necker Island for an intensive week of creation and mentorship with the world&apos;s most celebrated producers.
                </p>
                <p>
                  Over nine transformative days, each artist will be paired with legendary mentors to craft two original songs, resulting in 32 new tracks that will launch careers and capture the world&apos;s attention. The entire journey will be documented in an immersive docuseries, bringing audiences behind the scenes of this once-in-a-lifetime experience.
                </p>
                <p>
                  More than just music, Necker Vibes supports Virgin Unite&apos;s mental health initiatives, proving that creativity and purpose can change the world together.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <blockquote className="quote-block">
                <p className="quote-text">
                  Necker Vibes is a bold and exciting initiative that resonates to the long-held dream of mine dating back to my earliest days on Necker Island.
                </p>
                <cite className="quote-author">Sir Richard Branson</cite>
              </blockquote>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="section mentors-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-label">World-Class Mentorship</span>
              <h2 className="section-title">Meet Your Mentors</h2>
              <p className="section-description">
                Learn from the visionaries who have shaped modern music. Our confirmed mentors have collectively amassed over 135 billion streams and shaped the careers of countless artists.
              </p>
            </div>
          </FadeInSection>

          <div className="mentor-grid">
            {mentors.map((mentor, index) => (
              <FadeInSection key={mentor.name} delay={index * 50}>
                <div className={`mentor-card ${mentor.featured ? 'featured' : ''}`}>
                  <div className="mentor-image-placeholder">
                    {mentor.name.charAt(0)}
                  </div>
                  <div className="mentor-overlay">
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <span className="mentor-title">{mentor.title}</span>
                    <div className="mentor-stats">
                      {mentor.stats.map((stat, i) => (
                        <div key={i} className="mentor-stat">{stat}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <FadeInSection>
            <div className="cta-content">
              <h2 className="cta-title">
                Get Your Chance to Be Part of
                <span className="cta-title-highlight">The Next Big Thing</span>
              </h2>
              <p className="cta-subtitle">
                This is your moment. Join the global auditions and take the first step toward collaborating with the legends who&apos;ve shaped music history.
              </p>
              <a href="#apply" className="cta-button">Start Your Journey</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="section form-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <span className="section-label">Apply Now</span>
              <h2 className="section-title">Begin Your Application</h2>
              <p className="section-description">
                Share your music with us. Our team reviews every submission personally.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="form-container">
              <ApplicationForm />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">NECKER VIBES</div>
            <div className="footer-charity">
              Benefiting <a href="https://www.virgin.com/unite" target="_blank" rel="noopener noreferrer">Virgin Unite</a> &mdash; Mental Health Causes
            </div>
            <div className="footer-copyright">
              &copy; 2026 Necker Vibes. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
