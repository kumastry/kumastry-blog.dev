import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";

//mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Botton from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const Header = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container>
        <Toolbar>
          <Typography style={{ color: "black" }} variant="h4" component="div">
            kumastry.dev
          </Typography>

          <Box sx={{ flexGrow: 2 }} />

          <Box sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}>
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <Link href="/">
                  <Botton sx={{ my: 2 }}>Blog</Botton>
                </Link>
              </Grid>

              <Grid item sm={4}>
                <Link href="/about">
                  <Botton sx={{ my: 2 }}>About</Botton>
                </Link>
              </Grid>

              <Grid item sm={4}>
                <Link href="/portfolio">
                  <Botton sx={{ my: 2 }}>Portfolio</Botton>
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: { md: "none", sm: "none" } }}>
            <Botton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon sx={{ my: 2, color: "black" }} />
            </Botton>
          </Box>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link href="/">
              <MenuItem onClick={handleClose}>Blog</MenuItem>
            </Link>

            <Link href="/about">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>

            <Link href="/portfolio">
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
