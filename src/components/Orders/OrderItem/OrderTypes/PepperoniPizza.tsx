import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Ingredients from '../Ingredients';

interface PepperoniPizzaProps {
  spiceLevel: number;
  ingredients: string[];
}

export const PepperoniPizza: React.FC<PepperoniPizzaProps> = (props) => {
  const { ingredients, spiceLevel } = props;

  return (
    <>
      <Ingredients ingredients={ingredients} />
      <Typography sx={{ mb: 1.5 }} color="text.secondary">Spice Level: {spiceLevel}/10</Typography>
    </>
  );
};
