import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import Image from "next/image";

export default function Schedules() {
  return (
    <main>
      <Header />

      <section
        className="
              w-full overflow-hidden flex flex-col shadow-lg min-h-[259px]
          "
      >
        <div className="w-[90%] md:w-[70%] max-w-[1000px] h-full mx-auto mt-16 mb-4 flex flex-col gap-6">
          <div>
            <h2 className="text-black-gray">Agendamentos</h2>
            <h1 className="text-dark-blue text-2xl">Vamos cuidar do seu pet!</h1>
          </div>

          <div
            className="
              flex flex-col items-center justify-center p-6 rounded-md shadow-md 
              bg-dark-blueDarker max-w-[600px] self-center w-full
            "
          >
            <h1 className="text-white text-3xl text-center">Página em desenvolvimento</h1>

            <Image
              src="/media/manutention2.gif"
              alt="frança vet"
              width="300"
              height="100"
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
