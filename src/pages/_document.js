import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="theme-color" content="#EEC77E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#EEC77E" />
        <meta name="msapplication-navbutton-color" content="#EEC77E" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="O Melhor Para O Seu Pet!" />

        <title>França Vet &#128062;</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
