import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import CookieBanner from '../../components/layout/CookieBanner'
import '../globals.css'
import { Nunito } from 'next/font/google'
import { getPayloadClient } from '../../lib/payload'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
})

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadClient()
  const { docs: pages } = await payload.find({
    collection: 'pages',
    select: {
      title: true,
      slug: true,
    },
    limit: 100,
  })

  // Filter out legal pages from main menu if desired
  const menuPages = (pages as any[]).filter(
    (p) => !['impressum', 'datenschutz', 'cookies'].includes(p.slug)
  )

  return (
    <div className={`${nunito.variable} font-main antialiased min-h-screen flex flex-col`}>
      <Header cmsPages={menuPages} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
