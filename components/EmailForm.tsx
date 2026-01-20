'use client'

import { useState, FormEvent } from 'react'

interface EmailFormProps {
  className?: string
}

export default function EmailForm({ className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('You\'re in! Check your inbox.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`p-7 bg-gradient-to-br from-sage-400/10 to-terracotta-400/10 border border-sage-400/20 rounded-2xl text-center ${className}`}>
        <p className="text-lg font-semibold text-sage-900 mb-1">You're in! 🌿</p>
        <p className="text-sm text-sage-600">Check your inbox for a welcome email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3.5 ${className}`}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-base"
        required
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Joining...' : 'Get the weekly breakdown →'}
      </button>
      
      {status === 'error' && (
        <p className="text-sm text-terracotta-500">{message}</p>
      )}
      
      <p className="text-[13px] text-sage-400 mt-1">
        Free. No spam. Unsubscribe whenever. Under 3 min read.
      </p>
    </form>
  )
}
