import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // ============================================
    // OPTION 1: Beehiiv (Recommended)
    // ============================================
    // 1. Sign up at beehiiv.com
    // 2. Get your API key from Settings > Integrations
    // 3. Get your Publication ID from Settings > Publication
    // 4. Add to .env.local:
    //    BEEHIIV_API_KEY=your_api_key
    //    BEEHIIV_PUBLICATION_ID=your_publication_id
    
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID

    if (BEEHIIV_API_KEY && BEEHIIV_PUBLICATION_ID) {
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: true,
            send_welcome_email: true,
          }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Beehiiv error:', error)
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // ============================================
    // OPTION 2: Buttondown (Simpler alternative)
    // ============================================
    // 1. Sign up at buttondown.email
    // 2. Get your API key from Settings
    // 3. Add to .env.local:
    //    BUTTONDOWN_API_KEY=your_api_key
    
    const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY

    if (BUTTONDOWN_API_KEY) {
      const response = await fetch(
        'https://api.buttondown.email/v1/subscribers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Buttondown error:', error)
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // ============================================
    // FALLBACK: Log to console (for testing)
    // ============================================
    console.log('📧 New subscriber (no provider configured):', email)
    
    // For now, just return success to test the flow
    // REMOVE THIS IN PRODUCTION - configure a real provider above
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
