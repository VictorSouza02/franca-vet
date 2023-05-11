import Header from "@/components/Header";
import Landing from "./index/Landing";
import RecommendedProducts from "./index/RecommendedProducts";
import Tips from "./index/Tips";
import Footer from "@/components/FooterResponsive";
import Head from "next/head";

export default function Home() {
  return (
    <html>
      <Head>
        <meta name="theme-color" content="#EEC77E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#EEC77E" />
        <meta name="msapplication-navbutton-color" content="#EEC77E" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="As Melhores Dicas Para O Seu Pet!" />

        <title>França Vet &#128062;</title>
      </Head>

      <main>
        <Header />

        <Landing />

        <RecommendedProducts />

        <Tips />

        <Footer />
      </main>
    </html>
  )
}