import React, { useEffect, useState } from "react";
import LOGO from "../../../public/logo.png";
import { Container, Nav } from "./style";
import { RiMenu3Fill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [show, setShow] = useState(false);
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

  function toggleMenu() {
    setShow(!show);
  }

  return (
    <>
      <Container className={hasScrolled ? "with-box-shadow" : ""}>
        <RiMenu3Fill onClick={toggleMenu} />
        <a href="#">
          <img src={LOGO} alt="" />
        </a>
        <Nav show={show}>
          <li>
            <a href="#sobremim">SOBRE MIM</a>
          </li>
          <li>
            <a href="#conhecimentos">CONHECIMENTO</a>
          </li>
          <li>
            <a href="#projetos">PROJETOS</a>
          </li>
          <li>
            <a href="#falecomigo" className="contact">
              FALE COMIGO
            </a>
          </li>
        </Nav>
      </Container>
    </>
  );
}
