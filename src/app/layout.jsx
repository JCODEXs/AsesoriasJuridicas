import './globals.css'

import Layout from '../../components/layout/layout'
import FooterSimple from '../../components/footer/simple'


export const metadata = {
  title: 'Pensiones Colombianos',
  description: 'Asesorías jurídicas para pensiones',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
            <body >
          <div id="notifications"></div>
              <Layout>{children}</Layout>
              <FooterSimple/>
              </body>
          </html>
  )
}
