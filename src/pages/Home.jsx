import React from "react";
import { useFetchAllProductsQuery } from "../features/products/product-api-slice";
import { Container, Grid, Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Image from "mui-image";
import ClipLoader from "react-spinners/ClipLoader";
import homeImage from "../assets/images/homeImage.svg";

export default function HomePage() {
  /*const limit = 6;*/
  const { data = [], isFetching, isLoading } = useFetchAllProductsQuery();

  return (
    <>
      <Box height={400} mt={9} display="flex">
        <Grid container direction="row" height="inherit">
          <Grid
            container
            item
            md={7}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography variant="h2" align="center">
                STORIA
              </Typography>
              <Typography variant="subtitle1" align="center">
                React Redux Toolkit, RTK Query, React Router and Material UI
                Example
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            item
            md={5}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={homeImage}
              sx={{
                maxHeight: { xs: 250, md: 300, lg: 350 },
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box mt={4} mb={2}>
          <Typography variant="h5" color="#301e67">
            All Products
          </Typography>
        </Box>
      </Container>
      {isFetching ? (
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <ClipLoader color="#301e67" loading={isLoading} size={150} />
        </Box>
      ) : (
        <Container>
          <Grid container spacing={2}>
            {data.map((product, key) => (
              <Grid item md={4} lg={4} key={key}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
