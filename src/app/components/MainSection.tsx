import { Button } from "./Button";

export function MainSection() {
  return (
    <div
      id="home"
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center h-auto md:h-[76vh] px-2 py-6"
    >
      <div className="text-primary mx-4 mb-8 md:mb-0">
        <h1 className="mb-3 text-4xl md:text-6xl font-bold">
          Bem vindo ao CoffeeShop!
        </h1>
        <p className="mb-10 text-lg md:text-2xl font-light max-w-2xl">
          Grãos selecionados, preparos artesanais e momentos inesquecíveis.
          Comece sua jornada com a gente!
        </p>
        <Button />
      </div>
      <img
        src="/cup.png"
        alt="Xícara de café"
        className="w-105 object-contain px-4 sm:w-100 md:w-125"
      />
    </div>
  );
}
