import { Grid } from "@mui/material";
import { BinaryTreeChildren } from "./BinaryTreeChildren";
import { BinaryTreeNode } from "./BinaryTreeNode";

export function BinaryTreeRow({ nodes, height, phaseNode }) {
  const getRow = () => {
    let start = 0;
    for (let i = 0; i < height; i++) {
      start += Math.pow(2, i);
    }
    const numNodes = Math.pow(2, height);
    const end = start + numNodes;
    const rowSlice = nodes.slice(start, end);
    const row = [];
    for (let i = 0; i < numNodes; i += 2) {
      const node = { left: undefined, right: undefined };
      if (i < rowSlice.length) node.left = rowSlice[i];
      if (i + 1 < rowSlice.length) node.right = rowSlice[i + 1];
      row.push(node);
    }
    return row;
  };
  let gap = "1rem";
  if (height === 1) gap = "6rem";
  if (height === 2) gap = "3rem";
  return (
    <Grid
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={gap}
      marginTop=".5rem"
    >
      <>
        {height === 0 ? (
          <BinaryTreeNode data={nodes[0]} node={0} phaseNode={phaseNode} />
        ) : (
          getRow().map((el, i) => (
            <BinaryTreeChildren
              left={el.left}
              right={el.right}
              height={height}
              group={i}
              phaseNode={phaseNode}
            />
          ))
        )}
      </>
    </Grid>
  );
}
