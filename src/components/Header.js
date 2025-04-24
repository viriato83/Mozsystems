import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollTo, setScrollTo] = useState(false);

  // Verifica o tamanho da tela para alternar entre menu mobile e desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setAberto(false); // Fecha o menu em telas maiores
      }
    };

    // Função de scroll
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrollTo(true);
      } else {
        setScrollTo(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener("resize", handleResize);

    // Remove os eventos ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adiciona ou remove a classe 'blurred' no body
  useEffect(() => {
    const container= document.querySelector(".contentor");
    if (aberto) {
      container.style.filter = 'blur(5px)';
    } else {
      container.style.filter = 'none';
    }

    // Limpeza para remover o desfoque ao desmontar
    return () => {
      document.body.style.filter = 'none';
    };
  }, [aberto]);

  return (
    <header className={`container-fluid header-container ${scrollTo ? "scrolled" : ""}`}>
       <div  style={{marginLeft:"10px",color:"#53646f"}}><a href="mailto:mubaiviriato@gmail.com" className="footer-link">
          <Mail size={16} className="inline-icon" /> Email: mubaiviriato@gmail.com
        </a>
        <br />
        <a target="_blank" href="tel:+258873465311" className="footer-link ">
          <Phone size={16} className="inline-icon" /> Cell: +258873465311
        </a></div>
      <div className="logo"><img src="logo.png" width="150px" alt="Logo" /></div>

      {/* Menu para telas maiores */}
      {!isMobile && (
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
            <li><Link to="/contacts">Contactos</Link></li>
          </ul>
        </nav>
      )}

      {/* Menu hambúrguer para telas menores */}
      {isMobile && (
        <>
          <button className={`menu-btn ${aberto ? "aberto" : ""}`} onClick={() => setAberto(true)}>☰</button>

          <nav className={`nav-menu ${aberto ? "aberto" : ""}`}>
            <button className="fechar-btn" onClick={() => setAberto(false)}>✖</button>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to=";servicos">Serviços</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><Link to="/contacts">Contactos</Link></li>
            </ul>
          </nav>

          {aberto && <div className="overlay" onClick={() => setAberto(false)} />}
        </>
      )}
    </header>
  );
}
