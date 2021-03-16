 import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';


const MyCarousel = () => (
<Carousel
  plugins={[
    
    'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 2,
      },
    },
    {
      resolve: slidesToScrollPlugin,
      options: {
        numberOfSlides: 2,
      },
    },
  ]}
>
  
    <img src="https://cdn.vox-cdn.com/thumbor/_06Ha2tlHC0oyXJJtNOkJMr-hPs=/0x0:1400x897/1200x800/filters:focal(588x336:812x560)/cdn.vox-cdn.com/uploads/chorus_image/image/65893255/small_storage_xl.0.jpg" />

   
 
    

    
    

</Carousel>
);

export default MyCarousel;