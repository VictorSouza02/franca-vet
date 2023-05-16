import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import ServicesCover from "./components/ServicesCover";
import Image from "next/image";
import { SideScroll } from "@/components/sideScroll";
import Link from "next/link";

export default function Services() {
  const scrollRef = SideScroll();

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
            <h1 className="text-dark-blue text-xl capitalize">Nossos serviços!</h1>
          </div>

          <div
            className="
              flex justify-around gap-6 flex-wrap
              lg:justify-between
            "
          >
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

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-dark-blue text-xl capitalize">PetShop</h1>
            </div>

            <div>
              <p className="text-black-gray">
                Aqui você encontrará uma seleção cuidadosamente escolhida de produtos para o seu animal de estimação.
                De alimentos de alta qualidade a brinquedos divertidos e acessórios indispensáveis,
                temos tudo o que você precisa para cuidar e mimar seu pet.
                Compras online fáceis e entrega rápida para tornar sua experiência ainda melhor.
                Cuide do seu melhor amigo com produtos confiáveis e de primeira linha.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-dark-blue text-xl capitalize">Banho e tosa</h1>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="w-full md:w-[30%]">
                <div ref={scrollRef} className="flex gap-2 overflow-x-scroll overflow-y-hidden snap-x overflow-scrolling scroll-smooth rounded-md shadow-md">
                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <video
                      src="/media/ArthurAlvarenga/BobVideo.mp4"
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <Image
                      src="/media/ArthurAlvarenga/1.jpg"
                      alt="Loja pet"
                      width="300"
                      height="300"
                      className="w-full h-full object-contain md:object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <Image
                      src="/media/ArthurAlvarenga/2.jpg"
                      alt="Loja pet"
                      width="300"
                      height="300"
                      className="w-full h-full object-contain md:object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <Image
                      src="/media/ArthurAlvarenga/3.jpg"
                      alt="Loja pet"
                      width="300"
                      height="300"
                      className="w-full h-full object-contain md:object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <Image
                      src="/media/ArthurAlvarenga/4.jpg"
                      alt="Loja pet"
                      width="300"
                      height="300"
                      className="w-full h-full object-contain md:object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-none w-full h-[300px] snap-start pointer-events-none">
                    <Image
                      src="/media/ArthurAlvarenga/5.jpg"
                      alt="Loja pet"
                      width="300"
                      height="300"
                      className="w-full h-full object-contain md:object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-[55%] flex flex-col items-center gap-6">
                <p className="text-black-gray">
                  Deixe o seu pet com uma aparência impecável em nossa seção de Banho e Tosa.
                  Nossos profissionais experientes oferecem serviços de banho relaxante,
                  tosa cuidadosa e cuidados de higiene para deixar seu animal de estimação limpo,
                  cheiroso e com estilo. Proporcione ao seu pet o tratamento de beleza que ele merece
                  e agende agora mesmo!
                </p>

                <div className="flex flex-col items-center gap-6">
                  <a
                    href='/agendamento'
                    className="
                        rounded-2xl border-2 border-dark-blue text-dark-blue flex justify-center items-center gap-2
                        capitalize px-3 py-1 duration-[0.6s] w-[350px] max-w-[60%] self-center
                        hover:bg-dark-blue hover:text-white group
                    "
                  >
                    Instagram

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="group-hover:fill-white duration-[0.6s]"
                    >
                      <path fllrule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 
                        0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </a>

                  <Link
                    href='/agendamento'
                    className="
                        rounded-2xl border-2 border-dark-blue text-dark-blue flex justify-center items-center gap-2
                        capitalize px-3 py-1 duration-[0.6s] w-[350px] max-w-[60%] self-center
                        hover:bg-dark-blue hover:text-white group
                    "
                  >
                    Agendar

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="group-hover:fill-white duration-[0.6s]"
                    >
                      <path fllrule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 
                        0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-dark-blue text-xl capitalize">Clínica Veterinária</h1>
            </div>

            <div>
              <p className="text-black-gray">
                Na nossa Clínica Veterinária, o bem-estar e a saúde do seu pet são a nossa prioridade.
                Contamos com uma equipe de veterinários altamente capacitados e
                equipamentos modernos para fornecer cuidados médicos abrangentes.
                Confie em nós para manter seu pet saudável e feliz.
                Agende uma consulta hoje mesmo e cuide do seu companheiro com todo o amor e expertise que ele merece.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
