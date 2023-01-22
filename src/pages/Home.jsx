import React from "react";
import { useFetchProductsQuery } from "../features/products/product-api-slice";
import { Container,Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { data = [], isFetching } = useFetchProductsQuery();

  return (
    <>{
      isFetching ? <p>Loading</p>: <Container>
      <Grid container spacing={2} mt={10}>
        {data.map((product, key) => (
          <Grid item xs={4}>
            <ProductCard key={key} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
    }
     
    </>
  );
}
