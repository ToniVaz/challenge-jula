import React from "react";
import {FooterContainer, AboutJula, Terms} from './styles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h1>JULASOFT</h1>
        <AboutJula>
          <Terms>Términos y Condiciones I Términos de Cancelación</Terms>
          <Terms>©️ 2021, judIT. Todos los derechos reservados</Terms>
        </AboutJula>
      </FooterContainer>
    </>
  );
};

export default Footer;
