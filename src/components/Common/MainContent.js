import { Grid } from "@mui/material";

export function MainContent({ children }) {
  return (
    <Grid padding="0rem 1rem" lineHeight="1.4rem">
      {children}
    </Grid>
  );
}
