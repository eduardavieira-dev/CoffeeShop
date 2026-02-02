export function Menu(){
    return(
        <div className="bg-menu" id="menu">
            <main className="max-w-6xl mx-auto py-8 px-6 lg:px-0">        
            <h3 className="text-secondary text-xl uppercase">menu</h3>
            <h2 className="font-bold text-4xl text-primary my-4 max-w-2xl">Veja os principais cafés do nosso cardápio artesanal</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">cafés quentes</h5>
                    <h4 className="text-primary font-semibold text-lg">Café Espresso Clássico</h4>
                    <p className="text-primary mt-2">Um espresso encorpado, com notas de chocolate amargo e toque cítrico.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 9,00</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">cafés quentes</h5>
                    <h4 className="text-primary font-semibold text-lg">Cappuccino Cremoso</h4>
                    <p className="text-primary mt-2">Espresso com leite vaporizado e espuma aveludada, polvilhado com canela.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 12,00</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">cafés gelados</h5>
                    <h4 className="text-primary font-semibold text-lg">Cold Brew com Laranja</h4>
                    <p className="text-primary mt-2">Café gelado infusionado a frio, com um toque refrescante de laranja.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 15,00</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">cafés gelados</h5>
                    <h4 className="text-primary font-semibold text-lg">Latte Caramelo Salgado</h4>
                    <p className="text-primary mt-2">Latte suave com calda de caramelo salgado e um toque de baunilha.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 14,00</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">cafés quentes</h5>
                    <h4 className="text-primary font-semibold text-lg">Mocha Especial</h4>
                    <p className="text-primary mt-2">Combinação de espresso, chocolate quente e chantilly artesanal.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 13,50</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h5 className="text-secondary uppercase text-xs mb-2 font-medium">sobremesas</h5>
                    <h4 className="text-primary font-semibold text-lg">Affogato</h4>
                    <p className="text-primary mt-2">Uma bola de sorvete de baunilha coberta com um shot de espresso quente.</p>
                    <p className="mt-4 font-semibold text-primary">R$ 15,00</p>
                </div>
               
            </div>

            </main>
        </div>
    );
}