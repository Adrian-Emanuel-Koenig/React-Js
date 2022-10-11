import React from 'react'
import CarouselMarketing from './CarouselMUI'
import MediaCard from "./Cards";
import Footer from './Footer';
import {Box} from '@mui/material';

function HomeMUI() {
    return (
        <Box>
            <CarouselMarketing/>
            <MediaCard/>
            <Footer/>
        </Box>
    )
}

export default HomeMUI