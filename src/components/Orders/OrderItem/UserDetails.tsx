import React from 'react';
import { Typography } from '@mui/material';

interface UserDetailsProps {
    name: string,
    address: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, address }) => {
    return (
        <>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">User name: {name}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">User address: {address}</Typography>
        </>
    );
};

export default UserDetails;
