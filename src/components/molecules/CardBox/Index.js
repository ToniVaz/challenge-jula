import React from "react";
import { ContainerCard, CardTitle, CardTextDescription, Box } from "./styles";

const CardBox = ({ title, description, subtitle, children }) => {
  return (
    <ContainerCard>
      <CardTitle>{title}</CardTitle>
      <CardTextDescription>
        {subtitle}
        <br></br>
        {description}
      </CardTextDescription>
      <Box>{children}</Box>
    </ContainerCard>
  );
};

export default CardBox;