import { Carousel } from 'flowbite-react';

export default function CarrosselFlowbite({ children, slideState, sliteInterval }) {
  return (
    <div
      className="
        w-full max-w-[380px] self-center h-[300px]
      "
    >
      <Carousel
        slide={slideState}
        slideInterval={sliteInterval}
      >
        {children}
      </Carousel>
    </div>
  )
}