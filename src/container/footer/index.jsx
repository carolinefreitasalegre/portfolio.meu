import React from "react";
import logo from "../../../public/logo.png";
import { Container, Content } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <Content>
        <a href="#sobremim">Sobre mim</a>
        <a href="#conhecimentos">Conhecimento</a>
        <a href="#projetos">Projetos</a>
        <a href="#falecomigo">Fale comigo</a>
      </Content>
    </Container>
  );
}
