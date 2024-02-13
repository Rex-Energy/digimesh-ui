// @ts-nocheck

import React from "react";
import { Grid, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import MyTabs from "./components/Tabs";

const Layout: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState({});

  const toggleSubMenu = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const settings = [
    {
      title: "Temprature",
      key: "1",
      submenu: [],
    },
    {
      key: "2",
      title: "Humidity",
      submenu: [],
    },
    {
      key: "3",
      title: "Levels",
      submenu: [
        {
          key: "31",
          title: "Level1",
          submenu: [
            {
              key: "311",
              title: "Sublevel1",
              submenu: [],
            },
          ],
        },
        {
          key: "32",
          title: "Level2",
          submenu: [],
        },
      ],
    },
    {
      key: "4",
      title: "Wind",
      submenu: [],
    },
  ];

  function MenuItemComponent({ setting, index }) {
    return (
      <React.Fragment key={index}>
        <Grid xs={12} style={{ margin: "10px 0px" }}>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#37373d",
              },
            }}
            onClick={() => toggleSubMenu(setting?.key)}
          >
            <Grid xs={1}>
              {setting?.submenu?.length > 0 ? (
                expanded[setting?.key] ? (
                  <ExpandLess style={{ color: "#fafafa", fontSize: "16px" }} />
                ) : (
                  <ExpandMore style={{ color: "#fafafa", fontSize: "16px" }} />
                )
              ) : null}
            </Grid>
            <Grid xs={11} style={{ color: "#fafafa" }}>
              {setting.title}
            </Grid>
          </Grid>
        </Grid>

        {setting?.submenu?.length > 0 ? (
          <Collapse in={expanded[setting?.key]} timeout="auto">
            {setting?.submenu?.map((tab, subIndex) => (
              <Grid
                key={subIndex}
                xs={12}
                style={{ margin: "10px 0px", paddingLeft: "16px" }}
              >
                <MenuItemComponent setting={tab} index={subIndex} />
              </Grid>
            ))}
          </Collapse>
        ) : null}
      </React.Fragment>
    );
  }

  return (
    <Grid container>
      <Grid
        xs={12}
        style={{
          backgroundColor: "#181818",
          height: "10vh",
          display: "flex",
          padding: "0 30px",
          alignItems: "center",
          border: "1px solid #c1b58c",
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
          backgroundColor: "#181818",
          height: "90vh",
          padding: "30px 10px 10px 10px",
          border: "1px solid #c1b58c",
          borderTop: 0,
        }}
      >
        {settings?.map((setting, index) => (
          <MenuItemComponent key={index} index={index} setting={setting} />
        ))}
      </Grid>

      <Grid
        xs={10}
        style={{
          backgroundColor: "#181818",
          height: "90vh",
        }}
        container
      >
        <Grid
          xs={3}
          style={{
            backgroundColor: "#181818",
            height: "70vh",
            padding: "30px 10px 10px 10px",
            border: "1px solid #c1b58c",
            borderLeft: 0,
            borderTop: 0,
          }}
        ></Grid>
        <Grid
          xs={9}
          style={{
            backgroundColor: "#181818",
            height: "70vh",
            border: "1px solid #c1b58c",
            borderLeft: 0,
            borderTop: 0,
            overflowY: "auto",
          }}
        >
          {children}
        </Grid>
        <Grid
          xs={12}
          style={{
            backgroundColor: "#181818",
            height: "20vh",
            padding: "30px 10px 10px 10px",
            border: "1px solid #c1b58c",
            borderLeft: 0,
            borderTop: 0,
          }}
        >
          <MyTabs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
