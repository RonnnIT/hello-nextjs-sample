// These styles apply to every route in the application
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hellō Next.js Sample</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
          body {
              color: #303030;
              background-color: white;
          }
          @media (prefers-color-scheme: dark) {
              body {
                  color: #d4d4d4;
                  background-color: #151515;
                  color-scheme: dark;
              }
          }
      `}</style>
    </>
  )
}