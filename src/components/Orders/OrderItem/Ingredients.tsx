import React from 'react';
import { Typography } from '@mui/material';

interface PizzaProps {
    ingredients: string[];
}

const Ingredients: React.FC<PizzaProps> = ({ ingredients }) => {
    return (
        <div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">Ingredients: {ingredients.join(', ')}</Typography>
        </div>
    );
};

export default Ingredients;
