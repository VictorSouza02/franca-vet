import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import ServicesCover from "./components/ServicesCover";
import ServicesIcons from "./components/ServicesIcons";
import CarrosselFlowbite from "@/components/CarrosselFlowbite";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main>
      <Header />

      <section
        className="
          w-full overflow-hidden flex flex-col shadow-lg min-h-[259px]
        "
      >
        <div className="w-[90%] md:w-[70%] max-w-[1000px] h-full mx-auto mt-16 mb-6 flex flex-col gap-4">
          <span className="text-black-grayLighter text-sm">Bread Crumb</span>

          <ServicesCover />

          <div>
            <h1 className="text-dark-blue text-xl capitalize">Nossos serviços!</h1>
          </div>

          <ServicesIcons />

          <div className="flex flex-col gap-6 lg:gap-14 lg:mt-8">
            <div className="flex flex-col gap-6">
              <div className="lg:hidden">
                <h1 className="text-dark-blue text-xl capitalize">PetShop</h1>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <CarrosselFlowbite slideState={true} sliteInterval={5000}>
                  <Image
                    src="/media/PetShop/1.png"
                    alt="Casinha de cachorro"
                    width="300"
                    height="300"
                    className="w-full h-full object-contain"
                  />

                  <Image
                    src="/media/PetShop/2.png"
                    alt="Ração de cachorro"
                    width="300"
                    height="300"
                    className="w-full h-full object-contain"
                  />

                  <Image
                    src="/media/PetShop/3.png"
                    alt="Itens para animais"
                    width="300"
                    height="300"
                    className="w-full h-full object-contain"
                  />

                  <Image
                    src="/media/PetShop/4.png"
                    alt="Casinha com arranhador para gatos"
                    width="300"
                    height="300"
                    className="w-full h-full object-contain"
                  />
                </CarrosselFlowbite>

                <div className="lg:w-[55%] flex flex-col items-center gap-6">
                  <div className="hidden lg:block">
                    <h1 className="text-dark-blue text-3xl font-bold capitalize">PetShop</h1>
                  </div>

                  <p className="text-black-gray lg:text-right">
                    Aqui você encontrará uma seleção cuidadosamente escolhida de produtos para o seu animal de estimação.
                    De alimentos de alta qualidade a brinquedos divertidos e acessórios indispensáveis,
                    temos tudo o que você precisa para cuidar e mimar seu pet.
                    Compras online fáceis e entrega rápida para tornar sua experiência ainda melhor.
                    Cuide do seu melhor amigo com produtos confiáveis e de primeira linha.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="lg:hidden">
                <h1 className="text-dark-blue text-xl capitalize">Banho e tosa</h1>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="lg:order-2 w-full max-w-[380px] self-center h-[300px]">
                  <CarrosselFlowbite slideState={false}>
                    <video
                      src="/media/ArthurAlvarenga/BobVideo.mp4"
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                      alt="Tosa sendo feita em cachorro"
                    />

                    <Image
                      src="/media/ArthurAlvarenga/2.jpg"
                      alt="Resultado tosa"
                      width="300"
                      height="300"
                      className="w-full h-full object-cover"
                    />

                    <Image
                      src="/media/ArthurAlvarenga/3.jpg"
                      alt="Resultado tosa"
                      width="300"
                      height="300"
                      className="w-full h-full object-cover"
                    />

                    <Image
                      src="/media/ArthurAlvarenga/4.jpg"
                      alt="Resultado tosa"
                      width="300"
                      height="300"
                      className="w-full h-full object-cover"
                    />

                    <Image
                      src="/media/ArthurAlvarenga/5.jpg"
                      alt="Resultado tosa"
                      width="300"
                      height="300"
                      className="w-full h-full object-cover"
                    />
                  </CarrosselFlowbite>
                </div>

                <div className="lg:w-[55%] flex flex-col items-center gap-6">
                  <div className="hidden lg:block">
                    <h1 className="text-dark-blue text-3xl font-bold capitalize">Banho e tosa</h1>
                  </div>

                  <p className="text-black-gray">
                    Deixe o seu pet com uma aparência impecável em nossa seção de Banho e Tosa.
                    Nossos profissionais experientes oferecem serviços de banho relaxante,
                    tosa cuidadosa e cuidados de higiene para deixar seu animal de estimação limpo,
                    cheiroso e com estilo. Proporcione ao seu pet o tratamento de beleza que ele merece
                    e agende agora mesmo!
                  </p>

                  <div className="flex flex-col items-center gap-6 lg:flex-row max-w-[300px]">
                    <a
                      href='https://www.instagram.com/alvarenga_groomer/'
                      target="_blank"
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
                        className="group-hover:fill-white fill-dark-blue duration-[0.6s]"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>

                    <Link
                      href='/agendamentos'
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
                        className="group-hover:fill-white fill-dark-blue duration-[0.6s]"
                      >
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="lg:hidden">
                <h1 className="text-dark-blue text-xl capitalize">Clínica Veterinária</h1>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <CarrosselFlowbite slideState={true} sliteInterval={5000}>
                  <Image
                    src="/media/Carol/1.jpeg"
                    alt="Raio-X em patas"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover"
                  />

                  <Image
                    src="/media/Carol/2.jpeg"
                    alt="Gata parto"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover"
                  />

                  <Image
                    src="/media/Carol/3.jpeg"
                    alt="Cachorro em maca"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover"
                  />

                  <Image
                    src="/media/Carol/4.jpeg"
                    alt="Ultrassom"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover"
                  />
                </CarrosselFlowbite>

                <div className="lg:w-[55%] flex flex-col items-center gap-6">
                  <div className="hidden lg:block">
                    <h1 className="text-dark-blue text-3xl font-bold capitalize">Clínica Veterinária</h1>
                  </div>

                  <p className="text-black-gray lg:text-right">
                    Na nossa Clínica Veterinária, o bem-estar e a saúde do seu pet são a nossa prioridade.
                    Contamos com uma equipe de veterinários altamente capacitados e
                    equipamentos modernos para fornecer cuidados médicos abrangentes.
                    Confie em nós para manter seu pet saudável e feliz.
                    Agende uma consulta hoje mesmo e cuide do seu companheiro com todo o amor e expertise que ele merece.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
