import React from "react";
import { NavBarSide } from "./styles";

export default function NavBar() {
  return (
    <NavBarSide>
      <a href="#sobremim">SOBRE MIM</a>
      <a href="#conhecimentos">CONHECIMENTO</a>
      <a href="#projetos">PROJETOS</a>
      <a href="#falecomigo" className="contact">
        FALE COMIGO
      </a>
    </NavBarSide>
  );
}
