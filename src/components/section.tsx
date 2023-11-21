// @ts-nocheck

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  useMediaQuery,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const StyledCard = styled(Card)(
  ({ theme }) => `
  box-shadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)";
  background: #131B2F;
  border: 1px solid #89a1b7;
  mix-blend-mode: normal;
  border-radius: 12px;
`
);

const StyledContent = styled(CardContent)(
  ({ theme }) => `
  color: ${theme.palette.grey[300]};
`
);

const Section = ({
  title,
  subtitle,
  header,
  children,
  height = "100%",
}: Props) => {
  const isSmallDevice = useMediaQuery("(max-width: 899px)");
  return (
    <StyledCard style={{ height: height }}>
      <CardHeader
        title={
          <Grid
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: isSmallDevice ? "16px" : "22px",
                lineHeight: "30px",
                color: "#ffffff",
              }}
            >
              {title}
            </Typography>
          </Grid>
        }
        subheader={subtitle}
        action={header}
        sx={{
          "& .MuiCardHeader-action": {
            alignSelf: "flex-end",
            width: "70%",
          },
        }}
      />
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  );
};

export const WidgetSection = ({
  title,
  subtitle,
  header,
  children,
  height = "100%",
}: Props) => {
  const isSmallDevice = useMediaQuery("(max-width: 1200px)");
  return (
    <StyledCard style={{ height: height }}>
      <CardHeader
        title={
          <Grid>
            <Typography
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              {title}
            </Typography>
          </Grid>
        }
        subheader={subtitle}
        action={header}
        sx={{
          // height: '35px',
          "& .MuiCardHeader-action": {
            alignSelf: "flex-end",
            width: "70%",
            height: "100%",
          },
        }}
      />
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  );
};

export default Section;
