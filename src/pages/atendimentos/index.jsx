import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import ServicesCover from "./components/ServicesCover";
import Image from "next/image";

export default function Services() {
  return (
    <main>
      <Header />

      <section
        className="
              w-full overflow-hidden flex flex-col shadow-lg min-h-[259px]
          "
      >
        <div className="w-[90%] md:w-[70%] max-w-[1000px] h-full mx-auto mt-16 mb-4 flex flex-col gap-6">
          <span className="text-black-grayLighter text-sm">Bread Crumb</span>

          <ServicesCover />

          <div>
            <h1 className="text-dark-blue text-xl">Nossos serviços!</h1>
          </div>

          <div className="flex justify-around gap-y-4 flex-wrap">
            <div 
            className="
              bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
              md:w-[200px]
            "
            >
              <div>
                <Image
                  src="/media/petshop.png"
                  alt="Loja pet"
                  width="80"
                  height="80"
                />
              </div>

              <h1 className="text-black-gray text-center">
                Petshop
              </h1>
            </div>

            <div 
            className="
              bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
              md:w-[200px]
            "
            >
              <div>
                <Image
                  src="/media/banhoetosa.png"
                  alt="Cachorro tomando banho"
                  width="80"
                  height="80"
                />
              </div>

              <h1 className="text-black-gray text-center">
                Banho e tosa
              </h1>
            </div>

            <div 
            className="
              bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
              md:w-[200px]
            "
            >
              <div>
                <Image
                  src="/media/atendimentopet.png"
                  alt="Clínica veterinária"
                  width="80"
                  height="80"
                />
              </div>

              <h1 className="text-black-gray text-center">
                Clínica Veterinária
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
