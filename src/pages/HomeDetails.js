import Media from 'react-media';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
        { props.children }
      </div>
       ) : ( 
  <div className="popup-inner-computer" style={styles.popupInnerComputer} >
        <button className="close-btn"
          style={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
                >close</button>
                
                <div className="gallery" >

                  <Carousel>
                    <img style={styles.gallery} src="https://markstewart.com/wp-content/uploads/2020/04/MARK-STEWART-SKINNY-MODERN-HOUSE-PLAN-MM-1251-FRONT--scaled.jpg" />
                    <img style={styles.gallery} src="https://www.kontio.com/static/studio/pub/Models/Glass+House+talo+143/Glass+House+143.jpg?c=model_xl" />


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
   
  }

}
 
export default Popup;