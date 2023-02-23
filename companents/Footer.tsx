import React from "react";
import type { ReactNode } from 'react';

//import mui
import Box from "@mui/material/Box";
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography  from "@mui/material/Typography";

const Footer = () : JSX.Element => {
    return (
        <Box sx={{ width: "100%", position: '', bottom: 0}} >
             <BottomNavigation >
                <Typography >
                   copyright©2023.kumastry
                </Typography>
            </BottomNavigation>
        </Box>
    );

}

export default Footer;