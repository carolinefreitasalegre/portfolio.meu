import React from "react";
import img from "../../../public/photo.png";
import Header from "../header/index";
import Home from "../header/index";
import { Container, Text } from "./style";

export default function SobreMim() {
  return (
    <>
      <Container id="sobremim">
        <img
          src={img}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        />
        <Text
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h1>Sobre Mim</h1>
          <p>
            Atualmente, sou servidora pública em transição de carreira para a
            área de programação. Com 31 anos de idade, sou apaixonada por
            tecnologia e possuo conhecimentos em HTML, CSS, Bootstrap,
            JavaScript, React e Next JS. Além disso, sou uma entusiasta da
            aprendizagem autodidata e estou sempre disposta a aprimorar cada vez
            mais minhas habilidades. Convido você a conhecer alguns dos meus
            projetos pessoais abaixo... <br />
            Sinta-se à vontade para dar uma olhada!
          </p>
          <a
            id="curriculo"
            class="heartbeat"
            href="imagem/CV-PDF.pdf"
            Acme
            Docudata-animation="left"
            download="mentation (ver. 2.0.1).pdf"
          >
            Download Currículo
          </a>
        </Text>
      </Container>
    </>
  );
}
