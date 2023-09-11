import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raiyan | Portfolio',
  description: 'My Personal programmer/Software Developer website ',
  creator: "Raiyan",
  keywords: ["raiyanulislam", 'raiyan', 'raiyan ul islam', 'raiyan22', 'raiyan22 portfolio', 'raiyan portfolio', 'raiyanulislam portfolio', '@raiyan22']

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
