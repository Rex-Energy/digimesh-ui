import { useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import backgroundImage from "./assets/react.svg";

const Routers = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
          minHeight: "100%",
          boxSizing: "border-box",
          padding: "2rem",
          margin: 0,
          backgroundImage: "url(background.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
