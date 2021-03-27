
import { useEffect, useState } from 'react';
import DetailedComponent from '../components/DetailedComponent'
import Radium from 'radium'



function DetailedPage(props) {

  useEffect(() => {
    console.log('props start date', new Date(parseInt(props.startDate)).toString())
    console.log('props end date', new Date(parseInt(props.endDate)).toString())
  }, [])



  return (

    <div className="popup" style={styles.popup}>

      <div style={styles.popupInnerComputer}>
        <button style={styles.closeBtn} onClick={() => props.closeModal()}>Close</button>
        <DetailedComponent houseId={props.houseId} />
        <div style={styles.dates}>
          <h3>Chosen dates</h3>
          <br />
        <p>{new Date(parseInt(props.startDate)).toLocaleString().substr(0, 11)} - {new Date(parseInt(props.endDate)).toLocaleString().substr(0, 11)}</p>
        <button style={styles.bookBtn}>Book</button>
        </div>
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
    backgroundColor: 'whitesmoke',
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
  dates: {
    margin: '10px'
  },
  bookBtn: {
    backgroundColor: 'crimson',
    margin: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 500ms ease-in-out',
    ':hover': {
      backgroundColor: '#F0524F',
      transform: 'scale(1.05)'
    }
  },
  closeBtn: {
    margin: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
    outline: 'none',
  }

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

export default Radium(DetailedPage);