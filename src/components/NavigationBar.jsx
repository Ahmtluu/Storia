import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NavigationBar() {

  const navigator = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{backgroundColor:"#301E67"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{navigator("/")}} >
          Fake Store
        </Typography>
       
      </Toolbar>
    </AppBar>
  </Box>
  );
}
