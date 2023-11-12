import { Grid } from "@mui/material";
import { Title } from "./Title";
import { Footer } from "./Footer";

export function MainContainer({ title, children }) {
  return (
    <Grid id="outerGrid" paddingTop=".5rem" backgroundColor="#f9f9f9">
      <Grid container direction="column" margin="0 auto">
        <Title title={title} />
        <Grid width="90%" maxWidth="800px" margin="0 auto">
          {children}
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
