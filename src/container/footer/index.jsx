import React from "react";
import logo from "../../../public/logo.png";
import { Container, Content } from "./style";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <Container>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <Content>
        <a href="#sobremim">
          <RiArrowRightDoubleFill />
          Sobre mim
        </a>
        <a href="#conhecimentos">
          <RiArrowRightDoubleFill />
          Conhecimento
        </a>
        <a href="#projetos">
          <RiArrowRightDoubleFill />
          Projetos
        </a>
        <a href="#falecomigo">
          <RiArrowRightDoubleFill />
          Fale comigo
        </a>
      </Content>
    </Container>
  );
}
