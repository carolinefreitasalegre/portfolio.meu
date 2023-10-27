import React, { useState } from "react";
import { Forms, Input, TextArea, Button } from "./style";
import { Link } from "@mui/material";

export default function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msgm, setMsgm] = useState("");

  function enviarEmail() {
    if (!nome || !email || !msgm) {
      alert("Preencha os campos corretamente!");
    } else {
      alert("Email enviado com sucesso!");
    }
  }

  return (
    <Forms
      action="https://formsubmit.co/freitascaroline.92@gmail.com"
      method={() => <Link to="/emailenviado" />}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <label aria-required="true" name="nome">
        Nome
      </label>
      <Input
        required
        type="text"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label aria-required="true" name="email">
        E-mail
      </label>
      <Input
        type="email"
        required
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label aria-required="true" name="text">
        Mensagem
      </label>
      <TextArea
        required
        rows="5"
        name="text"
        value={msgm}
        onChange={(e) => setMsgm(e.target.value)}
      ></TextArea>
      <Button
        className="btn-contato heartbeat"
        type="submit"
        onClick={enviarEmail}
      >
        Enviar
        <Link to="/emailenviado"></Link>
      </Button>
    </Forms>
  );
}
