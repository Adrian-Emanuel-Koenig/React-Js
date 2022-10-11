import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import './cards.css'

export default function MediaCard() {
    const navigate = useNavigate()

    return ( 
    <Box sx={{flexGrow: 1}} className="cardContainer">
        <Typography variant='h3' color="primary">SHOP BY CATEGORY</Typography>

        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card sx={{
                    maxWidth: 345,
                    background: "black",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid grey"
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.ctfassets.net/m8onsx4mm13s/74ngSZJYUqWCDvLLidBuxu/cab9d11d0961976676af9b573f8fffaa/modCollection_home_promo.jpg"
                        alt="electric guitar"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Electric Guitar
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' onClick={()=>{navigate('/category/guitar')}}>Shop now</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{
                    maxWidth: 345,
                    background: "black",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid grey"
                    
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZyRd-rwcDQqIIwhn-1_2c5DMbPYHSqYTCw&usqp=CAU"
                        alt="electric bass"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Electric Bass
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' onClick={()=>{navigate('/category/bass')}}>Shop now</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{
                    maxWidth: 345,
                    background: "black",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid grey"
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.ctfassets.net/m8onsx4mm13s/6eMAZPtmCAfvgliNTy27ue/1bc8549ae1a4fda2a2368656d8bdeeb8/G-Bird_Homepage_33Module.jpg"
                        alt="acoustic"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Acoustic
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' onClick={()=>{navigate('/category/acoustic')}}>Shop now</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Box> 
  );
}