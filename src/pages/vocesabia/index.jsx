import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";

export default function Tips() {
  return (
    <main>
      <Header />

      <section
        className="
              w-full overflow-hidden flex flex-col shadow-lg min-h-[259px]
          "
      >
        <div className="w-[90%] md:w-[70%] h-full mx-auto mt-16 mb-4 flex flex-col gap-2">
          <div>
            <h2 className="text-black-gray">Você Sabia?</h2>
            <h1 className="text-dark-blue text-2xl">Tudo sobre o mundo dos Pets!</h1>
          </div>

          <div
            className="
              grid grid-cols-2 w-full gap-4 justify-around items-center
              md:grid-cols-3
              lg:grid-cols-4
            "
          >

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}