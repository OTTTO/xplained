import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function HomeButton({ to, text, top, bottom }) {
  return (
    <Link to={to}>
      <Button>
        <Typography fontSize="1.5rem" fontWeight="light">
          <Grid
            border="3px solid goldenrod"
            padding=".5rem 1rem"
            marginTop={top && ".5rem"}
            marginBottom={bottom && ".5rem"}
            borderRadius="100px"
            sx={{
              backgroundColor: "black",
              color: "goldenrod",
              borderStyle: "double",
              "&:hover": {
                backgroundColor: "goldenrod",
                color: "black",
                borderColor: "blueviolet",
              },
            }}
          >
            {text}
          </Grid>
        </Typography>
      </Button>
    </Link>
  );
}
