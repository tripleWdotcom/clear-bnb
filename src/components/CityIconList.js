import { useState, useEffect, useContext } from 'react'
import { HouseContext } from '../contexts/HouseContext'
import Hidden from '@material-ui/core/Hidden';
import Radium from 'radium'
import { useHistory } from "react-router-dom"; 

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
    setCities([...cities.slice(0, 5)])
  }

  const goToResultList = (c, e) => {
    const eventObject = { value: c._id, label: c._id + ', ' + c.country }
    localStorage.setItem('selectedCity', JSON.stringify(eventObject))
    localStorage.setItem('selectedOption', JSON.stringify(eventObject))
    history.push("/home-results");
  }

  return (
    <div>
      <h1>IM IN ICON LIST</h1>
      <Hidden smDown>
        <div className="bigList" style={styles} key="1">
          {cities.map((c, key) => (
            <h3 style={styles.cityItem} key={key + 3} onClick={(e) => goToResultList(c, e)} id={c._id}>{c._id}</h3>
          ))}
        </div>
      </Hidden>
      <Hidden smUp>
        <div className="smallList" style={styles} key="1">
          {cities.slice(0, 3).map((c, key) => (
            <h3 style={styles.cityItem} key={key} onClick={goToResultList}>{c._id}</h3>
          ))}
        </div>
      </Hidden>
    </div>
  )
}

const styles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'stretch',
  textAlign: 'center',
  height: '50px',
  cityItem: {
    borderLine: 'solid #000000 2px',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '10px',
    flexGrow: '1',
    cursor: 'pointer',
    margin: '0 2px',
    ':hover': {
      scale: '1.05'
    }
  }
}

export default Radium(CityIconList)