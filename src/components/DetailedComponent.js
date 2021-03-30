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
import contact from '../images/contact.png';
import email from '../images/email.png';
import checkIn from '../images/checkIn.png';
import checkOut from '../images/checkOut.png';


function DetailedComponent(props) {
  const { housesByCityAndDate } = useContext(HouseContext)

  const [currentHouse, setCurrentHouse] = useState([])

  useEffect(() => {
    console.log('props house id', props.houseId)
    console.log('props house obj', props.houseObj)
    console.log('props paths', props.path)
    if (props.path === 'results') {
      let houseObj = housesByCityAndDate.filter(h => h._id === props.houseId)
      setCurrentHouse(houseObj)
      console.log('from results current house', houseObj)
      console.log('Current house: result', currentHouse)
    } else {
      setCurrentHouse(props.houseObj)
      console.log('from bookings current house', props.houseObj)
      console.log('Current house: bookings', currentHouse)
    }
    
    
    
    
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
          <Hidden xsDown>
            <Carousel
              showArrows={true}
              showStatus={true}
              infiniteLoop={true}
              showThumbs={true}
              swipeable={true}
              emulateTouch={false}
              showIndicators={false}
              autoPlay={false}
              thumbWidth={100}
              dynamicHeight={true}
            >
              {currentHouse[0].pics.map((p, i)=> (<div><img src={p} key={i} /></div>))}
            </Carousel>
          </Hidden>
          <Hidden smUp>
            <Carousel
              showArrows={false}
              showStatus={true}
              infiniteLoop={true}
              showThumbs={false}
              swipeable={true}
              emulateTouch={true}
              showIndicators={false}
              autoPlay={false}
              dynamicHeight={false}
            >
              {currentHouse[0].pics.map(p => (<div><img src={p} /></div>))}
            </Carousel>
          </Hidden>
        </div>

        <Hidden xsDown>
        <h1 style={styles.title} key="1" >{currentHouse[0].slogan.charAt(0).toUpperCase() + currentHouse[0].slogan.slice(1)}</h1>
        <h3 style={styles.title} key="2" >{currentHouse[0].city}, {currentHouse[0].country}</h3>
        </Hidden>
        <Hidden smUp>
          <h1 style={styles.titleMobile} key="135" >{currentHouse[0].slogan}</h1>
          <h3 style={styles.titleMobile} key="136" >{currentHouse[0].city}, {currentHouse[0].country}</h3>
        </Hidden>

        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: 'grey', margin: '50px auto'
        }} key="3" />
        <div style={styles.desc} key="4">{currentHouse[0].description}</div>
        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: 'grey', margin: '50px auto'
        }} key="5" />
        <div style={styles.gridContainer}>
          <Grid container
            justify="space-between"
          >
            <Grid item sm={2}>
            </Grid>

            <Grid item xs={12} sm={6}>
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

              <div style={styles.iconForm} key="188">
                <img src={country} alt={currentHouse[0].country} style={styles.icons} key="91" />
                <p style={styles.iconText} key="80">{currentHouse[0].country}</p>
              </div >

              <div style={styles.iconForm} key="165">
                <img src={checkIn} alt="check-in" style={styles.icons} key="190" />
                <p style={styles.iconText} key="83">Check in: 15:00</p>
              </div >

              <div style={styles.iconForm} key="133">
                <img src={checkOut} alt="check-out" style={styles.icons} key="192" />
                <p style={styles.iconText} key="85">Check out: 12:00</p>
              </div >
              <div style={{marginBottom: '10px'}} key="164">
              </div >
            </Grid>
            <Grid item xs={11} sm>
              <h3 style={styles.title2} key="166" >Amenities</h3>
              <br />
              {currentHouse[0].featureIds.map((c, i) => features(c, i))}
            </Grid>

          </Grid>
        </div>

        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: 'grey', margin: '50px auto'
        }} key="7" />
        <Hidden xsDown>
        <h3 style={styles.title2} key="102" >Host</h3>
        <br />
        <div style={styles.iconForm2} key="117">
          <img src={contact} alt={contact} style={styles.icons} key="106" />
          <p style={styles.iconText} key="105">{currentHouse[0].userId.firstName} {currentHouse[0].userId.lastName}</p>
          <img src={email} alt={email} style={styles.icons} key="107" />
          <p style={styles.iconText} key="109">{currentHouse[0].userId.email}</p>
        </div>
        <hr style={{
          width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: 'grey', margin: '50px auto'
          }} key="177" />
        </Hidden>

        <Hidden smUp>
          <h3 style={styles.title2} key="141" >Host</h3>
          <br />
          <div style={styles.iconForm3} key="163">
            <img src={contact} alt={contact} style={styles.icons} key="152" />
            <p style={styles.iconText2} key="142">{currentHouse[0].userId.firstName} {currentHouse[0].userId.lastName}</p>
            <img src={email} alt={email} style={styles.icons} key="168" />
            <p style={styles.iconText2} key="143">{currentHouse[0].userId.email}</p>
          </div>
          <hr style={{
            width: '50vw', borderTop: '1px solid', borderRadius: '5px', color: 'grey', margin: '50px auto'
          }} key="145" />
        </Hidden>

      </>
        : ''}
    </div>
  )
}

const styles = {
  outerDiv: {
    margin: '10px 5px',
    alignItems: 'center'
  },
  frame: {
    margin: '15px 30px',
  },
  title: {
    margin: '10px 0 10px 30px',
    textAlign: 'center',
  },
  titleMobile: {
    margin: '0 0 10px 0',
    textAlign: 'center',
  },
  gridContainer: {
    textAlign: 'left',
  },
  iconForm: {
    display: 'flex',
    margin: '10px 0',
  },
  iconForm2: {
    display: 'flex',
    justifyContent: 'center'
  },
  iconText: {
    margin: '15px 20px 0',
  },
  iconForm3: {
    display: 'inline-block',
    justifyContent: 'center'
  },
  iconText2: {
    margin: '0 0 15px',
  },
  icons: {
    width: '30px',
    height: 'auto',
    margin: '5px 0',
  },
  desc: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 100px'
  }

}

export default DetailedComponent;