import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    console.log('New application received:', {
      timestamp: new Date().toISOString(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      instagram: data.instagram,
      tiktok: data.tiktok,
      musicLink: data.musicLink,
      additionalContent: data.additionalContent,
    })

    // Push to Google Sheet via Apps Script webhook
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (webhookUrl) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            instagram: data.instagram || '',
            tiktok: data.tiktok || '',
            musicLink: data.musicLink,
            additionalContent: data.additionalContent || '',
          }),
        })
        if (!sheetResponse.ok) {
          console.error('Google Sheets webhook error:', sheetResponse.status, await sheetResponse.text())
        }
      } catch (sheetError) {
        // Log but don't fail the application — sheet sync is non-blocking
        console.error('Google Sheets webhook failed:', sheetError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully'
    })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process application' },
      { status: 500 }
    )
  }
}
