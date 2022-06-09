import React from "react";
import CardData from "components/atoms/Card/Index";
import Footer from "components/molecules/Footer/Index";
import Header from "components/molecules/Header/Index";
import ListItem from "components/molecules/ListItem/Index";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import CardBox from "components/molecules/CardBox/Index";



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

const UserListView = (props) => {
  const data = [
    {
      title: "30",
      subtitle: "DIAS",
      description: "Accedé a todas las analíticas de JudIT por 30 días.",
      textButton: "COMPRAR PLAN",
    },
    {
      title: "90",
      subtitle: "DIAS",
      description: "Accedé a todas las analíticas de JudIT por 30 días.",
      textButton: "COMPRAR PLAN",
    },
    {
      title: "365",
      subtitle: "DIAS",
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
      <Footer />
    </>
  );
};

export default withTranslation()(UserListView);
