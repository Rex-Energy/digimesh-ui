// @ts-nocheck

import React from "react";
import { Tab, Tabs, Typography, Box } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MyTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#122d41",
          },
        }}
        textColor="primary"
      >
        <Tab label="Terminal" id="tab-0" style={{ color: "#ccc" }} />
        <Tab label="Timeline" id="tab-1" style={{ color: "#ccc" }} />
      </Tabs>
    </div>
  );
};

export default MyTabs;
