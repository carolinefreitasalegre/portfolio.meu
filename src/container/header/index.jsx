import React, { useEffect, useState } from "react";
import LOGO from "../../../public/logo.png";
import { Container, Nav } from "./style";
import { RiMenu3Fill } from "react-icons/ri";
import NavBar from "../navBar";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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

  function openTheNav() {
    alert("abs");

    NavBar;
  }

  return (
    <>
      <Container className={hasScrolled ? "with-box-shadow" : ""}>
        <RiMenu3Fill onClick={() => openTheNav()} />
        <a href="#">
          <img src={LOGO} alt="" />
        </a>
        <Nav className="navBig">
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
