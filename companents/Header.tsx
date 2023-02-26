import React from "react";
import type { ReactNode } from "react";

//mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Botton from "@mui/material/Button";

const Header = (): JSX.Element => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container>
        <Toolbar>
          <Typography style={{ color: "black" }} variant="h4" component="div">
            kumastry.dev
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Botton sx={{ my: 3, color: "black", display: "block" }}>
              Blog
            </Botton>

            <Botton sx={{ my: 2, color: "black", display: "block" }}>
              About me
            </Botton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
