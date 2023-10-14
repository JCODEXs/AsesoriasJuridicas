import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
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
    <ClerkProvider>
    <html lang="en">
            <body style={{minHeight: "100vh" ,  background: "rgb(150,155,155,0.3)"}} >
          <div id="notifications"></div>
              <Layout style={{flex:1,}} >{children}</Layout>
              <FooterSimple/>
              </body>
          </html>
          </ClerkProvider>
  )
}
