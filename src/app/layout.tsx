import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nabilah Shahidan — Software Engineering Graduate Portfolio 2026',
  description:
    "Software Engineering graduate from UMPSA (CGPA 3.31, Dean's List) seeking full-time SE/SD/SA roles in Malaysia. Python, Flask, SQL, AWS. Available August 2026.",
  keywords: [
    'Software Engineering',
    'UMPSA',
    'Malaysia',
    'Python',
    'Flask',
    'Graduate Portfolio',
    'Nabilah Shahidan',
  ],
  openGraph: {
    title: 'Nabilah Shahidan — Software Engineering Graduate',
    description:
      'Software Engineering graduate with internship at TNB Renewables. Available August 2026.',
    type: 'website',
    locale: 'en_MY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabilah Shahidan — Portfolio 2026',
    description: 'Software Engineering graduate from UMPSA, Class of 2026.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
