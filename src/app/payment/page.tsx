'use client'

import { Suspense } from 'react'
import PaymentContent from './PaymentContent'

export default function Payment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  )
} 