import { Grid, Typography } from "@mui/material";

export function Footer() {
  return (
    <Typography
      color="white"
      padding=".5rem 1rem .5rem 0rem"
      textAlign="right"
      backgroundColor="black"
    >
      © XPLAINED {new Date().getFullYear()}
    </Typography>
  );
}
