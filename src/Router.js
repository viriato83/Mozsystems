import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contactos";

export default function AppRouter() {
  return (
    <Router  >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/servicos" element={<Servicos></Servicos>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}
