import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Ingredients from '../Ingredients';

interface CheesePizzaProps {
  crustType: string;
  ingredients: string[];
}

export const CheesePizza: React.FC<CheesePizzaProps> = (props) => {
  const { ingredients, crustType } = props;

  return (
    <>
      <Ingredients ingredients={ingredients} />
      <Typography sx={{ mb: 1.5 }} color="text.secondary">Crust: {crustType}</Typography>
    </>
  );
};
