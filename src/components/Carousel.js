import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Ok= () => {
  return(
      <Grid style={styles.pic1}>
    <Carousel autoPlay showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}>
    <div>
        <img alt="" src="https://image.shutterstock.com/shutterstock/photos/1702125637/display_1500/stock-photo-new-construction-homes-in-texas-built-in-1702125637.jpg" />

        </div>
      
    <div>
        <img alt="" src="https://image.shutterstock.com/shutterstock/photos/683283169/display_1500/stock-photo-big-modern-beautiful-house-683283169.jpg" />

    </div>
    <div>
        <img alt="" src="https://image.shutterstock.com/shutterstock/photos/1538417255/display_1500/stock-photo-exterior-view-of-modern-white-house-with-garage-decorated-with-wood-1538417255.jpg" />

    </div>
    <div>
        <img alt="" src="https://image.shutterstock.com/shutterstock/photos/1702012048/display_1500/stock-photo-real-estate-exterior-front-house-1702012048.jpg" />

      </div>
    
  </Carousel>
      </Grid>
  
);
}

const styles = {
  pic1: {
    width: '900px'
  },
}

export default Radium(Ok)
