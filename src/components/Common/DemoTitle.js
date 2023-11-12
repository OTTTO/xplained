import { Typography } from "@mui/material";

export function DemoTitle({ title }) {
  return (
    <Typography
      fontWeight="bold"
      sx={{ textDecoration: "underline" }}
      marginBottom=".5rem"
    >
      {title}
    </Typography>
  );
}
