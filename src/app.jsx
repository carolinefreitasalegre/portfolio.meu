import React, { useState } from "react";

import Header from "./container/header";
import Home from "./container/home";
import SobreMim from "./container/aboutMe";
import Conhecimento from "./container/knows";
import Projetos from "./container/project";
import FaleComigo from "./container/contact";
import Footer from "./container/footer";

export default function app() {
  return (
    <>
      <Header />

      <Home />
      <SobreMim />
      <Conhecimento />
      <Projetos />
      <FaleComigo />
      <Footer />
    </>
  );
}
