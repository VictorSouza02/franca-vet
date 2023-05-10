export default function FooterResponsive() {
    return (
        <footer className="bg-dark-blue text-center text-white w-full">
            <div className="w-[90%] md:w-[70%] max-w-[1000px] mx-auto p-2 flex flex-col gap-2">
                <a
                    href="https://github.com/VictorSouza02/franca-vet"
                    target="_blank"
                    type="button"
                    className="
                            m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal 
                            text-white transition duration-150 ease-in-out hover:bg-black self-center
                            hover:bg-opacity-5 focus:outline-none focus:ring-0
                        "
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-full w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="
                                M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>

                <p>
                    Aplicação desenvolvida por

                    <a
                        href="https://www.linkedin.com/in/victorsouza02"
                        target="_blank"
                        className="underline mx-1"
                    >
                        Souza Víctor
                    </a>
                </p>

                <div className="grid grid-cols-2 gap-4 p-2">
                    <div className="md:order-[2]">
                        <h5 className="font-bold uppercase">Bibliografia</h5>

                        <ul className="list-none">
                            <li>
                                <a
                                    href="https://icons8.com.br/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Icons8
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://icons8.com/illustrations/author/lZpGtGw5182N"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Elisabet Guba
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.freepik.com/author/catalyststuff"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Catalyststuff
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="order-[1]">
                        <h5 className="font-bold uppercase">Víctor Souza</h5>

                        <ul className="list-none">
                            <li>
                                <a
                                    href="https://victorsouza02.github.io/Portfolio/#/pt"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/victorsouza02/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/VictorSouza02"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/victorsouza.png/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <span>
                    © 2023 Copyright
                </span>
            </div>
        </footer>
    )
}