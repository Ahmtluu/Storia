import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Box } from '@mui/material';
import Image from "mui-image";

export default function ProductCard({ product }) {
  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight:300 }}>
      <CardActionArea>
      <Box
            sx={{
              height: 250,
              width: 350,
            }}
          >
            <Image src={product.image} fit="contain" duration="0" />
          </Box>
        
        <CardContent>
          <Typography noWrap variant="h5" component="div">
          {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </>
  );
}
