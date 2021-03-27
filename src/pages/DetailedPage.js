
import { useEffect, useState } from 'react';
import DetailedComponent from '../components/DetailedComponent'


function DetailedPage(props) {
  


  return (

    <div className="popup" style={styles.popup}>

      <div style={styles.popupInnerComputer}>
        <button>Close</button>
        <DetailedComponent houseId={props.houseId}/>
        
      </div>


    </div>
  )
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
    zIndex: '10'

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
    // padding: '300px 0px 300px 0px',
    width: '70vw',
    height: '100vh',
    backgroundColor: '#FFF',
    overflow: 'scroll',

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

  // thumbnails: {
  //   width: 'auto',
  //   height: '100px',
  //   border: '2px solid #C0C0C0',
  //   padding: '5px',
  //   cursor: 'pointer',
  //   boxShadow: '0 0 6px 2px rgb(22, 22, 22)',
  //   margin: '5px'

  // }

}

export default DetailedPage;