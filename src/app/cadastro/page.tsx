"use client";
import Link from "next/link";
import { useState } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Adicionar lógica de cadastro aqui
    console.log("Cadastro:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Lado esquerdo - Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-6 sm:px-8 py-12">
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

          {/* Título */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-medium text-white">
              Crie uma conta
            </h2>
            <p className="text-foreground text-sm">
              Junte-se à nossa comunidade e desfrute de benefícios exclusivos
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome e Sobrenome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="nome"
                  className="block text-white text-sm font-medium uppercase"
                >
                  NOME
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="sobrenome"
                  className="block text-white text-sm font-medium uppercase"
                >
                  SOBRENOME
                </label>
                <input
                  id="sobrenome"
                  type="text"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  placeholder="Seu sobrenome"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* E-mail */}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                required
              />
            </div>

            {/* Telefone e Data de Nascimento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="telefone"
                  className="block text-white text-sm font-medium uppercase"
                >
                  TELEFONE
                </label>
                <input
                  id="telefone"
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="dataNascimento"
                  className="block text-white text-sm font-medium uppercase"
                >
                  DATA DE NASCIMENTO
                </label>
                <input
                  id="dataNascimento"
                  type="text"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  placeholder="dd/mm/aaaa"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Senha e Confirmar Senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                  minLength={8}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmarSenha"
                  className="block text-white text-sm font-medium uppercase"
                >
                  CONFIRMAR SENHA
                </label>
                <input
                  id="confirmarSenha"
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Digite novamente"
                  className="w-full px-4 py-3 bg-input border border-input-b text-white rounded-xs placeholder-input-text focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent transition"
                  required
                  minLength={8}
                />
              </div>
            </div>

            {/* Botão CRIAR CONTA */}
            <button
              type="submit"
              className="w-full text-sm py-4 bg-third hover:bg-third/90 text-white font-semibold rounded-xs transition-colors duration-200 uppercase tracking-wide"
            >
              CRIAR CONTA
            </button>
          </form>

          {/* Link para login */}
          <div className="text-center">
            <p className="text-foreground text-sm">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-third hover:text-third/90 font-medium transition-colors"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito - Imagem e Benefícios */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-black py-12 px-6 sm:px-8">
        {/* Imagem centralizada */}
        <div className="w-full max-w-md mb-12 flex items-center justify-center">
          <img
            src="/cadastro-img.png"
            alt="Coffee preparation"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Benefícios */}
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-start gap-4 sm:gap-6 border border-third/30 rounded-lg p-4 sm:p-5 hover:border-third/60 transition-colors">
            <span className="text-third text-4xl pt-1 pl-2 font-bold shrink-0">01</span>
            <div className="pt-1">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                Favorite seus cafés
              </h3>
              <p className="text-foreground text-sm">
                Salve os cafés que você mais gosta
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 border border-third/30 rounded-lg p-4 sm:p-5 hover:border-third/60 transition-colors">
            <span className="text-third text-4xl pt-1 pl-2 font-bold shrink-0">02</span>
            <div className="pt-1">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                Filtre por categoria
              </h3>
              <p className="text-foreground text-sm">
                Pesquise seus cafés e encontre-os
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 border border-third/30 rounded-lg p-4 sm:p-5 hover:border-third/60 transition-colors">
            <span className="text-third text-4xl pt-1 pl-2 font-bold shrink-0">03</span>
            <div className="pt-1">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                Gerencie seus cafés
              </h3>
              <p className="text-foreground text-sm">
                Adicione, remova e edite seus cafés
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
