import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import logo1 from "../images/web.png";
import logo2 from "../images/syt.png";
import logo3 from "../images/seo.png";
import logo4 from "../images/seo.png"; // Nova logo para Assistência Técnica
import logo5 from "../images/seo.png"; // Nova logo para Consultoria Tecnológica
import { motion } from "framer-motion";
export default function About() {
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
        <section className="servicos mt-50">
          <div className="container sobre ">
            <h2 className="services" >Sobre Nós</h2>
              <p className="text-xl-center mt-2">    Na MozSystems, transformamos tecnologia em crescimento real para pequenas e médias empresas. Oferecemos soluções digitais personalizadas no desenvolvimento de softwares eficientes à criação de websites modernos. além de suporte técnico completo para garantir o funcionamento contínuo dos seus sistemas. Acreditamos que toda empresa, independente do tamanho, merece acesso a tecnologia de ponta, atendimento próximo e resultados concretos. MozSystems: Soluções inteligentes, crescimento gara</p>
            <h3>
            Missão 
            </h3>
            <ul style={{listStyle:"none",maxWidth:"850px",textAlign:"center"}}>
                    <li>Oferecer soluções digitais acessíveis, modernas e de alta qualidade para pequenas e médias empresas, impulsionando seu crescimento e sucesso através da tecnologia.</li> 
                </ul>
                 
                    <h3>
                    Visão 
                    </h3>
                <ul style={{listStyle:"none",maxWidth:"850px",textAlign:"center"}}>
                    <li>Ser reconhecida como a principal parceira tecnológica de pequenas e médias empresas em Moçambique e além, promovendo inovação, eficiência e transformação digital.</li>
                 </ul>
           
                    <h3>Valores</h3>
             <ul style={{listStyle:"none"}}>
                <li><strong>Compromisso com o Cliente: </strong>Trabalhamos lado a lado para entender e atender às necessidades de cada negócio.</li>
                <li><strong>Inovação:</strong> Buscamos constantemente novas tecnologias e soluções criativas.</li>
                <li><strong>Qualidade: </strong>Entregamos produtos e serviços com alto padrão de excelência.</li>
                <li><strong>Acessibilidade: </strong>Tornamos a tecnologia de qualidade possível para todos os tamanhos de empresa.</li>
                <li><strong>Ética e Transparência: </strong>Atuamos com responsabilidade, honestidade e respeito em todas as relações.</li>
                <li><strong>Crescimento Conjunto:</strong> Nosso sucesso está ligado ao sucesso dos nossos clientes.</li>
             </ul>
            

          </div>
          <button className="btn static"> <a href="https://wa.me/+258873465311" target="blank" >Entre em Contacto</a> </button>
        </section>
     </motion.section>
      </Container>
      <Footer />
    </>
  );
}
