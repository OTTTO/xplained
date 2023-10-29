import { Typography } from "@mui/material";

export function Title({ title }) {
  return (
    <Typography
      variant="h1"
      textAlign="center"
      color="black"
      sx={{ textDecoration: "underline" }}
    >
      {title}
    </Typography>
  );
}
