import React from "react";
import { Forms, Input, TextArea, Button } from "./style";
import { Link } from "@mui/material";

export default function Form() {
  return (
    <Forms
      action="https://formsubmit.co/freitascaroline.92@gmail.com"
      method="POST"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <label aria-required="true" for="nome" name="nome">
        Nome
      </label>
      <Input required type="text" name="nome" />

      <label aria-required="true" for="email" name="email">
        E-mail
      </label>
      <Input type="email" required name="email" />

      <label for="msg" aria-required="true" name="text">
        Mensagem
      </label>
      <TextArea required rows="5" name="text"></TextArea>
      <Button
        className="btn-contato heartbeat"
        type="submit"
        onclick="enviar()"
      >
        Enviar
        {/* <Link to="/emailenviado">Enviar</Link> */}
      </Button>
    </Forms>
  );
}
