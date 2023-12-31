import { Grid, Typography } from "@mui/material";

export function BinaryTreeNode({ data, node, phaseNode }) {
  let background = "white";
  if (node === phaseNode) background = "yellow";

  let border = "none";
  if (data || data === 0) border = "1px solid red";
  return (
    <Grid>
      <Typography
        border={border}
        borderRadius="30px"
        width="1.3rem"
        sx={{
          background: background,
          boxShadow: phaseNode === node && "0 0 10px white",
        }}
      >
        {data}
      </Typography>
    </Grid>
  );
}
