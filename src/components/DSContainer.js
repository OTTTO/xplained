import { Grid } from "@mui/material";
import { Title } from "./Title";
import { Footer } from "./Footer";

export function DSContainer({ children }) {
  return (
    <Grid border="double thick black" id="outerGrid">
      <Grid container direction="column" margin="0 auto">
        <Title title="STACK" />
        <Grid width="90%" margin="0 auto" paddingBottom="2rem">
          {children}
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
