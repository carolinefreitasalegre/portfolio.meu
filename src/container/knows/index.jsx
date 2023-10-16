import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

import { Container } from "./style";

export default function Conhecimento() {
  return (
    <>
      <Container id="conhecimentos">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <FaHtml5 />
          <FaCss3 />
          <DiJavascript1 />
          <FaReact />
          <FaNodeJs />
          <FaGithub />
          <FaGit />
          <FaBootstrap />
          <SiNextdotjs />
        </div>
      </Container>
    </>
  );
}
