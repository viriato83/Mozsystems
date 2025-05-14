import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../images/Captura de ecrã 2025-04-04 134251.png";
import img2 from "../images/Captura de ecrã 2025-04-04 134132.png";
import img3 from "../images/Captura de ecrã 2025-04-04 134150.png";
import img4 from "../images/Captura de ecrã 2025-04-04 165147.png";

export default function Portfolio() {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextImage = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <>
      <Header />
      <Container>
      <motion.section
          className="contact-page "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <section className="portfolio mt-10">
          <div className="container mt-10">
            <h2 className="portfolio text-center">Nosso Portfólio</h2>
            <p className="mb-6 text-center">Alguns projetos recentes desenvolvidos para nossos clientes.</p>
            <h3>💻 Sistemas de Gestão de Estoque e Vendas</h3>
            <div 
            className="relative w-75 max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg h-80">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute w-100 h-75 object-cover rounded-2xl"
                />
              </AnimatePresence>

              <div>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full z-10"
                onClick={nextImage}
              >
                <ChevronRight className="text-white" />
              </button>
              </div>
            </div>
          </div>
          <section class=" mt-5  portfolio_proposta">
          
            <p>
              Este sistema foi desenvolvido com foco em automatizar e otimizar o controle de mercadorias, vendas e perdas, atendendo especialmente às necessidades de pequenas e médias empresas.
            </p>

            <h3>🔧 Funcionalidades principais:</h3>
            <ul>
              <li>
                <strong>📦 Cadastro de Mercadorias:</strong> Registro completo de produtos com tipo, valor, data de entrada e estoque relacionado.
              </li>
              <li>
                <strong>👤 Gestão de Utilizadores:</strong> Módulo de cadastro e autenticação com controle de permissões por perfil, usando segurança via <code>JWT</code> e senhas criptografadas com <code>BCrypt</code>.
              </li>
              <li>
                <strong>⚠️ Registro de Perdas (Mortalidades):</strong> Controle detalhado de perdas no estoque, com rastreabilidade e análise de impacto.
              </li>
              <li>
                <strong>💰 Gestão de Vendas:</strong> Cadastro de vendas, associação de mercadorias e geração de relatórios personalizados por período.
              </li>
              <li>
                <strong>📊 Relatórios de Entradas e Saídas:</strong> Relatórios detalhados com filtros por data, tipo de mercadoria e estoque.
              </li>
              <li>
                <strong>📦 Relatório de Stock Atualizado:</strong> Visão em tempo real dos níveis de estoque, com base nas movimentações.
              </li>
              <li>
                <strong>📈 Dashboard Informativo:</strong> Painel interativo com indicadores-chave (total de vendas, perdas, entradas, saídas, etc.).
              </li>
              <li>
                <strong>📉 Gráficos de Desempenho:</strong> Visualização clara e rápida com gráficos de pizza e barras para análise estratégica.
              </li>
              <li>
                <strong>📤 Exportação para Excel:</strong> Permite exportar dados filtrados para arquivos <code>.xlsx</code>, facilitando análises externas e relatórios administrativos.
              </li>
            </ul>
          </section>
        <button className="btn static"> <a href="https://wa.me/+258873465311" target="blank" >Entre em Contacto</a> </button>
       
        </section>
        </motion.section>
      </Container>
      <Footer />
    </>
  );
}
