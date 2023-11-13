import { Grid } from "@mui/material";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function MainContainer({ title, children }) {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);
  return (
    <Grid
      id="outerGrid"
      paddingTop=".5rem"
      backgroundColor="#f9f9f9"
      minHeight="100vh"
    >
      <Grid container direction="column" margin="0 auto">
        <Title title={title} />
        <Grid
          container
          width="100%"
          maxWidth="800px"
          margin="0 auto"
          marginBottom="2.4rem"
          minHeight="90vh"
          direction="column"
          flex="1"
        >
          {children}
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
