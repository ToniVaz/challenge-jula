import React from 'react';
import { Card, BoxTitle, BoxTitleTwo, CardTextTwo,Button } from './styles';

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

export default CardData;