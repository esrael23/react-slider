import Slider from "react-slick";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { ProductData } from "../Data";


const arrow = {
  color: 'black',
  fontSize:'50px',
  margin: '50px',
  // padding: '50px',
  "&:hover" : {
    color: 'grey'
  }
}
const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowCircleLeftIcon sx={arrow} />,
    nextArrow: <ArrowCircleRightIcon sx={arrow} />,
  };
  

  return (
    <Slider {...settings}>
      {/* Add your product items as slides here */}
      <div>
      {ProductData.map((item) => {
        return(
          <h1>{item.title}</h1>
        );

      })}
      </div>
      {/* ... */}
    </Slider>
  );
};
export default ProductCarousel;