import Landing from "./index/Landing";
import RecommendedProducts from "./index/RecommendedProducts";
import Tips from "./index/Tips";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Landing />

      <RecommendedProducts />

      <Tips />

      <Footer />
    </main>
  )
}