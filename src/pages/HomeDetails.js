import Media from 'react-media';

import '@brainhubeu/react-carousel/lib/style.css';
import Radium from 'radium'
import { Carousel } from "react-responsive-carousel";


const Popup = (props) => {

  

  return (props.trigger) ? (

    

    <div className="popup" style={styles.popup}>
    
   <Media query="(max-width: 599px)">
  
  {matches =>
            matches ? (

      <div className="popup-inner-mobile" style={styles.popupInnerMobile} >
        <button className="close-btn"
          style={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
          >close</button>

              <div className="mobileGallery">
                

              </div>


        { props.children }
      </div>
       ) : ( 
  <div className="popup-inner-computer" style={styles.popupInnerComputer} >
        <button className="close-btn"
          style={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
                >close</button>
                
                <div className="computerGallery" >
                  
                  <Carousel showArrows={true} onChange={true} onClickItem={true} onClickThumb={true}>

                    <div>
                      <img src="https://www.kontio.com/static/studio/pub/Models/Glass+House+talo+143/Glass+House+143.jpg?c=model_xl" 
                        style={styles.gallery}
                      />
                      <p className="house">House</p>
                    </div>
                    <div>
                      <img src="https://www.sheknows.com/wp-content/uploads/2018/12/grze9k17tibahlq3lvaf.jpeg" 
                        style={styles.gallery}
                      />
                      <p className="bathroom">Bathroom</p>
                    </div>
                    <div>
                      <img src="https://media.designcafe.com/wp-content/uploads/2019/12/20235309/luxury-modern-bathroom-for-your-home.jpg" 
                        style={styles.gallery}
                      />
                      <p className="toilet">Toilet</p>
                    </div>
                    <div>
                    </div>
                  </Carousel>

                </div>

        { props.children }
      </div>
        
            )
       }
           </Media>
    </div>
  ) : "";
}


const styles = {
  
  popup: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',     

  },

  popupInnerMobile: {
    position: 'relative',
    padding: '300px 0px 300px 0px',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    
  },

  popupInnerComputer: {
    position: 'relative',
    padding: '300px 0px 300px 0px',
   
    width: '65%',
   height: '50%',
    backgroundColor: '#FFF',
    overflow: 'scroll'
  },

   closeBtn: {
    position: 'absolute',
    top: '16px',
     right: '16px',
     cursor: 'pointer'
  },

  gallery: {
    width: 'auto',
    height: '500px',

  },

  mobileGallery: {
   width: 'auto',
    height: '250px',
    padding: '25px'
  },

  thumbnails: {
    width: 'auto',
    height: '100px',
    border: '2px solid #C0C0C0',
    padding: '5px',
    cursor: 'pointer',
    boxShadow: '0 0 6px 2px rgb(22, 22, 22)',
    margin: '5px'
    
  }

}

export default Radium(Popup);