import React, { useEffect, useState } from "react"

export default function Header() {
    const [openHeader, setOpenHeader] = useState(false)

    return (
        <header className="w-[90%] md:w-[70%] mx-auto relative z-[1000]">
            <nav
                className="absolute flex w-full items-center justify-between py-2 mt-2">
                <div className="flex w-full flex-wrap items-center justify-between">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => setOpenHeader(!openHeader)}
                            className="lg:hidden"
                            type="button"
                            aria-label="Trocar navegação"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#003459"
                                className="w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <a
                        to='/'
                        className="justify-self-start lg:order-[-1] overflow-hidden w-[32px]"
                    >
                        <img src="/media/logo.png" alt="frança vet" className="w-full" />
                    </a>

                    <a
                        to='/loja'
                        className="overflow-hidden w-[32px] aspect-square mt-2 lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#003459"
                            viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 
                            5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 
                            2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 
                            .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 
                            2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 
                            5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 
                            9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 
                            1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 
                            1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                        </svg>
                    </a>

                    <div
                        className={`${openHeader
                            ? '!visible flex grow basis-[100%] items-center lg:grow-0 lg:basis-0 lg:!flex lg:bg-transparent mt-2 rounded-md shadow-md lg:shadow-none text-white lg:text-dark-blue font-bold bg-dark-blue z-[2000]'
                            : '!visible hidden grow basis-[100%] items-center lg:grow-0 lg:basis-0 lg:!flex lg:bg-transparent mt-2 rounded-md shadow-md lg:shadow-none text-white lg:text-dark-blue font-bold bg-dark-blue z-[2000]'
                            }`}
                    >
                        <ul
                            className="flex flex-col lg:flex-row lg:w-full ml-6 py-2 lg:ml-0 lg:py-0 gap-2 lg:gap-8">
                            <li className="flex gap-2 items-center whitespace-nowrap hover-underline-animation">
                                <a
                                    onClick={() => setOpenHeader(false)}
                                    to='/'
                                >
                                    Home
                                </a>

                                <div className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>

                            <li className="flex gap-2 items-center whitespace-nowrap hover-underline-animation">
                                <a
                                    onClick={() => setOpenHeader(false)}
                                    to='/loja'
                                >
                                    Loja
                                </a>

                                <div className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>

                            <li className="flex gap-2 items-center whitespace-nowrap hover-underline-animation">
                                <a
                                    onClick={() => setOpenHeader(false)}
                                    to='/atendimentos'
                                >
                                    Atendimentos
                                </a>

                                <div className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>

                            <li className="flex gap-2 items-center whitespace-nowrap hover-underline-animation">
                                <a
                                    onClick={() => setOpenHeader(false)}
                                    to='/vocesabia'
                                >
                                    Você sabia?
                                </a>

                                <div className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>

                            <li className="flex gap-2 items-center whitespace-nowrap hover-underline-animation">
                                <a
                                    onClick={() => setOpenHeader(false)}
                                    to='/quemsomos'
                                >
                                    Quem somos?
                                </a>

                                <div className="lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}