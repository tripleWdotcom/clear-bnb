import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hidden from '@material-ui/core/Hidden';
import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext, useState } from "react";
import zIndex from '@material-ui/core/styles/zIndex';
import { Backdrop } from '@material-ui/core';

export default function Ok() {




  const { offers, fetchOffers } = useContext(HouseContext)
  console.table("offers", offers)

  const test = c => (
    <div style={{ background: 'whitesmoke' }}>



      <div key={c._id}>
        <img style={{
          width: '95%',
          maxHeight: '35vw'


          /*             borderRadius: '10px' */
        }}
          src={c.pics[0]}
          alt={'picture '}
        ></img>

        <div style={{ position: 'absolute', top: '10%', left: '10%', textAlign: 'left' }}>


          <div style={{
            fontSize: '7vw',
            color: 'whitesmoke',
            fontWeight: '600'
          }}>{c.country}</div>
          {c.dateRanges.map(d => <div style={{ color: 'whitesmoke', fontSize: '2vw', fontWeight:600 }} key={d.availableStart}>

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
          alignItems="center" md={12} style={{ backgroundColor: 'whitesmoke', height: '6vw', position: 'absolute', bottom: '0px' }}>
          <Grid item item md={4} xs={4} style={styles.pcb}>
            <div>€{c.price}/Night</div>
          </Grid>
          <Grid item md={4} xs={4} style={styles.pcb}>
            {c.city}
          </Grid>
          <Grid item item md={4} xs={4} style={styles.pcb}>
            {c.bedrooms} beds
            </Grid>
        </Grid>




      </div>


    </div>

  )


  return (

    <div className="carousel-grid-container">
      <div className="banner">
        <div style={styles.banner}>SPECIAL OFFERS</div>
      </div>

      <Hidden>
        <Carousel autoPlay showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}
          transitionTime={2000} interval={5000} dynamicHeight={false} width={'100%'}
        >
          {offers.map(c => test(c))}

        </Carousel>
      </Hidden>

      {/*   <Hidden smUp>
        <Carousel autoPlay showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}
          transitionTime={2000} interval={7000} width={'100vw'} dynamicHeight={false}
        >
          {offers.map(c => test(c))}

        </Carousel>
      </Hidden>
 */}
    </div>


  );
}

const styles = {

  banner: {
    backgroundColor: 'teal',
    color: 'black',
    textAlign: 'center',
    fontSize: '2vw'

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
  }

}


