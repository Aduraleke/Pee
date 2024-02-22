
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollection from '../Components/NewCollection';

const Carousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    };
  
    return (
      <Slider {...settings}>
        <div>
          <Popular />
        </div>
        <div>
          <Offers />
        </div>
        <div>
          <NewCollection />
        </div>
      </Slider>
    );
  };
  
  export default Carousel;
