import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

 export const metadata = {
  title: 'B2Creative',
  description: 'Higher Rankings. Relevant Visitors. More Customers',

  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
     
      <body className={inter.className}>{children}</body>
    </html>
  )
}
