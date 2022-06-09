import React from "react";
import {HeaderContainer, LabelContainer, Label, User, BarNotification, TextNotification} from './styles'
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <h1>JULASOFT</h1>
        <LabelContainer>
          <Label>ANALITICAS</Label>
          <Label>> CASO</Label>
          <Label>> DEPENDENCIA</Label>
          <Label>> MAGISTRADO</Label>
          <User />
        </LabelContainer>
      </HeaderContainer>
      <BarNotification>
        <TextNotification>
          {"Te quedan 22 días de tu subscripción gratuita."}
        </TextNotification>
      </BarNotification>
    </>
  );
};




export default Header;
