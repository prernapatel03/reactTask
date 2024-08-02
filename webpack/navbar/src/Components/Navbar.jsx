import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Home from "./Home";
import "./Navbar.css";
import { Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Demo from './demo'

const pages = ["Travel", "Expense", "Help"];

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: "0rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 2,
              }}
            >
              go
            </Typography>
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Box sx={{ display: "flex" }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <ExpandMoreIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MenuItem sx={{ width: 60 }}>
                    <IconButton sx={{ p: 0, m: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </MenuItem>

                  <MenuItem
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      Alanna Fridferting
                    </Typography>
                    <Typography>
                      Associate Director, Business Solutions
                    </Typography>
                  </MenuItem>
                </Box>

                <MenuItem>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "#0069bf",
                      background: "lightblue",
                      "&:hover": {
                        backgroundColor: "lightblue",
                      },
                    }}
                  >
                    Switch to Administrator
                  </Button>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Typography textAlign="center" onClick={handleOpen}>
                    My Profile
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Users</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Home open={open} setOpen={setOpen} />
      <Demo />

    </>
  );
}
