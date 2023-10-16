import React from "react";
import { Container } from "./style";
import { BsArrowReturnRight } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function EmailEnviado() {
  return (
    <Container>
      <h1>
        Email enviado com sucesso! <br />
        Volte sempre 😊
      </h1>
      <Link to="/">
        Voltar à página <BsArrowReturnRight />
      </Link>
    </Container>
  );
}
