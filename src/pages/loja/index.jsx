import { useEffect, useState } from "react";
import Image from "next/image";
import StoreBanner from "./components/storeBanner";
import Header from "@/components/Header";
import Footer from "@/components/FooterResponsive";

export default function Store() {
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
        <main>
            <Header />

            <section
                className="
                    w-full overflow-hidden shadow-lg min-h-[259px]
                "
            >
                <div className="w-[90%] md:w-[70%] h-full mx-auto mt-16 mb-6 flex flex-col gap-4">
                    <span className="text-black-grayLighter text-sm">Bread Crumb</span>

                    <StoreBanner />

                    <div>
                        <h1 className="text-dark-blue text-xl">Nossos produtos!</h1>
                    </div>

                    <div
                        className="
                            grid grid-cols-2 w-full gap-4 justify-around items-center
                            md:grid-cols-3
                            lg:grid-cols-4
                        "
                    >
                        {/* <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <img
                                src='#'
                                alt="Exemplo de produto"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">[Nome do protudo]</h1>

                                <p className="text-black-grayLighter text-sm hidden md:block md:text-center">
                                    [descrição do produto]
                                </p>

                                <h1 className="text-black-gray text-sm">[R$57.35]</h1>

                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-yellow-500" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-yellow-500" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-yellow-500" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-yellow-500" viewBox="0 0 16 16">
                                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-yellow-500" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}

                        <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <Image
                                src="/media/manutention.gif"
                                alt="Em manutenção"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">Em breve</h1>

                                <p className="w-[160px] h-[15px] bg-black-grayLighter hidden md:block">
                                </p>

                                <h1 className="w-[50px] h-[10px] bg-black-gray"></h1>

                                <div className="w-[80px] bg-yellow-500 h-[15px]">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <Image
                                src="/media/manutention.gif"
                                alt="Em manutenção"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">Em breve</h1>

                                <p className="w-[160px] h-[15px] bg-black-grayLighter hidden md:block">
                                </p>

                                <h1 className="w-[50px] h-[10px] bg-black-gray"></h1>

                                <div className="w-[80px] bg-yellow-500 h-[15px]">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <Image
                                src="/media/manutention.gif"
                                alt="Em manutenção"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">Em breve</h1>

                                <p className="w-[160px] h-[15px] bg-black-grayLighter hidden md:block">
                                </p>

                                <h1 className="w-[50px] h-[10px] bg-black-gray"></h1>

                                <div className="w-[80px] bg-yellow-500 h-[15px]">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <Image
                                src="/media/manutention.gif"
                                alt="Em manutenção"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">Em breve</h1>

                                <p className="w-[160px] h-[15px] bg-black-grayLighter hidden md:block">
                                </p>

                                <h1 className="w-[50px] h-[10px] bg-black-gray"></h1>

                                <div className="w-[80px] bg-yellow-500 h-[15px]">
                                </div>
                            </div>
                        </div>

                        <div className="bg-white aspect-[1/1] p-4 rounded-md flex flex-col items-center md:gap-4">
                            <Image
                                src="/media/manutention.gif"
                                alt="Em manutenção"
                                className="rounded-md w-[100%] max-w-[200px] md:w-[75%]"
                                width="200"
                                height="100"
                            />

                            <div className="flex flex-col gap-2">
                                <h1 className="text-black-gray text-center">Em breve</h1>

                                <p className="w-[160px] h-[15px] bg-black-grayLighter hidden md:block">
                                </p>

                                <h1 className="w-[50px] h-[10px] bg-black-gray"></h1>

                                <div className="w-[80px] bg-yellow-500 h-[15px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </main>
    )
}