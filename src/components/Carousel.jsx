import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hidden from '@material-ui/core/Hidden';
import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext, useState } from "react";
import zIndex from '@material-ui/core/styles/zIndex';
import { Backdrop } from '@material-ui/core';
import '../index.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export default function Ok() {




  const { offers } = useContext(HouseContext)
  console.table("offers", offers)

  const test = c => (
    <div style={{ background: 'whitesmoke' }}>

      <div key={c._id}>
        <img style={{
          width: '100%',
          maxHeight: '30vw'

          /*             borderRadius: '10px' */
        }}
          src={c.pics[0]}
          alt={'gkj'}
          key={c._id}
        ></img>

        <div style={{ position: 'absolute', top: '10%', left: '10%', textAlign: 'left' }}>


          <div style={{
            fontSize: '7vw',
            color: 'whitesmoke',
            fontWeight: '600'
          }}>{c.country}</div>
          {c.dateRanges.map(d => <div style={{ color: 'whitesmoke', fontSize: '2vw', fontWeight: 600 }} key={d.availableStart}>

            <div /* style={{WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:'black' }} */>
              From :{new Date(d.availableStart).toDateString()}

            </div>
            <div /* style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black' }} */>
              To: {new Date(d.availableEnd).toDateString()}

            </div>
            {/*        <button onClick>Book Now!</button> */}



          </div>)}
        </div>



        <Grid container
          container
          direction="row"
          justify="space-around"
          alignItems="center" style={{ height: '6vw' }}>
          <Grid item md={4} xs={4} style={styles.pcb}>
            <div>€{c.price}/Night</div>
          </Grid>
          <Grid item md={4} xs={4} style={styles.pcb}>
            {c.city}
          </Grid>
          <Grid item md={4} xs={4} style={styles.pcb}>
            {c.bedrooms} beds
            </Grid>
        </Grid>




      </div>


    </div>

  )

  const mobileTest = x => (
    <div >

      <div key={x._id}>
        <img style={{
          width: '99%',
          maxHeight: '60vw'



          /*             borderRadius: '10px' */
        }}
          src={x.pics[0]}
          alt={''}
          key={x._id}
        ></img>

        <div style={{ position: 'absolute', top: '10%', left: '10%', textAlign: 'left' }}>


          <div style={{
            fontSize: '11vw',
            color: 'whitesmoke',
            fontWeight: '600'
          }}>{x.country}</div>
          {x.dateRanges.map(d => <div style={{ color: 'whitesmoke', fontSize: '3vw', fontWeight: 600 }} key={d.availableStart}>

            <div /* style={{WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:'black' }} */>
              From :{new Date(d.availableStart).toDateString()}

            </div>
            <div /* style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black' }} */>
              To: {new Date(d.availableEnd).toDateString()}

            </div>



          </div>)}
        </div>



        <Grid container
          container
          direction="row"
          justify="space-around"
          alignItems="center" style={{ backgroundColor: 'whitesmoke', height: '25vw' }}>
          <Grid item xs={4} style={styles.pcbMobile}>
            <div>€{x.price}/Night</div>
          </Grid>
          <Grid item xs={4} style={styles.pcbMobile}>
            {x.city}
          </Grid>
          <Grid item xs={4} style={styles.pcbMobile}>
            {x.bedrooms} beds
            </Grid>
        </Grid>




      </div>


    </div>

  )


  return (

    <div className="carousel-grid-container">
      <div className="banner">

        <Hidden xsDown>
          <div style={styles.desktopBanner}>
            SPECIAL OFFERS
          <ArrowDownwardIcon style={styles.desktopArrow}></ArrowDownwardIcon>
          </div>
        </Hidden>

        <Hidden smUp>
          <div style={styles.mobileBanner}>
            SPECIAL OFFERS
          <ArrowDownwardIcon style={styles.mobileArrow}></ArrowDownwardIcon>
          </div>
        </Hidden>




      </div>

      <Hidden xsDown>
        <Carousel autoPlay showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}
          transitionTime={2000} interval={5000} dynamicHeight={false} width={'70vw'}
        >
          {offers.map(c => test(c))}

        </Carousel>
      </Hidden>

      <Hidden smUp>
        <Carousel autoPlay showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}
          transitionTime={2000} interval={7000} width={'100vw'} dynamicHeight={false}
        >
          {offers.map(x => mobileTest(x))}

        </Carousel>
      </Hidden>

    </div>


  );
}

const styles = {

  desktopBanner: {
    backgroundColor: 'teal',
    color: 'whitesmoke',
    textAlign: 'center',
    fontSize: '3vw',
    fontFamily: '"Caveat", cursive',
  },
  mobileBanner: {
    backgroundColor: 'teal',
    color: 'whitesmoke',
    textAlign: 'center',
    fontSize: '5vw',
    fontFamily: '"Caveat", cursive',
  },

  pcb: {
    backgroundColor: 'teal',
    border: '5px solid grey',
    fontSize: '3vw',
    fontFamily: 'fangsong',
    fontWeight: '600',
    fontStyle: 'oblique',
    color: 'antiquewhite',
    padding: '10px',
    border: 'solid grey 5px',
    fontSize: '3vw'
  },

  pcbMobile: {
    backgroundColor: 'teal',
    border: '5px solid grey',
    fontFamily: 'fangsong',
    fontWeight: '600',
    fontStyle: 'oblique',
    color: 'antiquewhite',
    padding: '40px 0px',
    border: 'solid grey 5px',
    fontSize: '6vw'
  },

  desktopArrow: {
    fontSize: '30px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  mobileArrow: {
    fontSize: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }




}


