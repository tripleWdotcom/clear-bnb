import { useState, useEffect, useContext } from 'react'
import { HouseContext } from '../contexts/HouseContext'
import { useHistory } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';

const CityIconList = () => {
  const { citiesAndCountriesNames } = useContext(HouseContext)
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
      <Grid container spacing={1}>
        <Hidden xsDown>
          {cities?.map((c, key) => (
            <Grid item xs key={key + 'a'}>
              <div style={styles.cityItem} key={key + 'c'} onClick={(e) => goToResultList(c, e)}><h3 style={styles.title}>{c._id}</h3></div>
            </Grid>
          ))}
        </Hidden>
      </Grid>
      <Grid container spacing={1}>
        <Hidden smUp>
          {cities?.slice(0, 3).map((c, key) => (
            <Grid item xs key={key + 'b'}>
              <div style={styles.cityItem} key={key + 'd'} onClick={(e) => goToResultList(c, e)}><h5 style={styles.title}>{c._id}</h5></div>
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
    backgroundColor: "whitesmoke",
    backgroundImage: "linear-gradient(43deg, white 0%, whitesmoke 46%, whitesmoke 100%)",
    borderRadius: "10px",
    margin: '0 10px',
    cursor: "pointer",
    borderBottom: '1px solid grey',

    transition: 'all 300ms ease-in-out',
    ':hover': {
      boxShadow: "0px 8px 20px #222",
      transform: 'scale(1.05)'
    }

  },
  title: {
    color: '#8C8881',

    textShadow: '0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)',
  },
}

export default Radium(CityIconList)