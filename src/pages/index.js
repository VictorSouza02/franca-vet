import LandingSection from "../components/landing/landingSection";
import LandingRecommendedProducts from "../components/landing/landingRecommendedProducts";
import LandingTipsSection from "../components/landing/landingTipsSection";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Header />

      <LandingSection />

      <LandingRecommendedProducts />

      <LandingTipsSection />

      <Footer />
    </main>
  )
}