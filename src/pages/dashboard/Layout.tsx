// @ts-nocheck
import React from "react";
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "100%",
    backgroundColor: "#1976D2",
    color: "#fff",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#2196f3",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
  },
  footer: {
    width: "100%",
    backgroundColor: "#1976D2",
    color: "#fff",
    padding: theme.spacing(2),
    position: "fixed",
    bottom: 0,
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* Menu items go here */}
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
          <Typography variant="h6" noWrap>
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Sidebar content goes here */}
        <Box p={2}>
          <Typography variant="h6" style={{ color: "#fff" }}>
            Sidebar
          </Typography>
        </Box>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg">{children}</Container>
      </main>
      <Box component="footer" className={classes.footer}>
        <Typography variant="body2" align="center">
          Your Footer Information
        </Typography>
      </Box>
    </div>
  );
};

export default Layout;
