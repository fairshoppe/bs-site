import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSecret } from '@/utils/secrets'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const secret = await getSecret('STRIPE_SECRET_KEY')
    const stripe = new Stripe(secret, {
      apiVersion: '2023-10-16',
    })

    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'No session ID provided' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      )
    }

    return NextResponse.json({ status: 'success' })
  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Error verifying payment' },
      { status: 500 }
    )
  }
}
