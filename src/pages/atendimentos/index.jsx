import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import ServicesCover from "./components/ServicesCover";
import ServicesIcons from "./components/ServicesIcons";
import BathAndGroom from "./components/BathAndGroom";

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

          <div className="flex flex-col gap-6">
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

            <BathAndGroom/>

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

        </div>
      </section>

      <Footer />
    </main>
  )
}
