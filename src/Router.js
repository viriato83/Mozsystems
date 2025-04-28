import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contactos";
import About from "./pages/About";

export default function AppRouter() {
  return (
    <Router  >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/servicos" element={<Servicos></Servicos>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </Router>
  );
}
