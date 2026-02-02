export function Sobre() {
  return (
    <div className="bg-background" id="about">
      <main className="max-w-6xl mx-auto py-8 px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="p-4">
          <h3 className="text-secondary text-xl uppercase">sobre nós</h3>
          <h2 className="font-bold text-4xl text-primary my-4 max-w-lg">
            Conheça a história por trás do nosso café
          </h2>
          <p className="text-primary mt-6 max-w-lg">
            No CoffeShop, acreditamos que cada xícara de café conta uma
            história. Desde 2020, selecionamos os melhores grãos e preparamos
            cada bebida com dedicação, trazendo sabores únicos para o seu dia.
            Nossa paixão é criar momentos especiais, seja no primeiro café da
            manhã ou na pausa da tarde.
          </p>
        </div>
        <img src="./heart.png" alt="" className="max-w-sm p-8 md:max-w-lg" />
      </main>
    </div>
  );
}
