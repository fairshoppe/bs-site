import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSecret } from '@/utils/secrets'

export async function POST(request: Request) {
  try {
    const secret = await getSecret('STRIPE_SECRET_KEY')
    const stripe = new Stripe(secret, {
      apiVersion: '2023-10-16',
    })

    const { packageType, packageName, price } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageName,
            },
            unit_amount: price * 100, // Convert to cents
            ...(packageType === 'standard' || packageType === 'pro'
              ? { recurring: { interval: 'month' } }
              : {}),
          },
          quantity: 1,
        },
      ],
      mode: packageType === 'standard' || packageType === 'pro' ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
} 