import { useState, useEffect, useContext } from 'react'
import { HouseContext} from '../contexts/HouseContext'
import { useHistory } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';

const CityIconList = () => {
  const { citiesAndCountriesNames} = useContext(HouseContext)
  const [cities, setCities] = useState([])
  let history = useHistory();

  useEffect(() => {
    shuffleCities()
  }, [citiesAndCountriesNames])

  function shuffleCities() {
    let cityAndCountry = citiesAndCountriesNames;
    for (let i = cityAndCountry.length - 1; i > 0; i--) {
      const city = Math.floor(Math.random() * i)
      const temp = cityAndCountry[i]
      cityAndCountry[i] = cityAndCountry[city]
      cityAndCountry[city] = temp
    }
    setCities([...cityAndCountry.slice(0, 4)])
  }

  const goToResultList = (c, e) => {
    const eventObject = { value: c._id, label: c._id + ', ' + c.country }
    localStorage.setItem('selectedCity', JSON.stringify(eventObject))
    localStorage.setItem('selectedOption', JSON.stringify(eventObject))
    history.push("/home-results");
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Hidden xsDown>
          {cities?.map((c, key) => (
            <Grid item xs key={key}>
              <div style={styles.cityItem} key={key} onClick={(e) => goToResultList(c, e)}><h3 style={styles.title}>{c._id}</h3></div>
            </Grid>
          ))}
        </Hidden>
      </Grid>
      <Grid container spacing={2}>
        <Hidden smUp>
          {cities?.slice(0, 3).map((c, key) => (
            <Grid item xs key={key}>
              <div style={styles.cityItem} key={key} onClick={(e) => goToResultList(c, e)}><h5 style={styles.title}>{c._id}</h5></div>
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </div>
  )
}

const styles = {
  cityItem: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: "#005751",
    backgroundImage: "linear-gradient(43deg, #005751 0%, #047361 46%, #66A395 100%)",
    borderRadius: "10px",
    margin: '0 10px',
    cursor: "pointer",
    boxShadow: "0px 8px 20px #222",
  },
  title: {
    color: '#66A395',
    textShadow: '0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)',
  },
}

export default Radium(CityIconList)