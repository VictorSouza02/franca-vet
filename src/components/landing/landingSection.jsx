import Image from "next/image"
import { useEffect, useState } from "react"

const LandingSection = () => {
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
        <section
            className="
                w-full h-[90.9vh] min-h-[514px] max-h-[700px] bg-gradient-to-t from-mon-yellowLighter to-mon-yellow 
                overflow-hidden flex flex-col relative shadow-lg
                md:h-[100vh]
            "
        >
            <div className="w-[90%] md:w-[70%] max-w-[1000px] h-full mx-auto py-4">
                <div className="mt-20 flex flex-col gap-4 items-center md:items-start">
                    <div
                        className="
                                z-50 flex flex-col gap-2 md:w-[300px]
                            "
                    >
                        <div className="text-dark-blue font-bold capitalize">
                            <h1 className="text-[2rem]">França Vet</h1>
                            <h2 className="text-2xl">O melhor para o seu pet!</h2>
                        </div>

                        <div className="text-black-gray">
                            <p>
                                Produtos de qualidade e serviços especializados para cuidar do seu pet.
                                Venha nos visitar e descubra por que somos a escolha certa para cuidar do seu melhor amigo!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 mt-4 z-50">
                        <a
                            to="/atendimentos"
                            className="
                            rounded-2xl border-2 border-dark-blue text-dark-blue whitespace-nowrap
                            capitalize px-3 py-1 duration-[0.6s]
                            hover:bg-dark-blue hover:text-white
                        "
                        >
                            Nossos serviços
                        </a>

                        <a
                            to="/loja"
                            className="
                            rounded-2xl bg-dark-blue text-white border-2 border-transparent whitespace-nowrap
                            capitalize px-3 py-1 hover:border-dark-blue 
                            hover:text-dark-blue hover:bg-transparent duration-[0.6s]
                        "
                        >
                            Produtos
                        </a>
                    </div>
                </div>

                {screen < 768 ?
                    <Image
                        className="
                            z-50 absolute left-[50%] translate-x-[-50%] bottom-0
                        "
                        src="/media/puppies.png"
                        alt="Cachorrinhos"
                        width="250"
                        height="100"
                    />


                    :

                    <Image
                        className="
                            z-50 absolute right-[5%] translate-x-[-5%] bottom-0
                            lg:right-[15%] 2xl:right-[20%]
                        "
                        src="/media/HoldingPet.png"
                        alt="Tutora segurando seu cachorro"
                        width="350"
                        height="350"
                    />
                }

                <div id="Background">

                    {/* Header square */}
                    <div
                        className="
                            absolute w-[450px] aspect-square top-[-420px] right-[20%] 
                            bg-mon-yellowDarker rounded-[60px] rotate-[22deg]
                            md:right-[80%] md:translate-x-[80%]
                        "
                    >
                    </div>

                    {/* Small squares */}
                    <div
                        className="
                            absolute w-[20px] aspect-square top-[80px] right-[20%] 
                            bg-mon-yellowDarker rounded-lg rotate-[20deg]
                        "
                    >
                    </div>

                    <div
                        className="
                            absolute w-[20px] aspect-square top-[120px] right-[25%] 
                            bg-mon-yellowDarker rounded-lg rotate-[20deg]
                        "
                    >
                    </div>

                    <div
                        className="
                            absolute w-[20px] aspect-square top-[125px] right-[25.5%]  
                            bg-dark-blue rounded-lg rotate-[-10deg]
                        "
                    >
                    </div>

                    {/* End squares */}
                    <div
                        className="
                            absolute w-[400px] aspect-square bottom-[-350px] right-[-8%] 
                            bg-dark-blue rounded-[60px] rotate-[15deg]
                            md:translate-x-[-20%] lg:right-[20%]
                        "
                    >
                    </div>

                    <div
                        className="
                            absolute w-[400px] aspect-square bottom-[-320px] right-[-15%] 
                            bg-mon-yellowDarker rounded-[60px] rotate-[30deg]
                            md:translate-x-[-20%] lg:right-[15%]
                        "
                    >
                    </div>
                </div>

                <a
                    href="https://wa.me/5531992889875"
                    target="_blank"
                    className="absolute z-50 right-[5%] md:right-[15%] bottom-12 aspect-square w-14 bounce"
                >
                    <Image
                        src="/media/whatsappIcon.png"
                        alt="Whatsapp"
                        width="100"
                        height="100"
                    />
                </a>
            </div>
        </section >
    )
}

export default LandingSection;