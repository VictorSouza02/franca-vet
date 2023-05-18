'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function CarrosselBath() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <video
          src="/media/ArthurAlvarenga/BobVideo.mp4"
          autoPlay
          muted
          loop
          className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/2.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/3.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/4.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/5.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain md:w-full md:h-full md:object-cover"
        />
      </Carousel>
    </div>
  )
}
