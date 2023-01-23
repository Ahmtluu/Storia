import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProductQuery } from "../features/products/product-api-slice";
import Error from "../pages/Error";
import { Grid, Paper, Box, Typography, Rating, Container } from "@mui/material";
import Image from "mui-image";
import ClipLoader from "react-spinners/ClipLoader";

export default function Product() {
  const { productId, product } = useParams();
  const {
    data = [],
    isFetching,
    isError,
    isSuccess,
  } = useFetchProductQuery(productId);

  function capitalizeCategory(categor) {
    return categor[0].toUpperCase() + categor.slice(1);
  }

  return isFetching ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={9}
      height="100vh"
    >
      <ClipLoader color="#301e67" loading={isFetching} size={150} />
    </Box>
  ) : data ? (
    <Box sx={{ flexGrow: 1, marginTop: 9 }}>
      <Grid container spacing={0}>
        <Grid
          container
          item
          md={4}
          justifyContent="center"
          alignItems="center"
          height="75vh"
        >
          <Box
            sx={{
              height: 350,
              width: 350,
            }}
          >
            <Image src={data.image} fit="contain" duration={175} />
          </Box>
        </Grid>
        <Grid container item md={8} display="flex" alignItems="center">
          <Container>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="h6">
              {capitalizeCategory(data.category)}
            </Typography>
            <Grid container>
              <Grid item md={6}>
                {" "}
                <Typography variant="h3" mt={2} style={{ color: "#301E67" }}>
                  ${data.price}
                </Typography>
              </Grid>
              <Grid
                container
                item
                md={6}
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

                <Grid container justifyContent="flex-end">
                  <Typography variant="subtitle1" color="common.grey">
                    {data.rating.count} Rate
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography mt={2} variant="body1">
              {data.description}
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Error />
  );
}
