import { Grid } from "@mui/material";
import { Title } from "./Title";
import { Footer } from "./Footer";

export function DSContainer({ title, children }) {
  return (
    <Grid border="double thick black" id="outerGrid">
      <Grid container direction="column" margin="0 auto">
        <Title title={title} />
        <Grid width="90%" margin="0 auto" paddingBottom="1rem">
          {children}
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}