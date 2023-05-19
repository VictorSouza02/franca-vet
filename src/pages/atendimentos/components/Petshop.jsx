import CarrosselFlowbite from "@/components/CarrosselFlowbite";
import Image from "next/image";

export default function Petshop() {
  <div className="flex flex-col gap-6">
    <div className="lg:hidden">
      <h1 className="text-dark-blue text-xl capitalize">PetShop</h1>
    </div>

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      <CarrosselFlowbite slideState={true} sliteInterval={5000}>
        <Image
          src="/media/PetShop/1.png"
          alt="Casinha de cachorro"
          width="300"
          height="300"
          className="w-full h-full object-contain"
        />

        <Image
          src="/media/PetShop/2.png"
          alt="Ração de cachorro"
          width="300"
          height="300"
          className="w-full h-full object-contain"
        />

        <Image
          src="/media/PetShop/3.png"
          alt="Itens para animais"
          width="300"
          height="300"
          className="w-full h-full object-contain"
        />

        <Image
          src="/media/PetShop/4.png"
          alt="Casinha com arranhador para gatos"
          width="300"
          height="300"
          className="w-full h-full object-contain"
        />
      </CarrosselFlowbite>

      <div className="lg:w-[55%] flex flex-col items-center gap-6">
        <div className="hidden lg:block">
          <h1 className="text-dark-blue text-3xl font-bold capitalize">PetShop</h1>
        </div>

        <p className="text-black-gray lg:text-right">
          Aqui você encontrará uma seleção cuidadosamente escolhida de produtos para o seu animal de estimação.
          De alimentos de alta qualidade a brinquedos divertidos e acessórios indispensáveis,
          temos tudo o que você precisa para cuidar e mimar seu pet.
          Compras online fáceis e entrega rápida para tornar sua experiência ainda melhor.
          Cuide do seu melhor amigo com produtos confiáveis e de primeira linha.
        </p>
      </div>
    </div>
  </div>
}