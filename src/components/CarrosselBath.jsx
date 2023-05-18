import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function CarrosselBath() {
  return (
    <div
      className="
        w-full max-w-[380px] self-center h-[300px]
        lg:order-2
      "
    >
      <Carousel
        slide={false}
      >
        <video
          src="/media/ArthurAlvarenga/BobVideo.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />

        <div className='w-full h-[300px]'>
          <Image
            src="/media/ArthurAlvarenga/2.jpg"
            alt="Loja pet"
            width="300"
            height="300"
            className="w-full h-full object-cover"
          />
        </div>

        <Image
          src="/media/ArthurAlvarenga/3.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="w-full h-full object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/4.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="w-full h-full object-cover"
        />

        <Image
          src="/media/ArthurAlvarenga/5.jpg"
          alt="Loja pet"
          width="300"
          height="300"
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  )
}
