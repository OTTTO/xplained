import { Typography } from "@mui/material";

export function DSTypography({ children }) {
  return (
    <Typography
      padding="0rem 1rem"
      border="2px solid black"
      backgroundColor="#f5f5f5"
    >
      {children}
    </Typography>
  );
}
