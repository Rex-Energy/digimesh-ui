// @ts-nocheck

import {
  Grid,
  Container,
  Box,
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Section from "../../components/section";
import { InputField } from "../../components/Inputfield";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const isValid = username && password;
  const [loginData, setLoginData] = useState(null);
  const isSmallDevice = useMediaQuery("(max-width: 899px)");

  return (
    <>
      <Grid
        container
        minHeight={"90vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} lg={6}>
          <Section title="User Login">
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FormControl variant="filled" fullWidth>
                  <InputField
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Email"
                    id="username"
                    name="username"
                    autoComplete="username"
                    inputProps={{ style: { color: grey[300] } }}
                    error={username === ""}
                    helperText={username === "" && "Please enter a username"}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </FormControl>

                <FormControl variant="filled" fullWidth>
                  <InputField
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    error={password === ""}
                    helperText={password === "" && "Please enter the password"}
                    inputProps={{ style: { color: grey[300] } }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff
                                sx={{ color: "#fafafa", fontSize: "16px" }}
                              />
                            ) : (
                              <Visibility
                                sx={{ color: "#fafafa", fontSize: "16px" }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#0054B0",
                    height: "37px",
                    borderRadius: "6px",
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: isSmallDevice ? "14px" : "16px",
                    lineHeight: "36px",
                    color: "##fafafa",
                    ":disabled": {
                      color: "#757C8D",
                      cursor: "not-allowed",
                    },
                  }}
                  disabled={!isValid}
                  onClick={() => {
                    setLoginData({
                      userName: username,
                      password: password,
                      options: {
                        UserPoolId: "ap-southeast-2_YetmijDCS",
                        ClientId: "1de1mnqbrnv22npcj0uubeorg7",
                      },
                    });
                  }}
                >
                  Sign In
                </Button>
                <Grid
                  container
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Grid item>
                    <Link
                      to="/register"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "36px",
                        color: "#fafafa",
                        textDecoration: "none",
                      }}
                    >
                      {"You don't have an account? Register here"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Section>
        </Grid>
      </Grid>
    </>
  );
}
