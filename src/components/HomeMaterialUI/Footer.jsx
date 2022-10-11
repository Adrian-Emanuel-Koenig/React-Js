import {Box, Container, Grid, Link, Typography} from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormDialog from './Suscribe';

function Footer() {
    return (
        <Box
            sx={{
            flexGrow: 1,
            bgcolor: "rgba(0, 0, 0, 0.8)",
            color: "white"
        }}
            px={{
            xs: 3,
            sm: 10
        }}
            py={{
            xs: 3,
            sm: 10
        }} className="footerContainer">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box>
                        <Typography sx={{fontSize:"1.2rem"}}>Follow us</Typography>
                    </Box>
                    <Box >
                        <Link href='https://es-la.facebook.com/'><FacebookIcon sx={{fontSize:"2rem"}}/></Link>
                        <Link href='https://instagram.com/'><InstagramIcon sx={{fontSize:"2rem"}}/></Link>
                        <Link href='https://twitter.com/'><TwitterIcon sx={{fontSize:"2rem"}}/></Link>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box>
                        <FormDialog />
                    </Box>
                </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer