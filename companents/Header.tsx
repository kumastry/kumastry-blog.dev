import React from "react";
import type { ReactNode } from "react";

//mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

const Header = (): JSX.Element => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container>
        <Toolbar>
          <Typography style={{ color: "black" }} variant="h4" component="div">
            kumastry.dev
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
