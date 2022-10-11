import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import { Button } from '@mui/material';

export default function ButtonAppBar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: "black"}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 2}} onClick={()=>{navigate("/")}}>
            Musician
          </Typography>
          <Typography variant="h5" sx={{ flexGrow: 1}} onClick={()=>{navigate("/")}}>
            Home
          </Typography>
          <Typography variant="h5" sx={{ flexGrow: 1}} onClick={()=>{navigate("/products")}}>
            Products
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}} onClick={()=>{navigate("/category/guitar")}}>
            Electric Guitar
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}} onClick={()=>{navigate("/category/bass")}}>
            Electric Bass
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1}} onClick={()=>{navigate("/category/acoustic")}}>
            Acoustic Guitar
          </Typography>
          <Button color="inherit" onClick={()=>{navigate("/cart")}}><CartWidget /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};