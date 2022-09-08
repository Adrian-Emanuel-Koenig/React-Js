import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: "#b806ff34"}}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1}}>
            Musician
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            <NavLink to={'/'}>Home</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            <NavLink to={'/category/guitar'}>Guitars</NavLink>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            <NavLink to={'/category/bass'}>Bass</NavLink>
          </Typography>
          <Button color="inherit"><CartWidget /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};