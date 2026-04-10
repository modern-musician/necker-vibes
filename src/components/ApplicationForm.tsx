'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  instagram: string
  tiktok: string
  musicLink: string
  additionalContent: string
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    instagram: '',
    tiktok: '',
    musicLink: '',
    additionalContent: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">&#10003;</div>
        <h3 className="success-title">Application Received</h3>
        <p className="success-message">
          Thank you for your interest in Necker Vibes. Our team will review your application and be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row two-col">
        <div className="form-group">
          <label htmlFor="instagram" className="form-label">
            Instagram Handle
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            className="form-input"
            placeholder="@yourusername"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tiktok" className="form-label">
            TikTok Handle
          </label>
          <input
            type="text"
            id="tiktok"
            name="tiktok"
            className="form-input"
            placeholder="@yourusername"
            value={formData.tiktok}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="musicLink" className="form-label">
          Music Link (Spotify, SoundCloud, or other) *
        </label>
        <input
          type="url"
          id="musicLink"
          name="musicLink"
          className="form-input"
          placeholder="https://open.spotify.com/artist/... or any music URL"
          value={formData.musicLink}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalContent" className="form-label">
          Additional Content
        </label>
        <textarea
          id="additionalContent"
          name="additionalContent"
          className="form-textarea"
          placeholder="Share any additional links, achievements, or anything else you'd like us to know about you and your music..."
          value={formData.additionalContent}
          onChange={handleChange}
        />
      </div>

      <div className="form-submit">
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
