import { useState, useEffect, useContext } from 'react'
import { HouseContext } from '../contexts/HouseContext'
import { useHistory } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const CityIconList = () => {
  const { fetchAllCities } = useContext(HouseContext)
  const [cities, setCities] = useState([])
  let history = useHistory();

  useEffect(() => {
    shuffleCities()
  }, [])

  async function shuffleCities() {
    const cities = await fetchAllCities(null)
    for (let i = cities.length - 1; i > 0; i--) {
      const city = Math.floor(Math.random() * i)
      const temp = cities[i]
      cities[i] = cities[city]
      cities[city] = temp
    }
    setCities([...cities.slice(0, 4)])
  }

  const goToResultList = (c, e) => {
    const eventObject = { value: c._id, label: c._id + ', ' + c.country }
    localStorage.setItem('selectedCity', JSON.stringify(eventObject))
    localStorage.setItem('selectedOption', JSON.stringify(eventObject))
    history.push("/home-results");
  }

  const randomBackground = (key) => {
    const colorArray = ['#FF874F',
      '#FFD966',
      '#A9D164',
      '#7DA9AD'];
    return colorArray[key];
  }

  return (
    <div>
      <h1>IM IN ICON LIST</h1>

      <Grid container spacing={3}>
        <Hidden smDown>
          {cities.map((c, key) => (
            <Grid item xs key={key}>
              
              <div style={styles.cityItemBig} key={key} onClick={(e) => goToResultList(c, e)}>{c._id}</div>
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </div>
  )
}

const styles = {
  cityItemBig: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: "#4158D0",
    backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    borderRadius: "10px",
    margin: '0 10px',
    cursor: "pointer",
    transition: "all ease-in-out 3s",
    ':hover': {
      transform: 'translate(scale(1.05))'
    }
  },

}


// < Hidden smUp>
//   <div className="smallList" style={styles} key="1">
//     {cities.slice(0, 3).map((c, key) => (
//       <div style={styles.cityItem} key={key} onClick={goToResultList}>{c._id}</div>
//     ))}
//   </div>
//     </Hidden >

export default Radium(CityIconList)