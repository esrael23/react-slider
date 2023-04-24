// import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import {ProductData} from '../Data'

const arrow = {
  color: 'black',
  fontSize:'50px',
  margin: '50px',
  // padding: '50px',
  "&:hover" : {
    color: 'grey'
  }
}



const Productslider = () => {

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow:  <ArrowCircleLeftIcon sx={arrow}/>,
    nextArrow: <ArrowCircleRightIcon  sx={arrow}/>,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  };

  return (
    <div>
    
    <Slider {...settings}>

{/* <Grid container spacing={4}> */}

     {ProductData.map((pro, index) => {
       return (
         // <Grid item xs="12" sm="6" md="6" lg="3" >
           <Container maxWidth="lg">         
            <Card sx={{ maxWidth: 345, margin: '30px' }}  elevation="0.2" href='/work'>
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="200"
                 image={pro.image}
                 alt="pruducts"
               />
               <CardContent >
                 <Typography gutterBottom variant="h5" component="div" paddint="10px">
                   {pro.title}
                 </Typography>
                 <CardActions>
                   <Button size="small" color="primary" href='/work'>
                     see more
                   </Button>
                 </CardActions>
               </CardContent>
             </CardActionArea>
           </Card>
           </Container>

         // {/* </Grid> */}
       )
     })}
   {/* </Grid> */}




</Slider>
      

    </div>
  )
}

export default Productslider