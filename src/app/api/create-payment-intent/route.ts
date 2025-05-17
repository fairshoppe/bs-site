import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSecret } from '@/utils/secrets'

export async function POST(request: Request) {
  try {
    const secret = await getSecret('STRIPE_SECRET_KEY')
    console.log('Secrets retrieved successfully:', secret)
    
    const stripe = new Stripe(secret, {
      apiVersion: '2023-10-16',
    })
    console.log('Stripe client initialized')

    const { price } = await request.json()
    console.log('Request body:', { price })

    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100, // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    })
    console.log('Payment intent created:', paymentIntent.id)

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Detailed error in create-payment-intent:', error)
    return NextResponse.json(
      { error: 'Error creating payment intent', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
