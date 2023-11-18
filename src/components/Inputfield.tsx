import { TextField, InputLabel, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const InputField = styled(TextField)(({ theme }) => {
  const isSmallDevice = useMediaQuery("(max-width: 899px)");
  const fontSize = isSmallDevice ? "16px" : "18px";

  return {
    "& .MuiInputBase-root": {
      color: grey[300],
      "&.MuiOutlinedInput-root": {
        backgroundColor: "#1e293b",
        height: "37px",
        borderRadius: "6px",
        color: "##fafafa",
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: fontSize,
        lineHeight: "36px",
      },
      "&:hover:not(.Mui-focused)": {
        color: grey[500],
      },
      "&:focus:not(.Mui-focused)": {
        color: grey[500],
      },
      "& .MuiInputBase-input::placeholder": {
        color: "#757C8D",
      },
    },
    "& .MuiInputBase-input-MuiOutlinedInput-input:invalid": {
      backgroundColor: "#24304B",
      height: "37px",
    },
  };
});

export const InputFieldLabel = styled(InputLabel)(({ theme }) => {
  const isSmallDevice = useMediaQuery("(max-width: 899px)");
  const fontSize = isSmallDevice ? "12px" : "14px";
  return {
    color: "#757C8D",
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: fontSize,
    lineHeight: "36px",
  };
});
