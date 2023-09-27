import './globals.css'
import type { Metadata } from 'next'
import Layout from '../../components/layout/layout'


export const metadata: Metadata = {
  title: 'Pensiones Colombianos',
  description: 'Asesorías jurídicas para pensiones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body >
          <div id="notifications"></div>
              <Layout>{children}</Layout>
              </body>
          </html>
  )
}
