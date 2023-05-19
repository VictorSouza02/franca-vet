import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import Image from "next/image";

export default function About() {
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
            <h2 className="text-black-gray">Quem somos?</h2>
            <h1 className="text-dark-blue text-2xl">Nosso Amor e Dedicação aos Pets!</h1>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-x-20">
              <p className="text-black-gray md:max-w-[55%]">
                Nossa clínica veterinária foi fundada por Ana Carolina, uma apaixonada por animais desde sua infância.
                Com um amor incondicional pelos pets e uma vocação para a área veterinária,
                Ana decidiu transformar sua paixão em uma carreira dedicada ao cuidado e bem-estar dos animais.
                Movida por sua visão de proporcionar serviços veterinários de alta qualidade,
                ela trabalhou arduamente para criar uma clínica que oferece atendimento compassivo,
                tratamentos avançados e um ambiente acolhedor para os tutores e seus queridos companheiros peludos.
                Desde então, nossa clínica tem sido um espaço onde o amor pelos animais se encontra com a excelência médica,
                proporcionando cuidados excepcionais para os pets e paz de espírito para seus donos.
              </p>

              <div>
                <Image
                  src="/media/Carol/Ana.png"
                  alt="Ana Carolina"
                  width="150"
                  height="100"
                  className="hidden md:block object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-dark-blue text-2xl">Venha nos fazer uma visita!</h1>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.644469451007!2d-44.007876825700045!3d-19.854990735975377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69175cd5d3ee1%3A0xa158c4a51e31b393!2sZoobot%C3%A2nica%20(Jardins%20Zool%C3%B3gico%20e%20Bot%C3%A2nico)%20de%20Belo%20Horizonte!5e0!3m2!1spt-BR!2sbr!4v1684498118070!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[300px]"></iframe>

            <div>
              <h1 className="text-dark-blue text-2xl">Criação deste projeto</h1>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-black-gray">
                Este projeto foi criado por

                <a
                  href="https://www.linkedin.com/in/victorsouza02"
                  target="_blank"
                  className="underline mx-1 text-lg text-dark-blue"
                >
                  Souza Víctor
                </a>

                utilizando Next.js e Tailwind CSS, oferecendo uma experiência de usuário fluida e interativa.
                Cada página do site foi cuidadosamente planejada para fornecer informações relevantes sobre os serviços 
                oferecidos pela clínica fictícia. Você pode ver todos créditos de recursos utilizados acessando o rodapé do site!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
