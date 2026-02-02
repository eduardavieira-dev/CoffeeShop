"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/Navabar";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "@phosphor-icons/react";

export default function CadastroCafe() {
  const handleVoltar = () => {
    window.history.back();
  };

  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.preco) {
      setMensagem("Por favor, preencha os campos obrigatórios.");
      return;
    }

    // Aqui você pode enviar para uma API
    console.log("Dados do café:", formData);
    setMensagem("Café cadastrado com sucesso! ☕");

    // Limpar formulário após 2 segundos
    setTimeout(() => {
      setFormData({
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
      });
      setMensagem("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="border border-border rounded-md max-w-5xl mx-4 mt-10 p-6 bg-card md:mx-auto">
        <div className="flex flex-col gap-6 md:flex-row justify-between ">
          <div className="p-1 md:pl-3 w-full">
            <button
              onClick={handleVoltar}
              className="text-primary hover:underline flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft size={18} /> <span>Voltar</span>
            </button>
            <h3 className="font-semibold text-primary text-3xl mt-2 text-center justify-center align-center items-center mx-auto mr-8">
              Cadastro de Café
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 m-3">
              <div>
                <label className="block text-primary mb-1">Nome do Café*</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Cappuccino Cremoso"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-primary mb-1">Descrição*</label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Ex: Espresso com leite vaporizado e espuma aveludada, polvilhado com canela."
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-primary"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-full">
                  <label className="block text-primary mb-1">Preço*</label>
                  <input
                    type="text"
                    name="preco"
                    value={formData.preco}
                    onChange={handleChange}
                    placeholder="R$ 12,00"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-primary"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-primary mb-1">Categoria*</label>
                  <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-primary uppercase"
                    required
                  >
                    <option value="quente">Cafés Quentes</option>
                    <option value="gelado">Cafés Gelados</option>
                    <option value="sobremesas">Sobremesas</option>
                  </select>
                </div>
              </div>
              <button className="bg-button-secondary text-center justify-center mx-auto w-full py-3  mt-4 rounded-md font-semibold hover:bg-secondary hover:text-primary transition cursor-pointer">
                Cadastrar
              </button>
            </form>
          </div>

          <img
            src="./cadastro-coffee.png"
            className="object-cover rounded-md"
            alt=""
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
