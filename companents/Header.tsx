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

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Botton sx={{ my: 2 }}>
                  <Link href="/">Blog</Link>
                </Botton>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Botton sx={{ my: 2 }}>
                  <Link href="/about">About</Link>
                </Botton>
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
            <MenuItem onClick={handleClose}>
              <Link href="/">Blog</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Policy</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
