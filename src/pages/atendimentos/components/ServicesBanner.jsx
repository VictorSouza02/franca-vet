import { useEffect, useState } from "react";
import Image from "next/image";

export default function ServicesBanner() {
  const [screen, setScreen] = useState(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      handleScreen()
      window.addEventListener('resize', handleScreen);
      return () => {
        window.removeEventListener('resize', handleScreen);
      };
    }
  }, [])

  const getScreen = () => {
    return window.innerWidth
  }

  const handleScreen = () => {
    setScreen(getScreen())
  }
  return (
    <div
      className="
        w-full h-[340px] rounded-md bg-dark-blue
        overflow-hidden relative flex md:justify-end z-0
      "
    >
      <div
        className="
          z-[1000] flex flex-col gap-2 p-4
          md:w-[55%] md:text-right md:mt-8
        "
      >
        <div className="text-dark-blue font-bold capitalize">
          <h1 className="text-2xl md:text-[2rem]">Atendimentos</h1>
          <h2 className="text-xl md:text-2xl">Cuidamos do seu Pet!</h2>
        </div>

        <div className="
          text-black-gray 
          md:max-w-[300px] md:self-end
        "
        >
          <p>
            Saúde e Bem-estar para seu Pet. Encontre serviços de alta qualidade para cuidar do seu melhor amigo.
          </p>
        </div>
      </div>

      <Image
        className="
          z-50 absolute bottom-0 w-[250px]
          left-[50%] translate-x-[-50%]
          md:left-[-2%] md:translate-x-0 md:w-[400px]
          lg:w-[500px]
        "
        src="/media/ServicesPicture.png"
        alt="Tutora segurando seu cachorro"
        width="400"
        height="100"
      />

      <div id="Background">
        {/* Light square */}
        <div
          className="
            absolute w-[780px] aspect-square top-[-595px] right-[-50px]
            bg-gradient-to-t from-mon-yellowLighter to-mon-yellow rounded-[60px] rotate-[6deg]
            md:top-[-350px] md:right-[-500px] md:rotate-[25deg]
          "
        >
        </div>

        {/* Bottom square */}
        <div
          className="
            absolute w-[780px] aspect-square bottom-[-800px] left-[-180px]
          bg-dark-blueDarker rounded-[30px] rotate-[25deg]
            md:
          "
        >
        </div>
      </div>
    </div>
  )
}