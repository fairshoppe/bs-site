'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadStripe, Stripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    // This is the key part - make sure you're properly confirming the payment
    const { error: submitError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Add payment_method_data to provide additional details
        payment_method_data: {
          billing_details: {
            name: name || 'Customer',
            email: email || undefined,
          },
        },
        return_url: `${window.location.origin}/success`,
      },
      redirect: 'if_required', // Only redirect if 3D Secure is needed
    });

    if (submitError) {
      console.error('Payment error:', submitError);
      setError(submitError.message || 'An error occurred');
      setLoading(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Handle successful payment without redirect
      window.location.href = `${window.location.origin}/success`;
    }
    // If we get here without an error or success, it means the user is being redirected
    // for 3D Secure authentication, so we don't need to do anything
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" color="var(--primary)">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <PaymentElement />
      {error && <div className="alert error">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="cta-button"
      >
        {loading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            Processing...
          </>
        ) : (
          <>
            <i className="fas fa-lock"></i>
            Pay Now
          </>
        )}
      </button>
    </form>
  )
}


export default function PaymentContent() {
  const searchParams = useSearchParams()
  const packageType = searchParams.get('package')
  const [clientSecret, setClientSecret] = useState('')
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null)
  const stripePublishableKey = 'pk_live_51R4A7qDbuJ9TlqXESoilBtyv7rdNbfOnHv2cwinkNHXMkD92KziljZbz22u8QOhbA9xfidgbOl7kNxjFq1HDPRp700plLo6NTN'

  useEffect(() => {
    async function initializeStripe() {
      console.log('key:', stripePublishableKey)
      const stripe = await loadStripe(stripePublishableKey)
      setStripePromise(Promise.resolve(stripe))
    }
    initializeStripe()
  }, [])

  const getPackageDetails = () => {
    switch (packageType) {
      case 'basic-web':
        return { name: 'Core Small Business Website', price: 500 }
      case 'basic-mobile':
        return { name: 'Core Small Business Mobile App', price: 1000 }
      case 'basic-ai-agent':
        return { name: 'Core AI Phone Agent', price: 1000 }
      default:
        return null
    }
  }

  const packageDetails = getPackageDetails()

  useEffect(() => {
    if (!packageDetails) return

    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageType,
        packageName: packageDetails.name,
        price: packageDetails.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [packageType])

  if (!packageDetails) {
    return (
      <main>
        <section className="hero-section">
          <div className="container">
            <h1>Invalid Package</h1>
            <p>The selected package is not available. Please return to the pricing page to select a valid package.</p>
          </div>
        </section>
      </main>
    )
    
  }

  return (
    <main>
      
        {stripePublishableKey.startsWith('pk_test_') && (
          <div style={{
            background: '#ffe58f', 
            color: '#875a00', 
            padding: '10px', 
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999
          }}>
            TEST MODE - Use card number 4242 4242 4242 4242, any future date, any CVC
          </div>
        )}

      
      <section className="hero-section">
        <div className="container">
          <h1>Complete Your Purchase</h1>
          <p>You're just one step away from getting started with {packageDetails.name}.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="payment-card">
            <h2>Order Summary</h2>
            <div className="order-details">
              <div className="order-item">
                <span>{packageDetails.name}</span>
                <span>${packageDetails.price}</span>
              </div>
            </div>
            <div className="alert info" style={{marginBottom: '1rem', background: 'rgba(52, 152, 219, 0.1)', borderLeft: '4px solid #3498db', color: '#2980b9'}}>
              <i className="fas fa-info-circle"></i>
              Upgrades and add-ons require speaking to a representative. You can add upgrades to your service at any time after your initial purchase.
            </div>
            {clientSecret && stripePromise && (
              <Elements 
                stripe={stripePromise} 
                options={{ 
                  clientSecret,
                  appearance: {
                    theme: 'night',
                    variables: {
                      colorPrimary: '#13699a',
                      colorBackground: '#222222',
                      colorText: '#ffffff',
                    },
                  },
                }}
              >
                <CheckoutForm />
              </Elements>
            )}


            <p className="secure-payment">
              <i className="fas fa-shield-alt"></i>
              Your payment is secure and encrypted
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 