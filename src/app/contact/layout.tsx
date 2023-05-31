import Head from 'next/head'
import  "../globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

 export const metadata = {
  title: 'Contact',
  description: 'Higher Rankings. Relevant Visitors. More Customers',
image: "/logo.jpg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.image} />
      </Head>
     
      <body className={inter.className}>{children}</body>
    </html>
  )
}
