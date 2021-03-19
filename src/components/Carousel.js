import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Ok= () => {
  return(
   

    <div className="carousel-grid-container" style={styles.picStyle}>
      <div className="banner" style={styles.banner}>
        <h1 style={styles.banner}>Our best offers</h1>
      </div>
  
    <Grid style={styles.pics}>


    <Carousel autoPlay showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false} 
        transitionTime={1000} interval={5000}
        >
          <div>
            <h1>Norway</h1>
            <img alt="" src="https://s1.1zoom.me/b5053/673/Lofoten_Norway_Houses_Mountains_Reine_Night_Bay_521644_2560x1440.jpg" />

        </div>
      
     
    <div>
            <h1>Italy</h1>
            <img alt="" src="https://s1.1zoom.me/big0/530/Italy_Lake_Houses_Lake_Maggiore_Cannobio_602033_1280x701.jpg" />

    </div>
    <div>
            <h1>Germany</h1>
            <img alt="" src="https://s1.1zoom.me/big0/253/Germany_Houses_Quedlinburg_Street_Stairs_Night_602533_1280x720.jpg" />

    </div>
    <div>
            <h1>Netherlands</h1>
            <img alt="" src="https://s1.1zoom.me/big0/755/Netherlands_Amsterdam_Houses_Boats_Canal_Night_585376_1280x794.jpg" />

      </div>
    
  </Carousel>
     </Grid>
    </div>
  
);
}

const styles = {

  banner: {
    backgroundColor: 'black',
    color: 'whitesmoke',
    width: '100%'
  },

  pics: {
    
    width: '100%',
    height: '600px',
   
  },

  picStyle: {
    cursor: 'pointer',
    transition: '200ms',
    

    ':hover': {
      transform: 'scale(1.03)',
      backgroundColor: 'whitesmoke'
    }
  }
  
}

export default Radium(Ok)
