import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#EEC77E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#EEC77E" />
        <meta name="msapplication-navbutton-color" content="#EEC77E" />
        <link rel="icon" href="/media/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="O Melhor Para O Seu Pet!" />

        <title>França Vet &#128062;</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
