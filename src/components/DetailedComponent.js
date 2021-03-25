import { useContext, useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HouseContext } from '../contexts/HouseContext'
import tv from '../images/tv.png';
import parking from '../images/parking.png';
import smoking from '../images/smoking.png';
import gym from '../images/gym.png';
import animalFriendly from '../images/animalFriendly.png';
import wifi from '../images/wifi.png';
import breakfast from '../images/breakfast.png';
import kitchen from '../images/kitchen.png';
// import pool from '../images/pool.png';


function DetailedComponent(props) {
  const { housesByCityAndDate } = useContext(HouseContext)

  const [currentHouse, setCurrentHouse] = useState([])

  useEffect(() => {
    let houseObj = housesByCityAndDate.filter(h => h._id === props.houseId)
    setCurrentHouse(houseObj)
    console.log('house obj', houseObj)
  }, [])

  const features = (c, i) => (
    <div style={styles.iconForm} key={'a' + i}>

      <img src={c.name == 'tv' ? tv
        : c.name == 'wifi' ? wifi
          : c.name == 'parking' ? parking
            : c.name == 'smoking' ? smoking
              : c.name == 'gym' ? gym
                : c.name == 'animalFriendly' ? animalFriendly
                  : c.name == 'breakfast' ? breakfast
                    : c.name == 'kitchen' ? kitchen : ''} alt={c.name} style={styles.icons} key={'b' + i} />
    </div>
  )

  return (
    <div style={styles.outerDiv}>
      {currentHouse.length > 0 ? <h2 style={styles.title} key="1" >{currentHouse[0].slogan}</h2> : ''}
      {currentHouse.length > 0 ? <h3 style={styles.title} key="2" >{currentHouse[0].city}, {currentHouse[0].country}</h3> : ''}
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
      <h3 style={styles.title} key="3" >Amenities</h3>
      {currentHouse.length > 0 ? currentHouse[0].featureIds.map((c, i) => features(c, i)) : ''}

    </div>
  )
}

const styles = {
  outerDiv: {
    margin: '20px 0',
    
  },
  frame: {
    margin: '15px 30px',
  },
  title: {
    margin: '5px 30px',
    textAlign: 'left',
  },
  iconForm: {
    textAlign: 'left',
    margin: '0 30px'
  },
  icons: {
    width: '30px',
    height: 'auto',
    margin: '5px 0', 
  }

}

export default DetailedComponent;