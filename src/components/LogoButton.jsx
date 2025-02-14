import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function LogoButton({ name, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        onClick={onClick}
        style={{
          color: "whitesmoke",
          border: "1px solid whitesmoke",
          fontSize: "clamp(10px, 1vw, 5000px)",
          borderRadius: "0",
          padding: "10px",
        }}
      >
        {name}
      </Button>
    </Stack>
  );
}
