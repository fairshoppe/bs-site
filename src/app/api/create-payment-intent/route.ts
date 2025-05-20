import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSecret } from '@/utils/secrets'

// Example of what create-payment-intent should look like
export async function POST(request: Request) {
  try {
    const secret = await getSecret('STRIPE_SECRET_KEY')
    const stripe = new Stripe(secret, {
      apiVersion: '2023-10-16',
    })

    const { packageType, packageName, price } = await request.json()

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100, // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      description: packageName,
      metadata: {
        packageType,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    )
  }
}

