import { Grid } from "@mui/material";
import { MainContainer } from "components/Common/MainContainer";
import { MainTypography } from "components/Common/MainTypography";
import { HomeButton } from "components/Misc/HomeButton";
import { href } from "misc/href";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);
  return (
    <MainContainer title="XPLAINED.FYI">
      <MainTypography>
        <p>Welcome!</p>
        <p>
          Here it is our goal to explain to you the building blocks of software
          development through descriptions, code snippets, and visualizations.
        </p>
        <p>
          We discuss the internals of data structures, we show their
          implementations, and we see how to utilize them effectively through a
          myriad of algorithms.
          <p>
            You can start your studies by selecting either the data structures
            or algorithms path below.
          </p>
        </p>
      </MainTypography>

      <Grid display="flex" flexDirection="column" textAlign="center">
        <HomeButton to={href.ds.home} text="DATA STRUCTURES" top />
        <HomeButton to={href.algo.home} text="ALGORITHMS" bottom />
      </Grid>
    </MainContainer>
  );
}
