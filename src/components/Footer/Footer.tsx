import { FooterContainer } from "./styles";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <div>
        <h5>&copy; {year} - Projeto desenvolvido por Wesley Oliveira </h5>
        <a href="https://www.linkedin.com/in/wesley-oliveira-sistemasinformacao/" target="_blank">
          <CiLinkedin />
        </a>
      </div>
    </FooterContainer>
  );
}
