import { Button, Typography } from "@mui/material";

export function OperationButton({ onClick, disabled, textDecoration, text }) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <Typography
        fontWeight="bold"
        sx={{ textDecoration, textTransform: "none", fontSize: "17px" }}
      >
        {text}
      </Typography>
    </Button>
  );
}
