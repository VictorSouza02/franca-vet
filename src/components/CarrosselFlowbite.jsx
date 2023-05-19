import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function CarrosselFlowbite({ children, slideState }) {
  console.log(slideState)
  return (
    <div
      className="
        w-full max-w-[380px] self-center h-[300px]
        lg:order-2
      "
    >
      <Carousel
        slide={slideState}
      >
        {children}
      </Carousel>
    </div>
  )
}
