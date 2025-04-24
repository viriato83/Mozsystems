import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import logo1 from "../images/web.png";
import logo2 from "../images/syt.png";
import logo3 from "../images/seo.png";

export default function Servicos() {
  return (
    <>
      <Header />
      <Container>
        <section className="servicos mt-50">
          <div className="container servicos ">
            <h2 className="services">Nossos Serviços</h2>
            <p className="mb-6 text-center">Oferecemos soluções digitais sob medida para impulsionar o seu negócio.</p>
            <div className="service-grid">
              <div className="service-item">
                <div className="logo">
                  <img src={logo1} width="50px" alt="Websites" />
                </div>
                <h3 style={{ color: "#fd6532" }}>Desenvolvimento de Websites</h3>
                <p>
                  Sites modernos, responsivos e otimizados para SEO. Design atrativo e navegação fluida
                  para engajar seus clientes desde o primeiro clique.
                </p>
                <p><strong>Ideal para empresas, lojas, portfólios e muito mais!</strong></p>
              </div>

              <div className="service-item">
                <div className="logo">
                  <img src={logo2} width="60px" alt="Sistemas Web" />
                </div>
                <h3 style={{ color: "#fd6532" }}>Sistemas Web</h3>
                <p>
                  Automatize sua empresa com sistemas personalizados, adaptáveis ao seu modelo de negócio.
                  Otimize processos, economize tempo e aumente a produtividade.
                </p>
                <p><strong>1 mês de teste grátis para você experimentar sem compromisso!</strong></p>
              </div>

              <div className="service-item">
                <div className="logo">
                  <img src={logo3} width="90px" alt="SEO" />
                </div>
                <h3 style={{ color: "#fd6532" }}>SEO e Segurança</h3>
                <p>
                  Aumente sua presença digital com estratégias eficazes de SEO. Protegemos seu site com
                  as melhores práticas de segurança.
                </p>
                <p><strong>Seu negócio seguro e visível no Google!</strong></p>
              </div>
            </div>

          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
