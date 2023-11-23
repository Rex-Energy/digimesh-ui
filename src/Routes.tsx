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
    location?.pathname === "/login" || location?.pathname === "/register"
      ? {
          backgroundImage: "url(background.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }
      : {};

  useEffect(() => {
    if (location?.pathname === "/") {
      navigate("/login");
    }
  }),
    [location?.pathname];
  return (
    <>
      <Box
        sx={{
          ...loginstyles,
          minHeight: "100%",
          boxSizing: "border-box",
          padding: "2rem",
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/dashboard" Component={Dashboard} />
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
