import Media from 'react-media';


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
   
    width: '50%',
   height: '50%',
    backgroundColor: '#FFF',
  },

   closeBtn: {
    position: 'absolute',
    top: '16px',
     right: '16px',
     cursor: 'pointer'
    

  }

}
 
export default Popup;