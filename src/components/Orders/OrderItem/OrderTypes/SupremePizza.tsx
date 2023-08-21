import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Ingredients from '../Ingredients';

interface SupremePizzaProps {
  hasExtraToppings: boolean;
  ingredients: string[]
}

export const SupremePizza: React.FC<SupremePizzaProps> = (props) => {
  const { ingredients, hasExtraToppings } = props;

  return (
    <>
      <Ingredients ingredients={ingredients} />
      <Typography sx={{ mb: 1.5 }} color="text.secondary">{hasExtraToppings ? 'Extra Toppings Included' : 'Regular Toppings'}</Typography>
    </>
  );
};
