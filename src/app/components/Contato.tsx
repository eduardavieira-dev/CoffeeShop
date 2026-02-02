export function Contato() {
return (
    <div className="bg-contact" id="contact">
        <main className="max-w-6xl mx-auto pb-8 px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="p-4 flex justify-between flex-col lg:flex-row lg:items-center w-full lg:gap-20">
                <div>
                <h3 className="text-secondary text-xl uppercase">contato</h3>
                <h2 className="font-bold text-4xl text-primary my-4 max-w-lg">
                    Fale conosco para dúvidas, sugestões ou parcerias
                </h2>
                <p className="text-primary mt-6 max-w-lg">
                    Estamos aqui para ouvir você! Seja para esclarecer dúvidas sobre
                    nosso cardápio, receber suas sugestões ou discutir possíveis
                    parcerias, nossa equipe está pronta para ajudar.
                </p>
                </div>

                <div className="mt-8 space-y-4 text-primary md:pr-12">
                    <div className="flex items-start gap-3">
                        <svg
                            className="w-6 h-6 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <div>
                            <p className="font-semibold">Endereço</p>
                            <p>Rua dos Grãos, 123, Bairro Aconchego</p>
                            <p>Belo Horizonte, MG</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <svg
                            className="w-6 h-6 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <div>
                            <p className="font-semibold">Telefone</p>
                            <p>(31) 1234-5678</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <svg
                            className="w-6 h-6 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <div>
                            <p className="font-semibold">E-mail</p>
                            <p>contato@coffeeshop.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
);
}
