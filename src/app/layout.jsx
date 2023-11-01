import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Layout from '../../components/layout/layout'
import FooterSimple from '../../components/footer/simple'
import { NextResponse } from 'next/server'
import { GeistSans, GeistMono } from 'geist/font'


export const metadata = {
  title: 'Pensiones Colombianos',
  description: 'Asesorías jurídicas para pensiones',
}

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en" className={GeistSans.className}>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
        </head>
 
      <ClerkProvider>
            <body style={{minHeight: "100vh" ,  background: "rgb(150,155,155,0.3)"}} >
          <div id="notifications"></div>
              <Layout style={{flex:1,}} >{children}</Layout>
              <FooterSimple/>
              </body>
          </ClerkProvider>
          </html>
  )
}
