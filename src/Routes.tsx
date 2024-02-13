// @ts-nocheck

import { useEffect } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

const Routers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const loginstyles =
    location?.pathname === "/login" ||
    location?.pathname === "/register" ||
    true
      ? {
          backgroundImage: "url(background.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "center",
        }
      : {};

  return (
    <>
      <Box
        sx={{
          ...loginstyles,
          minHeight: "90vh",
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>

        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
        <Routes>
          <Route path="/register" Component={Register} />
        </Routes>
      </Box>
    </>
  );
};

export default Routers;
