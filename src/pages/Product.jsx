import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProductQuery } from "../features/products/product-api-slice";
import Error from "../pages/Error";
import { Grid, Paper, Box, Typography, Rating, Container } from "@mui/material";
import Image from "mui-image";


export default function Product() {
  const { productId } = useParams();
  const { data = [], isFetching } = useFetchProductQuery(productId);

  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={0} direction="row" justifyContent="center">
        <Grid container md={4} justifyContent="center" alignItems="center" height="75vh">
          <Box
            sx={{
              height: 350,
              width: 350,
            }}
          >
            <Image src={data.image} fit="contain" duration="0" />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Container >
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="h6">{data.category}</Typography>

            <Grid container >
              <Grid item md={6}>
                {" "}
                <Typography variant="h3" mt={2} style={{ color: "#301E67"}}>
                  ${data.price}
                </Typography>
              </Grid>
              <Grid
                container
                md={6}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="subtitle1">
                    {data.rating.rate}
                  </Typography>
                </Grid>
                <Grid item>
                  <Rating name="read-only" value={data.rating.rate} readOnly />
                </Grid>

                <Grid container direction="col" justifyContent="flex-end">
                  <Typography variant="subtitle1" color="common.grey">
                    {data.rating.count} Rate
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography mt={2} variant="body1" >{data.description}</Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
