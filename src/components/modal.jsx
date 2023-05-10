export default function Modal({openModal, setModalOpen, children}) {
    return (
        openModal ?
            <div className="w-full h-full fixed top-0 left-0 z-[1005] bg-black/60">
                <div
                    id="modal"
                    className="
                        w-[90%] max-w-[1000px] min-h-[200px] max-h-[90%] rounded-md mx-auto 
                        relative top-[50%] translate-y-[-50%] overflow-x-hidden overflow-y-scroll
                        md:w-[70%]
                    "
                >
                    <button
                        onClick={setModalOpen}
                        className='
                            absolute right-2 top-2 rounded-full p-2
                            hover:bg-stone-200 duration-500 z-[1000]
                        '
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>

                    <div className="flex flex-col gap-4 bg-white/80 px-6 py-10">
                        {children}
                    </div>
                </div>
            </div>

            :

            null
    )
}