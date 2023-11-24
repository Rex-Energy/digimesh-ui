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
  Grid,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import CustomTimeline from "./components/CustomTimeline";

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

  const settings = [
    {
      title: "Temprature",
      submenu: [],
    },
    {
      title: "Humidity",
      submenu: [],
    },
    {
      title: "Levels",
      submenu: ["Level1", "Level2"],
    },
    {
      title: "Wind",
      submenu: [],
    },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid
        xs={12}
        style={{
          backgroundColor: "rgb(19,27,47)",
          height: "10vh",
          display: "flex",
          padding: "0 30px",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ fontSize: "24px", fontWeight: 600, color: "#FAFAFA" }}
        >
          Asplin Weather
        </Typography>
      </Grid>
      <Grid
        xs={2}
        style={{
          backgroundColor: "rgb(19,27,47)",
          height: "80vh",
          padding: "30px 10px 10px 10px",
        }}
      >
        {settings?.map((setting) => {
          return (
            <>
              <Grid xs={12} style={{ margin: "10px 0px" }}>
                <Button
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  {setting?.title}
                </Button>
              </Grid>
              {setting?.submenu?.map((tab) => {
                return (
                  <Grid
                    xs={12}
                    style={{ margin: "10px 0px", paddingLeft: "40px" }}
                  >
                    <Button
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      {tab}
                    </Button>
                  </Grid>
                );
              })}
            </>
          );
        })}
      </Grid>
      <Grid xs={10} style={{ height: "80vh", padding: "2rem" }}>
        {children}
      </Grid>
      <Grid
        xs={12}
        style={{ backgroundColor: "rgb(19,27,47)", height: "25vh" }}
      >
        <CustomTimeline />
      </Grid>
    </Grid>
  );
};

export default Layout;
