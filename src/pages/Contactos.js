// pages/Contact.jsx
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_o688i3i',    // Ex: service_xxxxxx
        'template_c0o583v',   // Ex: template_xxxxxx
        form.current,
        't2uo4Vi1pA83QXSjF'        // Ex: xxxxxxxxxxxx (public key)
      )
      .then((result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
          setAtivo(false)
      }, (error) => {
          alert("Erro ao enviar, tente novamente.");
          console.log(error.text);
      });
    }
    const [ativo,setAtivo]=useState(false)
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
          <div className="container contactos " >
            <h2 className="text-center mb-4">Entre em Contato</h2>
            <p className="text-center mb-5">
              Tem um projeto em mente ou dúvidas? Estamos prontos para ajudar!
            </p>

            <div className="row">



              <div className="col-md-6 mb-4 d-flex flex-column justify-content-center align-items-center">
                <form className=" p-5 rounded shadow-sm"  ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" name="name" className="form-control" placeholder="Seu nome" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                         
                    <input type="email" name="email" className="form-control" placeholder="Seu email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mensagem</label>
                    <textarea name="message" className="form-control" rows="4" placeholder="Escreva sua mensagem"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100"
                  onClick={()=>{
                       setAtivo(true)
                  }}
                  >
                    {ativo?"A Enviar...":"Enviar"}
                  </button>
                </form>
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-center  ">
                <div className="info-box mb-4">
                  <h5>Endereço</h5>
                  <p>Maputo, Moçambique</p>
                </div>
                <div className="info-box mb-4">
                  <h5>Email</h5>
                  <p>mubaiviriato@gmail.com</p>
                </div>
                <div className="info-box mb-4">
                  <h5>WhatsApp</h5>
                  <p><a href="https://wa.me/258873465311" target="_blank" rel="noopener noreferrer">+258 873 465 311</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </Container>
      <Footer />
    </>
  );
}
