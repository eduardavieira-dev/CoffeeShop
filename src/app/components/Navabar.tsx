"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <a href="/"><h1 className="text-primary p-6 font-bold text-2xl">CoffeeShop</h1></a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-10 text-primary items-center p-6">
          <a href="#home" className="relative group transition">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#menu" className="relative group transition">
            Menu
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group transition">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group transition">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Botão Hamburguer Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-6 text-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} weight="bold" />
          ) : (
            <List size={28} weight="bold" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-menu">
          <div className="flex flex-col space-y-4 p-6 text-primary">
            <a
              href="#home"
              className="hover:opacity-70 transition py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#menu"
              className="hover:opacity-70 transition py-2"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#about"
              className="hover:opacity-70 transition py-2"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="hover:opacity-70 transition py-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
