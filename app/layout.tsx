import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { generateInlineThemeScript } from './themes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ksalk | Konrad Sałkowski - devblog',
    template: 'ksalk | %s',
  },
  description: 'ksalk - Konrad Sałkowski\'s devblog covering .NET, software and IT topics',
  keywords: [
    'ksalk',
    'konrad sałkowski',
    'devblog',
    'dotnet',
    'csharp',
    '.net',
    'programming',
    'software',
    'software development',
    'web development',
    'blog'
  ],
  authors: [
    { name: 'Konrad Sałkowski', url: baseUrl },
    { name: 'ksalk', url: baseUrl }
  ],
  creator: 'Konrad Sałkowski',
  openGraph: {
    title: 'ksalk - devblog',
    description: 'ksalk - Konrad Sałkowski\'s devblog covering .NET, software and IT topics',
    url: baseUrl,
    siteName: 'ksalk - devblog',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script
          // Prevent flash of wrong theme: runs before paint (generated)
            dangerouslySetInnerHTML={{ __html: generateInlineThemeScript() }}
          />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        {/* Favicon font: Ceviche One by Font Diner, licensed under SIL Open Font License 1.1 */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 min-w-0 mt-6 flex flex-col px-2 md:px-0 pt-8">
          {children}
        </main>
        <Footer />
        {/* CloudFlare web analytics */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "24c9f12ab74e416698eff0ed2ecba26e"}'></script>
      </body>
    </html>
  )
}
