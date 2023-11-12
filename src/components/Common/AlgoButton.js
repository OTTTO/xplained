import { Button, Grid } from "@mui/material";

export function AlgoButton({ onClick, text, disabled }) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <Grid
        border="3px solid white"
        padding=".5rem 1rem"
        sx={{
          backgroundColor: !disabled ? "black" : "grey",
          color: !disabled ? "yellow" : "black",
          opacity: disabled && "0.7",
          borderStyle: "double",
          "&:hover": {
            color: !disabled ? "white" : "black",
            borderColor: !disabled ? "orange" : "black",
          },
        }}
      >
        {text}
      </Grid>
    </Button>
  );
}
