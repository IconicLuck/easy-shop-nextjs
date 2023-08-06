import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ThemeProviders from '@/providers/ThemeProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className='transition-all'>

      <body className={inter.className}>
        <ThemeProviders>
          <div>
            <Navbar></Navbar>
          </div>
          {children}
          <div>
            <Footer></Footer>
          </div>
        </ThemeProviders>
      </body>

    </html>
  )
}
