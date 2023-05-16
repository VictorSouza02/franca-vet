import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modal";

export default function Tips() {
  const [openModalPomeranian, setOpenModalPomeranian] = useState(false)
  const [openModalEating, setOpenModalEating] = useState(false)
  const [openModalCorrecting, setOpenModalCorrecting] = useState(false)

  if (typeof window === undefined) {
  } else {
    if (openModalPomeranian || openModalEating || openModalCorrecting) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }

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
            <h2 className="text-black-gray">Você Sabia?</h2>
            <h1 className="text-dark-blue text-2xl">Tudo sobre o mundo dos Pets!</h1>
          </div>

          <div
            className="
            grid grid-cols-1 justify-around w-full mx-auto gap-6
            md:grid-cols-3
            lg:grid-cols-4
          "
          >
            <button
              onClick={() => setOpenModalPomeranian(true)}
              className="bg-white overflow-hidden w-full rounded-md flex flex-col items-center max-w-[300px] mx-auto md:w-[90%]"
            >
              <Image
                src="/media/pomeranian.png"
                alt="Lulu da pomerânina"
                width="400"
                height="100"
              />

              <div className="rounded-2xl text-sm mt-2 md:ml-4 md:self-start text-white bg-dark-blueLighter px-3 py-1">
                Dicas úteis
              </div>

              <div className="text-center mt-2 pb-4 px-2 md:text-start md:ml-2">
                <h1 className="text-black-gray text-lg">
                  O que é um lulu-da-pomerânia? Como identificar cães da Pomerânia
                </h1>

                <p className="text-black-gray/70 mt-2">
                  Spitz-alemão-anão, um cão adorável e habilidoso,
                  também é conhecido como lulu-da-pomerânia e está sempre entre os mais fofos.
                </p>
              </div>
            </button>

            <button
              onClick={() => setOpenModalEating(true)}
              className="bg-white overflow-hidden w-full rounded-md flex flex-col items-center max-w-[300px] mx-auto md:w-[90%]"
            >
              <Image
                src="/media/dogEating.png"
                alt="Cachorro comendo"
                width="400"
                height="100"
              />

              <div className="rounded-2xl text-sm mt-2 md:ml-4 md:self-start text-white bg-dark-blueLighter px-3 py-1">
                Dicas úteis
              </div>

              <div className="text-center mt-2 pb-4 px-2 md:text-start md:ml-2">
                <h1 className="text-black-gray text-lg">Dieta para cães que você precisa saber</h1>

                <p className="text-black-gray/70 mt-2">
                  Dividir a dieta de um cachorro pode parecer simples a princípio,
                  mas existem algumas regras para que seu cachorro consiga
                  absorver facilmente os nutrientes da dieta.
                </p>
              </div>
            </button>

            <button
              onClick={() => setOpenModalCorrecting(true)}
              className="bg-white overflow-hidden w-full rounded-md flex flex-col items-center max-w-[300px] mx-auto md:w-[90%]"
            >
              <Image
                src="/media/correcting.png"
                alt="Cachorro sendo corrigido"
                width="400"
                height="100"
              />

              <div className="rounded-2xl text-sm mt-2 md:ml-4 md:self-start text-white bg-dark-blueLighter px-3 py-1">
                Dicas úteis
              </div>

              <div className="text-center mt-2 pb-4 px-2 md:text-start md:ml-2">
                <h1 className="text-black-gray text-lg">
                  Por que os cães mordem e destroem móveis e como prevenir isso de forma eficaz
                </h1>

                <p className="text-black-gray/70 mt-2">
                  Mordidas de cachorro durante o desenvolvimento são comuns,
                  mas ninguém quer ver seus móveis ou itens importantes sendo destruídos pelo animal.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Modal
        openModal={openModalPomeranian}
        setModalOpen={() => setOpenModalPomeranian(!openModalPomeranian)}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <Image
            src="/media/pomeranian.png"
            alt="Lulu da pomerânia"
            className="rounded-md md:w-[200px]"
            width="400"
            height="100"
          />

          <h1 className="text-dark-blue text-xl text-center md:text-3xl">
            O que é um lulu-da-pomerânia? Como identificar cães da Pomerânia
          </h1>
        </div>

        <p className="text-black-gray">
          O Lulu da Pomerânia, também conhecido como Spitz Alemão Anão,
          é uma raça de cachorro pequeno e fofo que é originária da região de Pomerânia,
          na Europa Central. Estes cães são conhecidos por sua pelagem espessa e fofa,
          o que lhes dá uma aparência de &quot;bola de algodão&quot;.
        </p>

        <p className="text-black-gray">
          Para identificar um Lulu da Pomerânia, é importante prestar atenção em
          algumas características distintivas da raça.
          Primeiramente, esses cães são pequenos, pesando em média de 1,5 kg a 3 kg e medindo cerca de 20 cm de altura.
          Eles têm uma cabeça pequena em relação ao corpo, com um focinho curto e arrebitado,
          olhos grandes e escuros e orelhas pequenas e pontudas.
        </p>

        <p className="text-black-gray">
          A pelagem é uma das características mais distintivas do Lulu da Pomerânia.
          Eles têm uma pelagem dupla, com uma camada interna de pelo macio e uma camada
          externa de pelo longo e espesso que forma uma juba ao redor do pescoço.
          A pelagem pode ser de várias cores, incluindo laranja, preto,
          branco, creme, cinza e marrom.
        </p>

        <p className="text-black-gray">
          Além da aparência, o Lulu da Pomerânia também tem uma personalidade distinta.
          Eles são conhecidos por serem animados, curiosos e brincalhões,
          mas também podem ser teimosos e independentes.
          Eles são cães muito inteligentes e podem ser treinados para fazer truques e seguir comandos,
          mas também podem ser muito territoriais e protetores de sua família.
        </p>

        <p className="text-black-gray">
          Em resumo, o Lulu da Pomerânia é um cachorro pequeno,
          fofo e muito popular entre os amantes de cães de estimação.
          Para identificá-los, preste atenção em sua pelagem espessa e fofa,
          tamanho pequeno, cabeça pequena em relação ao corpo,
          focinho curto e arrebitado, olhos grandes e escuros e orelhas pequenas e pontudas.
          Eles também têm uma personalidade distinta, sendo animados, curiosos e brincalhões,
          mas também podem ser teimosos e independentes.
        </p>

        <div className="rounded-2xl text-sm self-center text-white bg-dark-blueLighter px-3 py-1">
          Dicas úteis
        </div>
      </Modal>

      <Modal
        openModal={openModalEating}
        setModalOpen={() => setOpenModalEating(!openModalEating)}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center bg-[rgba(256_256_256_1)]">
          <Image
            src="/media/dogEating.png"
            alt="Cachorro comendo"
            className="rounded-md md:w-[200px]"
            width="400"
            height="100"
          />

          <h1 className="text-dark-blue text-xl text-center md:text-3xl">
            Dieta para cães que você precisa saber
          </h1>
        </div>

        <p className="text-black-gray">
          Assim como os seres humanos, os cães precisam de uma dieta balanceada
          e nutritiva para se manterem saudáveis e felizes.
          Mas o que é exatamente uma dieta saudável para um cão?
          Aqui estão algumas coisas que você precisa saber.
        </p>

        <p className="text-black-gray">
          Em primeiro lugar, os cães precisam de uma dieta equilibrada que inclua proteínas,
          carboidratos e gorduras saudáveis. As proteínas são importantes para a construção e
          reparação dos tecidos musculares, enquanto os carboidratos fornecem energia
          e as gorduras ajudam a manter a pele e o pelo saudáveis.
        </p>

        <p className="text-black-gray">
          Em segundo lugar, é importante escolher alimentos de alta qualidade para o seu cão.
          Alimentos comerciais para cães podem ser convenientes, mas muitos contêm ingredientes de
          baixa qualidade e conservantes artificiais que podem ser prejudiciais à saúde do seu cão.
          Considere a possibilidade de alimentar o seu cão com uma dieta caseira ou
          com alimentos orgânicos e sem conservantes.
        </p>

        <p className="text-black-gray">
          Em terceiro lugar, é importante controlar a quantidade de comida que você dá ao seu cão.
          Muitos cães são propensos a ganhar peso, o que pode levar a problemas de saúde a longo prazo,
          como diabetes e doenças cardíacas. Verifique com o veterinário qual é a
          quantidade ideal de alimento para o seu cão, levando em consideração a idade,
          o peso e o nível de atividade do animal.
        </p>

        <p className="text-black-gray">
          Por fim, é importante oferecer água limpa e fresca ao seu cão o tempo todo.
          Os cães precisam de uma quantidade adequada de água para manter a
          hidratação e ajudar na digestão. Certifique-se de que o seu cão tenha
          acesso a água fresca em um local acessível e limpo.
        </p>

        <div className="rounded-2xl text-sm self-center text-white bg-dark-blueLighter px-3 py-1">
          Dicas úteis
        </div>
      </Modal>

      <Modal
        openModal={openModalCorrecting}
        setModalOpen={() => setOpenModalCorrecting(!openModalCorrecting)}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center bg-[rgba(256_256_256_1)]">
          <Image
            src="/media/correcting.png"
            alt="Cachorro sendo corrigido"
            className="rounded-md md:w-[200px]"
            width="400"
            height="100"
          />

          <h1 className="text-dark-blue text-xl text-center md:text-3xl">
            Por que os cães mordem e destroem móveis e como prevenir isso de forma eficaz
          </h1>
        </div>

        <p className="text-black-gray">
          Cães são animais adoráveis e fiéis, mas às vezes podem ser um pouco destrutivos,
          mordendo e destruindo móveis e objetos em casa. Existem várias razões pelas
          quais os cães podem se comportar dessa forma, incluindo tédio, ansiedade,
          frustração e falta de treinamento adequado.
        </p>

        <p className="text-black-gray">
          Uma das melhores maneiras de prevenir que seu cão morda e destrua móveis é
          fornecer bastante estimulação e exercício físico. Um cão entediado é mais propenso
          a se envolver em comportamentos destrutivos, então certifique-se de que
          seu cão tenha brinquedos adequados para mastigar e brincar.
          Além disso, passeie com seu cão regularmente e dedique tempo para jogos e treinamento.
        </p>

        <p className="text-black-gray">
          Outra maneira eficaz de prevenir comportamentos destrutivos é ensinar seu cão a se
          comportar adequadamente em casa. O treinamento com reforço positivo pode ser muito
          útil para ensinar seu cão a não morder e destruir móveis.
          Além disso, você pode considerar a utilização de cercas de segurança em
          torno de móveis e áreas da casa que são particularmente vulneráveis a danos
        </p>

        <p className="text-black-gray">
          Por fim, é importante ser consistente na disciplina e na supervisão do seu cão.
          Quando seu cão estiver sozinho em casa, mantenha-o em uma área segura e supervisione-o de
          perto para evitar comportamentos destrutivos. Se o seu cão se comportar de maneira inadequada,
          corrija-o de forma consistente e firme, mas nunca use violência física ou verbal.
          Com treinamento adequado, estímulo suficiente e supervisão consistente,
          é possível prevenir comportamentos destrutivos em cães e manter sua casa
          livre de danos desnecessários.
        </p>

        <div className="rounded-2xl text-sm self-center text-white bg-dark-blueLighter px-3 py-1">
          Dicas úteis
        </div>
      </Modal>

      <Footer />
    </main>
  )
}
