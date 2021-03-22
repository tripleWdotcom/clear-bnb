import React from 'react'
import Radium from 'radium'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup" style={styles.popup}>
      <div className="popup-inner" style={styles.popupInner}>
        <button className="close-btn"
          style={styles.closeBtn}
          onClick={() => props.setTrigger(false)}
        >close</button>
        { props.children }
      </div>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
       

  },

  popupInner: {
    position: 'relative',
    padding: '32px',
    width: '100%',
    maxWidth: '640px',
    backgroundColor: '#FFF',
    
    
  },

   closeBtn: {
    position: 'absolute',
    top: '16px',
     right: '16px',
     cursor: 'pointer'
    

  }

}
 
export default Radium(Popup);