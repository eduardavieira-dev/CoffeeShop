# ☕ CoffeeShop

<div align="center">
  <p>Uma landing page moderna e responsiva para uma cafeteria, desenvolvida com Next.js 16 e Tailwind CSS v4.</p>
</div>

---

## Sobre o Projeto

CoffeeShop é uma aplicação web single-page desenvolvida para uma cafeteria fictícia, apresentando um design moderno e elegante com navegação suave entre seções. O projeto foi criado para aperfeiçoar habilidades em Next.js e Tailwind CSS, servindo também como material de aprendizado para desenvolvedores que estão começando com essas tecnologias.

## Funcionalidades

-  **Design Responsivo**: Interface totalmente adaptável para desktop, tablet e mobile
-  **Menu Hamburguer**: Navegação mobile intuitiva com ícones do Phosphor Icons
-  **Navegação Suave**: Scroll smooth entre seções da página
-  **Scrollbar Customizada**: Barra de rolagem personalizada seguindo a identidade visual
-  **Animações**: Efeitos de hover e transições suaves em botões e links
-  **Menu Responsivo**: Menu que se adapta automaticamente ao tamanho da tela

## Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework React para produção
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Phosphor Icons](https://phosphor-icons.com/)** - Biblioteca de ícones flexível
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animações CSS com Tailwind

## 📂 Estrutura do Projeto

```
CoffeeShop/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Button.tsx         # Botão CTA principal
│   │   │   ├── Contato.tsx        # Seção de contato
│   │   │   ├── Footer.tsx         # Rodapé da página
│   │   │   ├── MainSection.tsx    # Seção hero/principal
│   │   │   ├── Menu.tsx           # Seção do cardápio
│   │   │   ├── Navabar.tsx        # Barra de navegação responsiva
│   │   │   └── Sobre.tsx          # Seção sobre a cafeteria
│   │   ├── globals.css            # Estilos globais e variáveis CSS
│   │   ├── layout.tsx             # Layout raiz da aplicação
│   │   └── page.tsx               # Página inicial
│   └── lib/
│       └── utils.ts               # Funções utilitárias
├── public/                        # Arquivos estáticos (imagens)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/eduardavieira-dev/CoffeeShop.git
```

2. Entre na pasta do projeto
```bash
cd CoffeeShop
```

3. Instale as dependências
```bash
npm install
```

4. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

5. Abra o navegador e acesse
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção


##  Paleta de Cores

```css
--background: #181012    /* Fundo escuro principal */
--menu: #1f1517          /* Fundo da seção menu */
--card: #241a1c          /* Fundo dos cards */
--primary: #ffffff       /* Texto principal (branco) */
--secondary: #dd8976     /* Cor de destaque (coral) */
--third: #c36f5c         /* Cor terciária (coral escuro) */
--button-primary: #a45a49 /* Botão primário */
--footer: #23181a        /* Fundo do rodapé */
```

## Destaques Técnicos

- **App Router**: Utilização do novo sistema de rotas do Next.js 16
- **Server Components**: Componentes otimizados para performance
- **TypeScript**: Tipagem estática para maior segurança no código
- **Mobile First**: Design responsivo com abordagem mobile-first
- **Acessibilidade**: Labels e atributos ARIA para melhor experiência

## Seções do Site

1. **Home**: Seção hero com chamada principal e botão CTA
2. **Menu**: Cardápio com os principais cafés oferecidos
3. **Sobre**: História e valores da cafeteria
4. **Contato**: Informações de contato e localização

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

##  Autora

**Eduarda Vieira**

- GitHub: [@eduardavieira-dev](https://github.com/eduardavieira-dev)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Desenvolvido com ☕ e 🩷 por Eduarda Vieira
</div>

