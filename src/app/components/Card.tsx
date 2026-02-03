type CardProps = {
    categoria: string;
    nome: string;
    descricao: string;
    preco: string;
}
export function Card({ categoria, nome, descricao, preco }: CardProps) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h5 className="text-secondary uppercase text-xs mb-2 font-medium">
        {categoria}
      </h5>
      <h4 className="text-primary font-semibold text-lg">
        {nome}
      </h4>
      <p className="text-primary mt-2">
        {descricao}
      </p>
      <p className="mt-4 font-semibold text-primary">R$ {preco}</p>
    </div>
  );
}
