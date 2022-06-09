import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import "./styles.scss";

const ContainerCard = styled.div`
  width: 1040px;
  height: 530px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  background-color: white;
  opacity: 1;
  padding-left: 62px;
  padding-right: 62px;
  padding-top: 35px;
  padding-bottom: 35px;
`;
const CardTitle = styled.h3`
  color: #542f61;
  font-size: 23px;
`;
const CardTextDescription = styled.p`
  color: #a8a8a8;
  font-size: 15px;
  font-weight: 200;
`;

const Card = styled.div`
  width: 298px;
  height: 284px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 38px;
  padding-top: 17px;
`;

const CardData = ({ title, subtitle, description, textButton }) => {
  return (
    <>
      <Card>
        <BoxTitle>{title}</BoxTitle>
        <BoxTitleTwo>{subtitle}</BoxTitleTwo>
        <CardTextTwo>{description}</CardTextTwo>
        <Button>{textButton}</Button>
      </Card>
    </>
  );
};

const CardBox = ({ title, description, subtitle, children }) => {
  return (
    <ContainerCard>
      <CardTitle>{title}</CardTitle>
      <CardTextDescription>
        {subtitle}
        <br></br>
        {description}
      </CardTextDescription>
      {children}
    </ContainerCard>
  );
};

const BoxTitle = styled.h2`
  color: #18a48c;
  font-size: 61px;
`;
const BoxTitleTwo = styled.h2`
  color: #18a48c;
  font-size: 26px;
  letter-spacing: 4.6px;
`;
const CardTextTwo = styled.p`
  color: #a8a8a8;
  font-size: 15px;
  font-weight: 200;
`;

const Button = styled.button`
  width: 184px;
  height: 41px;
  border: 2px solid #542f61;
  border-radius: 30px;
`;

const BodyContainer = styled.div`
  width: 100%;
  padding-left: 93px;
  padding-top: 76px;
  padding-right: 91px;
  padding-bottom: 108px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItemContainer = styled.div`
  width: 349px;
  height: 39px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding-left: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`;

const ListItemText = styled.h3`
  color: #844797;
  font-size: 20px;
`;

const ListItem = ({ text }) => {
  return (
    <ListItemContainer>
      <ListItemText>{`> ${text}`}</ListItemText>
    </ListItemContainer>
  );
};

const TextNotification = styled.h3`
  color: white;
  font-size: 23px;
`;

const BarNotification = styled.div`
  height: 65px;
  width: 100%;
  background-color: #18a48c;
  padding-left: 105px;
  padding-top: 18px;
  padding-bottom: 18px;
`;
const HeaderContainer = styled.div`
  height: 177px;
  width: 100%;
  background-color: #f7f7f7;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Logo</h1>
      </HeaderContainer>
      <BarNotification>
        <TextNotification>
          {"Te quedan 22 días de tu subscripción gratuita."}
        </TextNotification>
      </BarNotification>
    </>
  );
};

const UserListView = (props) => {
  const data = [
    {
      title: "30",
      subtitle: "dias",
      description: "Accedé a todas las analíticas de JudIT por 30 días.",
      textButton: "COMPRAR PLAN",
    },
    {
        title: "30",
        subtitle: "dias",
        description: "Accedé a todas las analíticas de JudIT por 30 días.",
        textButton: "COMPRAR PLAN",
      },  {
        title: "30",
        subtitle: "dias",
        description: "Accedé a todas las analíticas de JudIT por 30 días.",
        textButton: "COMPRAR PLAN",
      },
  ];
  return (
    <>
      <Header />
      <BodyContainer>
        <ListContainer>
          <ListItem text={"Mis datos"} />
          <ListItem text={"Mi subscripción"} />
          <ListItem text={"Cambiar Contraseña"} />
        </ListContainer>
        <CardBox
          title={"Mi subscripción"}
          subtitle={
            "Actualmente estás dentro de los 30 días de subscripción gratuita"
          }
          description={" Días restantes: 22"}
        >
          {data?.map((item) => {
            return <CardData {...{ ...item }} />;
          })}
        </CardBox>
      </BodyContainer>
    </>
  );
};

export default withTranslation()(UserListView);
