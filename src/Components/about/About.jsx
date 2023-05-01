import React from "react";
import {
  AboutContainerStyled,
  AboutTextStyled,
  AboutTitleStyled,
} from "./AboutStyles";

function About() {
  return (
    <AboutContainerStyled>
      <AboutTitleStyled>Entrega numero 3</AboutTitleStyled>
      <AboutTextStyled>
        En esta entrega la idea es que esta sea la Pagina home y puedas acceder
        tanto al Todo como al poke api con Redux Toolkit.
      </AboutTextStyled>
    </AboutContainerStyled>
  );
}

export default About;
