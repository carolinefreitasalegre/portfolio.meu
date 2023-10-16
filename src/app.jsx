import React, { useState } from "react";
import AOS from "aos";

import Header from "./container/header";
import Home from "./container/home";
import SobreMim from "./container/aboutMe";
import Conhecimento from "./container/knows";
import Projetos from "./container/project";
import FaleComigo from "./container/contact";
import Footer from "./container/footer";
import NavMobile from "./container/navMobile";

export default function app() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <>
      <Header setMenuIsVisible={setMenuIsVisible} />

      <NavMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Home />
      <SobreMim />
      <Conhecimento />
      <Projetos />
      <FaleComigo />
      <Footer />
    </>
  );
}
