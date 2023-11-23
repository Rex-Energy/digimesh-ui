// @ts-nocheck

import {
  Grid,
  Container,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  InputAdornment,
  Checkbox,
  Typography,
  FormControl,
  Popper,
} from "@mui/material";
import { Link } from "react-router-dom";
import Section from "../../components/section";
import { InputField } from "../../components/Inputfield";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  formatPhoneNumber,
  validatePhoneNumber,
  validateEmail,
  validatePassword,
} from "../../constants";

import { Close, Done, Visibility, VisibilityOff } from "@mui/icons-material";

export default function Register() {
  const [email, setEmail] = useState<string | null>(null);
  const [fname, setFname] = useState<string | null>(null);
  const [lname, setLname] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>("");
  const [password1, setPassword1] = useState<string | null>("");
  const [phoneNumber, setPhoneNumber] = useState<string | null>("+61");
  const navigate = useNavigate();
  const [isFnameValid, setisFnameValid] = useState<boolean | null>(null);
  const [isLnameValid, setisLnameValid] = useState<boolean | null>(null);
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isValidPhone, setisValidPhone] = useState<boolean | null>(null);
  const [isValidPassword, setisValidPassword] = useState<boolean | null>(null);
  const [isPasswordsMatch, setisPasswordsMatch] = useState<boolean | null>(
    null
  );
  const passwordChecks = validatePassword(password);

  // const isEmailValid = validateEmail(email)
  // const isValidPhone = Boolean(validatePhoneNumber(phoneNumber))
  // const isValidPassword = validatePassword(password)
  // const isPasswordsMatch = password1 === password
  const [signupValues, setSignupValues] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const showPasswordChecks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const hidePasswordChecks = () => {
    setAnchorEl(null);
  };

  const isSmallDevice = useMediaQuery("(max-width: 899px)");
  const isValid =
    fname &&
    lname &&
    email &&
    isValidPhone &&
    password &&
    isEmailValid &&
    isPasswordsMatch &&
    isValidPassword &&
    checkTerms;

  return (
    <>
      {/* <Logobar /> */}
      <Grid
        container
        minHeight={"90vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} lg={8}>
          <Section title="Register a new account">
            <Container component="main" maxWidth="sm">
              <Box
                sx={{
                  // marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Grid container style={{ width: "100%" }}>
                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingRight: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        margin="normal"
                        required
                        placeholder="First Name"
                        fullWidth
                        id="firstname"
                        error={isFnameValid === false}
                        helperText={
                          isFnameValid === false &&
                          "Please enter the firstname!"
                        }
                        name="firstname"
                        inputProps={{ style: { color: grey[300] } }}
                        onBlur={(e) => {
                          setisFnameValid(fname === "" ? false : true);
                        }}
                        onChange={(e) => {
                          setFname(e.target.value);
                          if (e.target.value !== "") {
                            setisFnameValid(true);
                          }
                        }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingLeft: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Last Name"
                        error={isLnameValid === false}
                        helperText={
                          isLnameValid === false && "Please enter the lastname!"
                        }
                        id="lastname"
                        name="lastname"
                        inputProps={{ style: { color: grey[300] } }}
                        onChange={(e) => {
                          setLname(e.target.value);
                          if (e.target.value !== "") {
                            setisLnameValid(true);
                          }
                        }}
                        onBlur={(e) => {
                          setisLnameValid(lname === "" ? false : true);
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container style={{ width: "100%" }}>
                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingRight: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Email"
                        type="email"
                        id="email"
                        label=""
                        name="email"
                        autoComplete="email"
                        error={isEmailValid === false}
                        helperText={
                          isEmailValid === false &&
                          "Please enter a valid email address"
                        }
                        inputProps={{ style: { color: grey[300] } }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (validateEmail(e.target.value)) {
                            setIsEmailValid(true);
                          }
                        }}
                        onBlur={(e) => {
                          setIsEmailValid(validateEmail(email));
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingLeft: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        fullWidth
                        margin="normal"
                        placeholder="Phone Number"
                        id="phone"
                        error={isValidPhone === false}
                        helperText={
                          isValidPhone === false &&
                          "Please enter a valid phone number"
                        }
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(formatPhoneNumber(e?.target?.value));
                          if (Boolean(validatePhoneNumber(e.target.value))) {
                            setisValidPhone(true);
                          }
                        }}
                        onBlur={(e) => {
                          setisValidPhone(
                            Boolean(validatePhoneNumber(phoneNumber))
                          );
                        }}
                        inputProps={{
                          maxLength: 19,
                        }}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container style={{ width: "100%" }}>
                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingRight: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onMouseEnter={showPasswordChecks}
                        onMouseLeave={hidePasswordChecks}
                        id="password"
                        error={isValidPassword === false}
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
                          const validations = validatePassword(e.target.value);
                          setisValidPassword(
                            validations?.length &&
                              validations?.hasLowercase &&
                              validations?.hasUppercase &&
                              validations?.hasDigit &&
                              validations?.hasSpecialChar
                              ? true
                              : false
                          );
                        }}
                        onBlur={() => {
                          const validations = validatePassword(password);
                          setisValidPassword(
                            validations?.length &&
                              validations?.hasLowercase &&
                              validations?.hasUppercase &&
                              validations?.hasDigit &&
                              validations?.hasSpecialChar
                              ? true
                              : false
                          );
                        }}
                      />
                      <Popper
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        style={{ zIndex: 10000 }}
                      >
                        <Grid
                          style={{
                            padding: "10px",
                            backgroundColor: "#24304B",
                            borderRadius: "8px",
                          }}
                        >
                          <Typography
                            style={{
                              fontSize: "14px",
                              color: "##fafafa",
                              fontFamily: "Roboto, sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {passwordChecks?.length ? (
                              <Done
                                style={{
                                  color: "green",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            ) : (
                              <Close
                                style={{
                                  color: "red",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            )}
                            At least 8 characters
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              color: "##fafafa",
                              fontFamily: "Roboto, sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {passwordChecks?.hasLowercase ? (
                              <Done
                                style={{
                                  color: "green",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            ) : (
                              <Close
                                style={{
                                  color: "red",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            )}
                            Has a lowercase letter
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              color: "##fafafa",
                              fontFamily: "Roboto, sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {passwordChecks?.hasUppercase ? (
                              <Done
                                style={{
                                  color: "green",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            ) : (
                              <Close
                                style={{
                                  color: "red",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            )}
                            Has an uppercase letter
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              color: "##fafafa",
                              fontFamily: "Roboto, sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {passwordChecks?.hasDigit ? (
                              <Done
                                style={{
                                  color: "green",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            ) : (
                              <Close
                                style={{
                                  color: "red",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            )}
                            Has a digit
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "14px",
                              color: "##fafafa",
                              fontFamily: "Roboto, sans-serif",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {passwordChecks?.hasSpecialChar ? (
                              <Done
                                style={{
                                  color: "green",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            ) : (
                              <Close
                                style={{
                                  color: "red",
                                  paddingRight: isSmallDevice ? 0 : "5px",
                                }}
                              />
                            )}
                            Has a special character
                          </Typography>
                        </Grid>
                      </Popper>
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={12}
                    md={6}
                    style={{ paddingLeft: isSmallDevice ? 0 : "5px" }}
                  >
                    <FormControl variant="filled" fullWidth>
                      <InputField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        type={showPassword1 ? "text" : "password"}
                        id="password1"
                        inputProps={{ style: { color: grey[300] } }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword1(!showPassword1)}
                                edge="end"
                              >
                                {showPassword1 ? (
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
                          setPassword1(e.target.value);
                          if (password === e.target.value) {
                            setisPasswordsMatch(true);
                          }
                        }}
                        onBlur={(e) => {
                          setisPasswordsMatch(password === password1);
                        }}
                        error={isPasswordsMatch === false}
                        helperText={
                          isPasswordsMatch === false &&
                          "Passwords do not match!"
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Checkbox
                    checked={checkTerms}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCheckTerms(event.target.checked);
                    }}
                    sx={{ color: grey[300] }}
                  />
                  <Typography
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: isSmallDevice ? "12px" : "16px",
                      lineHeight: "36px",
                      color: "##fafafa",
                    }}
                  >
                    I agree to the terms and conditions.
                  </Typography>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#0054B0",
                    height: "37px",
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: isSmallDevice ? "14px" : "18px",
                    lineHeight: "36px",
                    color: "##fafafa",
                    ":disabled": {
                      color: "#757C8D",
                      cursor: "not-allowed",
                    },
                  }}
                  disabled={!isValid}
                  onClick={() => {
                    navigate("/dashboard");
                    setSignupValues({
                      firsName: fname ?? "",
                      lastName: lname ?? "",
                      email: email ?? "",
                      password: password ?? "",
                      phoneNumber: validatePhoneNumber(phoneNumber),
                      options: {
                        UserPoolId: "ap-southeast-2_YetmijDCS",
                        ClientId: "1de1mnqbrnv22npcj0uubeorg7",
                      },
                    });
                  }}
                >
                  Register your account
                </Button>
                <Grid
                  container
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Grid item>
                    <Link
                      to="/login"
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
                      {"You already have an account? Login here"}
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
