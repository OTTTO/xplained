import { Typography } from "@mui/material";

export function AlgoProblem({ children }) {
  return (
    <Typography backgroundColor="#d3d3d3" padding="1rem" marginTop="1rem">
      {children}
    </Typography>
  );
}
