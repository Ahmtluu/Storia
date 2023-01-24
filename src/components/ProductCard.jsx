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
        <Card sx={{ maxWidth: 350, minHeight: 300 }} variant="outlined">
          <CardActionArea>
            <Box
              sx={{
                height: 275,
                width: 325,
                marginTop:"8px"
              }}
            >
              <Image src={product.image} fit="contain" duration={325} />
            </Box>

            <CardContent>
              <Typography noWrap variant="h5" component="div" align="center" color="#301e67">
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
