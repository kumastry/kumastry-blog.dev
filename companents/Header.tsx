import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";

//mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Botton from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuIcon from '@mui/icons-material/Menu';

const Header = (): JSX.Element => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container>
        <Toolbar>
          <Typography style={{ color: "black" }} variant="h4" component="div">
            kumastry.dev
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: {md: "flex", sm :"flex", xs :"none" } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
            <Botton sx={{ my: 2 }}>
              <Link href = "/">
                Blog
              </Link>
            </Botton>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Botton sx={{ my: 2 }}>
            <Link href = "/about">
              About
              </Link>
            </Botton>
            </Grid>

            </Grid>
          </Box>

          <Box sx={{ display: {md: "none", sm :"none" } }}>
            <MenuIcon sx={{ my: 2, color: "black" }}/>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
