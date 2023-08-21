import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Ingredients from '../Ingredients';

interface VegetarianPizzaProps {
  ingredients: string[];
  isVegan: boolean;
}

export const VegetarianPizza: React.FC<VegetarianPizzaProps> = (props) => {
  const { ingredients, isVegan } = props;

  return (
    <>
      <Ingredients ingredients={ingredients} />
      <Typography sx={{ mb: 1.5 }} color="text.secondary">{isVegan ? 'Vegan' : 'Vegetarian'}</Typography>
    </>
  );
};
