import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import ServicesCover from "./components/ServicesCover";

export default function Services() {
  return (
    <main>
      <Header />

      <section
        className="
              w-full overflow-hidden flex flex-col shadow-lg min-h-[259px]
          "
      >
        <div className="w-[90%] md:w-[70%] h-full mx-auto mt-16 mb-4 flex flex-col gap-2">
          <span className="text-black-grayLighter text-sm">Bread Crumb</span>

          <ServicesCover/>

        </div>
      </section>

      <Footer />
    </main>
  )
}