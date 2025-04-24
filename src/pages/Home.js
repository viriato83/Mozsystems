import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import logo1 from "../images/web.png";
import logo2 from "../images/syt.png";
import logo3 from "../images/seo.png";
import img1 from "../images/Captura de ecrã 2025-04-04 134251.png";
import img2 from "../images/Captura de ecrã 2025-04-04 134132.png";
import img3 from "../images/Captura de ecrã 2025-04-04 134150.png";
import img4 from "../images/Captura de ecrã 2025-04-04 165147.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
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
        {/* Hero Section */}
        <section  className="container  hero">
          <div className="hero-content ">
            <h1 className="h1_p">Conectando Empresas ao Futuro com Tecnologia</h1>
            <p>Criamos soluções digitais personalizadas para pequenas e médias empresas.</p>
            <button className="cta-btn" ><a href="/contacts">Solicite um Orçamento</a></button>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="container">
            <h2>Sobre a MozSystems</h2>
            <p>
              Somos especialistas no desenvolvimento de sistemas web e websites personalizados. Levamos o seu negócio
              para o mundo digital, criando soluções sob medida que atendem às suas necessidades e impulsionam o seu
              crescimento.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2>Nossos Serviços</h2>
            <div className="service-grid">
              <div className="service-item">
                <div className="logo">
                  <img src={logo1} width="50px" />
                </div>
                <h3 style={{ color: "#fd6532" }}>Desenvolvimento de Websites</h3>
                <p>Criação de sites modernos, responsivos e otimizados para SEO.</p>
                <p><strong>Ideal para empresas, lojas, portfólios e muito mais!</strong></p>
              </div>
              <div className="service-item">
                <div className="logo">
                  <img className="img2" src={logo2} width="60px" />
                </div>
                <h3 style={{ color: "#fd6532" }}>Sistemas Web</h3>
                <p>Automatize seu negócio com um sistema web personalizado.</p>
                <p><strong>1 mês de teste grátis para você experimentar sem compromisso!</strong></p>
              </div>
              <div className="service-item">
                <div className="logo">
                  <img src={logo3} width="50px" />
                </div>
                <h3 style={{ color: "#fd6532" }}>SEO e Segurança</h3>
                <p>Melhore a visibilidade E a segurança da sua empresa online.</p>
                <p><strong>Seu negócio seguro e visível no Google!</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section com animações */}
        <section className="portfolio">
          <div className="container">
            <h2 className="portfolio">Portfólio</h2>
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg h-80">
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
                  className="absolute w-75 h-50 object-cover rounded-2xl"
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
        </section>
      </Container>
      <Footer />
    </>
  );
}
