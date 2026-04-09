import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Log the application data (in production, this would go to a database)
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
