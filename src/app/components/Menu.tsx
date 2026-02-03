import { Card } from "./Card";

export function Menu(){
    return(
        <div className="bg-menu" id="menu">
            <main className="max-w-6xl mx-auto py-8 px-6 lg:px-0">        
            <h3 className="text-secondary text-xl uppercase">menu</h3>
            <h2 className="font-bold text-4xl text-primary my-4 max-w-2xl">Veja os principais cafés do nosso cardápio artesanal</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">

                <Card categoria="cafés quentes" nome="Café Espresso Clássico" descricao="Um espresso encorpado, com notas de chocolate amargo e toque cítrico." preco="9,00" />
                <Card categoria="cafés quentes" nome="Cappuccino Cremoso" descricao="Espresso com leite vaporizado e espuma aveludada, polvilhado com canela." preco="12,00" />
                <Card categoria="cafés gelados" nome="Cold Brew com Laranja" descricao="Café gelado infusionado a frio, com um toque refrescante de laranja." preco="15,00" />
                <Card categoria="cafés gelados" nome="Latte Caramelo Salgado" descricao="Latte suave com calda de caramelo salgado e um toque de baunilha." preco="14,00" />
                <Card categoria="cafés quentes" nome="Mocha Especial" descricao="Combinação de espresso, chocolate quente e chantilly artesanal." preco="13,50" />
                <Card categoria="sobremesas" nome="Affogato" descricao="Uma bola de sorvete de baunilha coberta com um shot de espresso quente." preco="15,00" />

               
            </div>

            </main>
        </div>
    );
}