import { Grid, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const timelines = [
  { title: "timeline 1", description: "Description 1" },
  { title: "timeline 2", description: "Description 2" },
  { title: "timeline 3", description: "Description 3" },
  { title: "timeline 4", description: "Description 3" },
  { title: "timeline 5", description: "Description 3" },
  { title: "timeline 6", description: "Description 3" },
  { title: "timeline 7", description: "Description 3" },
  { title: "timeline 8", description: "Description 3" },
];

export default function CustomTimeline() {
  return (
    <Grid
      container
      spacing={1}
      sx={{ display: "flex", justifyContent: "center", p: 4 }}
    >
      {timelines.map((timeline, index) => (
        <Grid key={index} item xs={1.5} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              backgroundColor: "#000",
              color: "#fafafa",
              position: "relative",
              width: "120px",
              borderRadius: "8px",
              padding: "5px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "#fff", fontSize: "20px" }}
            >
              {timeline.title}
            </Typography>
            {index !== timelines.length - 1 && (
              <ArrowForwardIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "-35px",
                  transform: "translateY(-50%)",
                  color: "black",
                  fontSize: "30px",
                }}
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
