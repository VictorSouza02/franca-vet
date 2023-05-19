import Image from "next/image";

export default function ServicesIcons() {
  return (
    <div
      className="
              flex justify-around flex-wrap gap-6
            "
    >
      <div
        className="
        bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
          md:w-[200px]
        "
      >
        <div>
          <Image
            src="/media/petshop.png"
            alt="Loja pet"
            width="60"
            height="60"
          />
        </div>

        <h1 className="text-black-gray text-center">
          Petshop
        </h1>
      </div>

      <div
        className="
        bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
          md:w-[200px]
        "
      >
        <div>
          <Image
            src="/media/banhoetosa.png"
            alt="Cachorro tomando banho"
            width="60"
            height="60"
          />
        </div>

        <h1 className="text-black-gray text-center">
          Banho e tosa
        </h1>
      </div>

      <div
        className="
        bg-white rounded-md shadow-md py-4 px-6 flex flex-col items-center justify-center gap-4 w-[100px] aspect-square
          md:w-[200px]
        "
      >
        <div>
          <Image
            src="/media/atendimentopet.png"
            alt="Clínica veterinária"
            width="60"
            height="60"
          />
        </div>

        <h1 className="text-black-gray text-center">
          Clínica Veterinária
        </h1>
      </div>
    </div>
  )
}