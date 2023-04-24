import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import {ProductData} from './Data'
import Productslider from './componens/Productslider';
import HeroSlider from './componens/HeroSlider';
import SliderCard from './componens/SliderCard';
import SliderComponent from './componens/MuiSlider';
import ProductSlider from './componens/MuiSlider';
import ProductCarousel from './componens/caro';
import ProductRow from './componens/MuiSlider';

const arrow = {
  color: 'black',
  fontSize:'50px',
  "&:hover" : {
    color: 'grey'
  }
}

function App() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ArrowCircleRightIcon  sx={arrow}/>,
   prevArrow:  <ArrowCircleLeftIcon sx={arrow}/>,
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


  const data = [
    {
      image: 'https://picsum.photos/800/600?random=1',
      alt: 'Slide 1',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://picsum.photos/800/600?random=2',
      alt: 'Slide 2',
      caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'https://picsum.photos/800/600?random=3',
      alt: 'Slide 3',
      caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    // <Container maxWidth= 'xl'>
    <div className="App">
       {/* <Slider {...settings}> */}

       {/* <Grid container spacing={4}> */}
       
            {/* {ProductData.map((pro, index) => {
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
                  </Container> */}

                 {/* </Grid> */}
              {/* ) */}
            {/* })} */}
          {/* </Grid> */}



     
    {/* </Slider> */}

    <HeroSlider/>
    <Productslider/>
    {/* <SliderCard data={data} /> */}
    {/* <SliderComponent/> */}
    {/* <ProductSlider/> */}
    {/* <ProductCarousel/> */}
    <ProductRow/>

</div>
    // </Container>
  );
}

export default App;
