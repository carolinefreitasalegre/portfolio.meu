import React, { useEffect, useState } from "react";
import LOGO from "../../../public/logo.png";
import { Container, Nav } from "./style";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header({ setMenuIsVisible }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container className={hasScrolled ? "with-box-shadow" : ""}>
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} />
        <a href="#">
          <img src={LOGO} alt="" />
        </a>
        <Nav>
          <a href="#sobremim">SOBRE MIM</a>
          <a href="#conhecimentos">CONHECIMENTO</a>
          <a href="#projetos">PROJETOS</a>
          <a href="#falecomigo" className="contact">
            FALE COMIGO
          </a>
        </Nav>
      </Container>
    </>
  );
}
