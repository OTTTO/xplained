import { Typography } from "@mui/material";

export function MainTypography({ children }) {
  return (
    <Typography
      padding="0rem 1rem"
      border="3px solid black"
      backgroundColor="#f5f5f5"
    >
      {children}
    </Typography>
  );
}
