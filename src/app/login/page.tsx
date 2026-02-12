"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar lógica de autenticação
    console.log("Login:", { email, senha });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Lado esquerdo - Imagem */}
      <div className="hidden md:block lg:w-3/8 relative">
        <img
          src="/login-img.png"
          alt="Coffee brewing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Lado direito - Formulário */}
      <div className="w-full lg:w-5/8 flex items-center justify-center bg-background px-6 sm:px-8 py-12">
        <div className="w-full max-w-lg space-y-8">
          {/* Cabeçalho */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              CoffeeShop
            </h1>
            <p className="text-third text-sm uppercase tracking-wider">
              CAFÉS ARTESANAIS
            </p>
          </div>

          {/* Título de boas-vindas */}
          <div className="space-y-2">
            <h2 className="text-3xl font-medium text-white">
              Bem-vindo de volta
            </h2>
            <p className="text-foreground text-sm">
              Entre na sua conta para continuar sua jornada
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo E-MAIL */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium uppercase"
              >
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                required
              />
            </div>

            {/* Campo SENHA */}
            <div className="space-y-2">
              <label
                htmlFor="senha"
                className="block text-white text-sm font-medium uppercase"
              >
                SENHA
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 bg-input border border-input-b rounded-xs text-white placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                required
              />
            </div>

            {/* Botão ENTRAR */}
            <button
              type="submit"
              className="w-full text-sm py-4 bg-third hover:bg-third/90 text-white font-semibold rounded-xs transition-colors duration-200 uppercase tracking-wide"
            >
              ENTRAR
            </button>
          </form>

          {/* Link para cadastro */}
          <div className="text-center">
            <p className="text-foreground text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/cadastro"
                className="text-third hover:text-third/90 font-medium transition-colors"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
