import React from 'react';
import { ListItemContainer, ListItemText } from './styles';


const ListItem = ({ text }) => {
  return (
    <ListItemContainer>
      <ListItemText>{`> ${text}`}</ListItemText>
    </ListItemContainer>
  );
};

export default ListItem;