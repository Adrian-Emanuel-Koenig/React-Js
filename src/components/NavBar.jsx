import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: "#b806ff34"}}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1}}>
            Musician
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            Home
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            Products
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            About us
          </Typography>
          <Button color="inherit"><CartWidget /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};