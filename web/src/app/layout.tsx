import './global.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'DevStage - Plataforma de Desenvolvimento e Aprendizado',
  description:
    'DevStage é a plataforma de aprendizado e desenvolvimento de software, com recursos interativos e cursos sobre as mais recentes tecnologias.',
  keywords:
    'DevStage, desenvolvimento, aprendizado, cursos de programação, Next.js, Tailwind CSS, React, tecnologia',

  openGraph: {
    title: 'DevStage - Plataforma de Desenvolvimento e Aprendizado',
    description:
      'DevStage é a plataforma de aprendizado e desenvolvimento de software, com recursos interativos e cursos sobre as mais recentes tecnologias.',
    images: [{ url: '/og-image.png' }],
    url: 'https://www.devstage.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@devstage',
    title: 'DevStage - Plataforma de Desenvolvimento e Aprendizado',
    description:
      'DevStage é a plataforma de aprendizado e desenvolvimento de software, com recursos interativos e cursos sobre as mais recentes tecnologias.',
    images: [{ url: '/og-image.png' }],
  },
}

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${oxanium.variable} ${montserrat.variable}`}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DevStage - Plataforma de Desenvolvimento e Aprendizado"
        />
        <meta
          property="og:description"
          content="DevStage é a plataforma de aprendizado e desenvolvimento de software, com recursos interativos e cursos sobre as mais recentes tecnologias."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.devstage.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DevStage - Plataforma de Desenvolvimento e Aprendizado"
        />
        <meta
          name="twitter:description"
          content="DevStage é a plataforma de aprendizado e desenvolvimento de software, com recursos interativos e cursos sobre as mais recentes tecnologias."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat md:bg-right-top bg-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
