import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Error404 from "../assets/images/errorIllustration.svg";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
          </Grid>
          <Grid xs={6} backgroundColor="red">
            <img src={Error404} alt="" width={500} height={350} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
