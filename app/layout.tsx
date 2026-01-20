import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cooked | Macro & Bitcoin News in Plain English',
  description: 'Macro and Bitcoin news for people who know something\'s broken but don\'t have time for the finance bro BS. Free weekly newsletter.',
  keywords: ['bitcoin', 'macro', 'newsletter', 'finance', 'economics', 'inflation', 'fed'],
  authors: [{ name: 'Cooked' }],
  openGraph: {
    title: 'Cooked | Your Money is Cooked',
    description: 'Macro and Bitcoin news for people who know something\'s broken but don\'t have time for the finance bro BS.',
    url: 'https://cooked.news',
    siteName: 'Cooked',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooked | Your Money is Cooked',
    description: 'Macro and Bitcoin news in plain English. Free weekly newsletter.',
    creator: '@cooked',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
