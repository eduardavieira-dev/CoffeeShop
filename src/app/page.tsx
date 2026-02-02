import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navabar";
import { Sobre } from "./components/Sobre";

export default function Home() {
  return (
    <div className="bg-background selection:text-white selection:bg-secondary">
      <Navbar />
      <MainSection />
      <Menu />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}
