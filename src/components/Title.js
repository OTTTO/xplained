import { Typography } from "@mui/material";
import { TitleDivider } from "./TitleDivider";

export function Title({ title }) {
  return (
    <>
      <Typography variant="h1" textAlign="center" color="black">
        {title}
      </Typography>
      <TitleDivider />
    </>
  );
}
