import { useState } from "react";
import { Nav, Container } from "./style";
import { RiCloseFill } from "react-icons/ri";

export default function NavMobile({ menuIsVisible, setMenuIsVisible }) {
  //   const [isVisible, setIsVisible] = useState(true);

  return (
    <Container isVisible={menuIsVisible}>
      <Nav>
        <RiCloseFill onClick={() => setMenuIsVisible(false)} />
        <a href="#sobremim">SOBRE MIM</a>
        <a href="#conhecimentos">CONHECIMENTO</a>
        <a href="#projetos">PROJETOS</a>
        <a href="#falecomigo" className="contact">
          FALE COMIGO
        </a>
      </Nav>
    </Container>
  );
}
