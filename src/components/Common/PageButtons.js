import { Button, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import { Link } from "react-router-dom";
import { PageButtonText } from "./PageButtonText";
import { href } from "misc/href";

export function PageButtons({
  backTitle,
  backTo,
  forwardTitle,
  forwardTo,
  isHome,
  algo,
}) {
  return (
    <Grid
      marginTop="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid>
        {backTitle && backTo && (
          <Link to={backTo}>
            <Button>
              <ArrowBackIosIcon />
              <PageButtonText text={backTitle} />
            </Button>
          </Link>
        )}
      </Grid>
      <Grid
        position="absolute"
        sx={{ transform: "translate(-50%, -5%)", left: "50%" }}
      >
        {!isHome && (
          <Link to={algo ? href.algo.home : href.ds.home}>
            <IconButton>
              <OtherHousesIcon />
            </IconButton>
          </Link>
        )}
      </Grid>
      {forwardTitle && forwardTo && (
        <Link to={forwardTo}>
          <Button>
            <PageButtonText text={forwardTitle} />
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      )}
    </Grid>
  );
}
