import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Image from "mui-image";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345, minHeight: 300 }}>
          <CardActionArea>
            <Box
              sx={{
                height: 250,
                width: 350,
              }}
            >
              <Image src={product.image} fit="contain" duration={325} />
            </Box>

            <CardContent>
              <Typography noWrap variant="h5" component="div" color="#301e67">
                {product.title}
              </Typography>
              <Typography variant="h5" align="center" color="#FF6000">
                ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
