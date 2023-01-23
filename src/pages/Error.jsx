import React from "react";
import { Box, Typography } from "@mui/material";
import Error404 from "../assets/images/errorIllustration.svg";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        maxWidth="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Error404} alt="" width={500} height={350} />
      </Box>
      <Typography variant="h5" align="center">
        The page you’re looking for doesn’t exist.
      </Typography>
    </Box>
  );
}
