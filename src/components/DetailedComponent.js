import { useContext, useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HouseContext } from '../contexts/HouseContext'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import tv from '../images/tv.png';
import parking from '../images/parking.png';
import smoking from '../images/smoking.png';
import gym from '../images/gym.png';
import animalFriendly from '../images/animalFriendly.png';
import wifi from '../images/wifi.png';
import breakfast from '../images/breakfast.png';
import kitchen from '../images/kitchen.png';
import pool from '../images/pool.png';
import adress from '../images/adress.png';
import beds from '../images/beds.png';
import city from '../images/city.png';
import country from '../images/country.png';
import price from '../images/price.png';


function DetailedComponent(props) {
  const { housesByCityAndDate } = useContext(HouseContext)

  const [currentHouse, setCurrentHouse] = useState([])

  useEffect(() => {
    let houseObj = housesByCityAndDate.filter(h => h._id === props.houseId)
    setCurrentHouse(houseObj)
    console.log('house obj', houseObj)
  }, [])

  const features = (c, i) => (
    <>
      <div style={styles.iconForm} key={'a' + i}>
        <img src={c.name == 'tv' ? tv
          : c.name == 'wifi' ? wifi
            : c.name == 'parking' ? parking
              : c.name == 'smoking' ? smoking
                : c.name == 'gym' ? gym
                  : c.name == 'animalFriendly' ? animalFriendly
                    : c.name == 'breakfast' ? breakfast
                      : c.name == 'kitchen' ? kitchen : c.name == 'pool' ? pool : ''} alt={c.name} style={styles.icons} key={'b' + i} />
        <p style={styles.iconText} key={'e' + i}>{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</p>
      </div>
    </>
  )


  return (

    <div style={styles.outerDiv}>
      {currentHouse.length > 0 ? <>
        <div style={styles.frame}>
          <Carousel
            style={{ padding: '0' }}
            showArrows={true}
            showStatus={true}
            infiniteLoop={true}
            showThumps={true}
            swipeable={true}
            emulateTouch={true}
            showIndicators={false}
            autoPlay={false}
            thumbWidth="200px"
            dynamicHeight={false}
            padding="0"
          >
            <div>
              <img src="https://24mveri4z43mt0212q67obp6-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/melbourne.jpg" />
            </div>
            <div>
              <img src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg" />
            </div>
            <div>
              <img src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg" />
            </div>
          </Carousel>
        </div>
        <h1 style={styles.title} key="1" >{currentHouse[0].slogan}</h1>
        <h3 style={styles.title} key="2" >{currentHouse[0].city}, {currentHouse[0].country}</h3>
        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: '#F2F2F2', margin: '50px auto'
        }} key="3" />
        <div style={styles.desc} key="4">{currentHouse[0].description}</div>
        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: '#F2F2F2', margin: '50px auto'
        }} key="5" />
        <div style={styles.gridContainer}>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="left"
          >
            <Grid item xs={2}>
            </Grid>

            <Grid item xs={6}>
              <h3 style={styles.title2} key="8">House details</h3>
              <br />

              <div style={styles.iconForm} key="100">
                <img src={beds} alt={currentHouse[0].beds} style={styles.icons} key="95" />
                <p style={styles.iconText} key="77">{currentHouse[0].bedrooms} beds</p>
              </div>

              <div style={styles.iconForm} key="99">
                <img src={price} alt={currentHouse[0].price} style={styles.icons} key="94" />
                <p style={styles.iconText} key="78">{currentHouse[0].price} € / night</p>
              </div>

              <div style={styles.iconForm} key="98">
                <img src={adress} alt={currentHouse[0].adress} style={styles.icons} key="93" />
                <p style={styles.iconText} key="81">{currentHouse[0].address}</p>
              </div>

              <div style={styles.iconForm} key="97">
                <img src={city} alt={currentHouse[0].city} style={styles.icons} key="92" />
                <p style={styles.iconText} key="79">{currentHouse[0].city}</p>
              </div>

              <div style={styles.iconForm} key="96">
                <img src={country} alt={currentHouse[0].country} style={styles.icons} key="91" />
                <p style={styles.iconText} key="80">{currentHouse[0].country}</p>
              </div >
            </Grid>

            <Grid item xs>
              <h3 style={styles.title2} key="6" >Amenities</h3>
              <br />
              {currentHouse[0].featureIds.map((c, i) => features(c, i))}
            </Grid>
      
          </Grid>
        </div>

        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: '#F2F2F2', margin: '50px auto'
        }} key="7" />

      </>
        : ''}
    </div>
  )
}

const styles = {
  outerDiv: {
    margin: '10px 0',
    alignItems: 'center'
  },
  frame: {
    margin: '15px 30px',
  },
  title: {
    margin: '10px 0 10px 30px',
    textAlign: 'center',
  },
  gridContainer: {
    textAlign: 'left',
  },
  iconForm: {
    display: 'flex',
    margin: '10px 0',
  },
  iconText: {
    textAlign: 'left',
    margin: '10px 20px 0',
  },
  icons: {
    width: '30px',
    height: 'auto',
    margin: '5px 0',
  }

}

export default DetailedComponent;