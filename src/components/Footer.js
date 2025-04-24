import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Mozsystems. Todos os direitos reservados.</p>

        <a href="mailto:mubaiviriato@gmail.com" className="footer-link">
          <Mail size={16} className="inline-icon" /> Email: mubaiviriato@gmail.com
        </a>
        <br />
        <a target="_blank" href="tel:+258873465311" className="footer-link">
          <Phone size={16} className="inline-icon" /> Cell: +258873465311
        </a>
      </div>
    </footer>
  );
}
