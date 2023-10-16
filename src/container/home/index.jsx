import React from "react";
import img from "../../../public/prog.jpg";
import { Container, Info, Icons } from "./style";
import Header from "../header";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Info
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p>Olá, eu sou</p>
          <h3>Carol Freitas</h3>
          <h3 className="name">desenvolvedora Front-End</h3>
          <Icons
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <a
              href="https://www.linkedin.com/in/carolinefreitasa/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/carolinefreitasalegre" target="_blank">
              <BsGithub />
            </a>
            <a href="https://wa.me/5567996692370" target="_blank">
              <BsWhatsapp />
            </a>
          </Icons>
        </Info>
        <img src={img} alt="" className="slide-bottom" />
      </Container>
    </>
  );
}
