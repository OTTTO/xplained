import { Typography } from "@mui/material";

export function Title({ title }) {
  return (
    <>
      <Typography
        variant="h1"
        color="black"
        textAlign="center"
        sx={{ textShadow: "0.1rem 0.1rem 0.3rem goldenrod" }}
      >
        {title}
      </Typography>
    </>
  );
}
