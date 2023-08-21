import React from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
    name: string,
    id: number
}

const Title: React.FC<TitleProps> = ({ name, id }) => {
    return (
        <div>
            <Typography variant="overline" component="div">{name} Pizza (ID: {id})</Typography>
        </div>
    );
};

export default Title;
