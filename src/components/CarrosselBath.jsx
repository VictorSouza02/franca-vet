import 'flowbite';
import Image from 'next/image';

export default function CarrosselBath() {
  return (
    <div id="default-carousel" className="relative w-full max-w-[380px] self-center lg:order-2" data-carousel="static">

      {/* Carousel wrapper */}

      <div
        className="
          relative h-[300px] overflow-hidden rounded-md shadow-md
          md:h-[400px]
        "
      >
        {/* Items */}

        <div className="duration-700 ease-in-out" data-carousel-item>
          <video
            src="/media/ArthurAlvarenga/BobVideo.mp4"
            autoPlay
            muted
            loop
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
          />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/media/ArthurAlvarenga/2.jpg"
            alt="Loja pet"
            width="300"
            height="300"
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
          />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/media/ArthurAlvarenga/3.jpg"
            alt="Loja pet"
            width="300"
            height="300"
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
          />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/media/ArthurAlvarenga/4.jpg"
            alt="Loja pet"
            width="300"
            height="300"
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
          />
        </div>

        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/media/ArthurAlvarenga/5.jpg"
            alt="Loja pet"
            width="300"
            height="300"
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
          />
        </div>
      </div>

      {/* Slider indicators */}

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>

      {/* Slider controls */}

      <button
        id='prevBtn'
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          className="
            inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 
            bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 
            group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none
          "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            >
            </path>
          </svg>

          <span className="sr-only">Anterior</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          className="
            inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 
            dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 
            group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none
          "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            >
            </path>
          </svg>

          <span className="sr-only">Próximo</span>
        </span>
      </button>
    </div>

  )
}
