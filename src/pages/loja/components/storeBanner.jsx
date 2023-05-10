import { useEffect, useState } from "react";
import Image from "next/image";

export default function StoreBanner() {
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
                w-full h-[260px] rounded-md bg-gradient-to-t from-mon-yellowLighter to-mon-yellow 
                overflow-hidden relative p-4 flex md:justify-end z-0
            "
        >
            <div
                className="
                    z-[1000] flex flex-col gap-2 md:w-[50%]
                    md:text-right md:mt-4
                "
            >
                <div className="text-dark-blue font-bold capitalize">
                    <h1 className="text-2xl md:text-[2rem] md:text-white">Produtos</h1>
                    <h2 className="text-xl md:text-2xl md:text-white">O melhor para o seu pet!</h2>
                </div>

                <div className="text-black-gray md:text-white/70">
                    <p>
                        Faça seu pet feliz com nossa seleção de produtos de qualidade.
                    </p>
                </div>
            </div>

            {screen < 768 ?
                <Image
                    className="
                        z-50 absolute bottom-0
                        left-[50%] translate-x-[-50%]
                        lg:right-[15%] 2xl:right-[20%]
                    "
                    src="/media/HoldingPet.png"
                    alt="Tutora segurando seu cachorro"
                    width="100"
                    height="100"
                />

                :

                <Image
                    className="
                        z-50 absolute left-[0] bottom-0 w-[350px] lg:w-[500px]
                    "
                    src="/media/puppies.png"
                    alt="Cachorrinhos"
                    width="500"
                    height="100"
                />
            }

            <div id="Background">
                {/* Small squares */}
                <div
                    className="
                        absolute w-[20px] aspect-square top-[20px] right-[10%] 
                        bg-mon-yellowDarker rounded-lg rotate-[20deg]
                    "
                >
                </div>

                <div
                    className="
                        absolute w-[20px] aspect-square top-[115px] right-[20%] 
                        bg-mon-yellowDarker rounded-lg rotate-[20deg]
                    "
                >
                </div>

                <div
                    className="
                        absolute w-[20px] aspect-square top-[125px] right-[20.5%]  
                        bg-dark-blue rounded-lg rotate-[-10deg]
                    "
                >
                </div>

                {/* Bottom square */}
                <div
                    className="
                        absolute w-[200px] aspect-square top-[85%] left-[50%] translate-x-[-50%]
                        bg-dark-blue rounded-[30px] rotate-[20deg]
                        md:w-[80%] md:rounded-[60px] md:rotate-[80deg] md:left-[40%] 
                        md:translate-x-[0] md:top-[5%]
                    "
                >
                </div>

                <div
                    className="
                        absolute w-[200px] aspect-square top-[80%] left-[55%] translate-x-[-50%]
                        bg-mon-yellowDarker rounded-[30px] rotate-[36deg] 
                        md:hidden
                    "
                >
                </div>
            </div>
        </section>
    )
}