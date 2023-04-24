// import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import {ProductData} from '../Data'
import Heroimg from '../478A7697.jpg'

const arrow = {
  color: 'black',
  fontSize:'50px',
  "&:hover" : {
    color: 'grey'
  }
}


const HeroSlider = () => {
  // constructor(props) {
  //   super(props);
  //   this.play = this.play.bind(this);
  //   this.pause = this.pause.bind(this);
  // }

  // play() {
  //   this.slider.slickPlay();
  // }
  // pause() {
  //   this.slider.slickPause();
  // }
  
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  //   nextArrow: <ArrowCircleRightIcon  sx={arrow}/>,
  //  prevArrow:  <ArrowCircleLeftIcon sx={arrow}/>,


  };
  return (
    <div>

          <Slider  {...settings}>

{/* <Grid container spacing={4}> */}

     {ProductData.map((pro, index) => {

     return       <Box sx={{height:'100vh', width: '100%', backgroundImage:  `url(${pro.image})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{display: 'flex',opacity:"0.5",
      
          background:'white', marginTop: '200px',
           justifyContent: 'center' ,  }} width={"100%"}>
          <Typography
           variant="h1"
            color="primary"
          sx={{opacity:"1"}}
            py={6}
            fontWeight={'bold'} fontSize= "100px" >IKIZ</Typography>
          {/* <Typography variant="h4" color="initial">Cartain</Typography> */}

        </Box>
      </Box>
         })}
         {/* </Grid> */}
      
      
      
      
      </Slider>
    </div>
  )
}

export default HeroSlider





