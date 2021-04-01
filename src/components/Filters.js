
import React, { useEffect, useState } from "react";
import BedSlider from './BedsRangeFilter';
import PriceSlider from './PriceRangeFilter';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import parking from '../images/parking.png';
import smoking from '../images/nosmoking.png';
import gym from '../images/gym.png';
import tv from '../images/tv.png';
import animalFriendly from '../images/animalFriendly.png';
import wifi from '../images/wifi.png';
import breakfast from '../images/breakfast.png';
import kitchen from '../images/kitchen.png';
import pool from '../images/pool.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useHistory } from "react-router-dom";
import Radium from 'radium'

function Filters() {
  let history = useHistory();

  const renFilters = async () => {
    history.push("/home-results");
  }


  const [state, setState] = useState({
    tv: false,
    wifi: false,
    breakfast: false,
    gym: false,
    kitchen: false,
    smoking: false,
    animalFriendly: false,
    pool: false,
    parking: false
  });

  const [reset, setReset] = useState(false)

  const clearFilters = () => {
    setState({
      tv: false,
      wifi: false,
      breakfast: false,
      gym: false,
      kitchen: false,
      smoking: false,
      animalFriendly: false,
      pool: false,
      parking: false
    });
    setReset(!reset)
    localStorage.removeItem('bedsNumberMin')
    localStorage.removeItem('bedsNumberMax')
    localStorage.removeItem('priceMax')
    localStorage.removeItem('priceMin')

  }


  useEffect(() => {
    localStorage.setItem('features', JSON.stringify(state))
      renFilters()
  }, [state])

  const handleChange = async (event) => {

    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <div className={'sliderContainer'} style={styles.sliderContainer}>
        <br /><br />
        <PriceSlider clear={reset} />
        <br />
        <BedSlider clear={reset} />
      </div>




      <FormControl component="fieldset" style={styles.sliderContainer}>
         <FormGroup>
          <div style={{ display: 'inline-flex' }}><img alt="" src={gym} style={styles.icon} /><FormControlLabel
            control={<Switch color='primary' checked={state.gym} onChange={handleChange} name="gym" />}
            label="Gym"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={tv} style={styles.icon} /> <FormControlLabel
            control={<Switch color='primary' checked={state.tv} onChange={handleChange} name="tv" />}
            label="TV"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={wifi} style={styles.icon}/>   <FormControlLabel
            control={<Switch color='primary' checked={state.wifi} onChange={handleChange} name="wifi" />}
            label="Wi-Fi"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={breakfast} style={styles.icon} /> <FormControlLabel
            control={<Switch color='primary' checked={state.breakfast} onChange={handleChange} name="breakfast" />}
            label="Breakfast"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={kitchen} style={styles.icon}/> <FormControlLabel
            control={<Switch color='primary' checked={state.kitchen} onChange={handleChange} name="kitchen" />}
            label="Kitchen"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={smoking} style={styles.icon}/>  <FormControlLabel
            control={<Switch color='primary' checked={state.smoking} onChange={handleChange} name="smoking" />}
            label="No Smoking"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={animalFriendly} style={styles.icon} /> <FormControlLabel
            control={<Switch color='primary' checked={state.animalFriendly} onChange={handleChange} name="animalFriendly" />}
            label="Animal Friendly"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={pool} style={styles.icon} />  <FormControlLabel
            control={<Switch color='primary' checked={state.pool} onChange={handleChange} name="pool" />}
            label="Pool"
          /></div>
          <div style={{ display: 'flex' }}><img alt="" src={parking} style={styles.icon} /><FormControlLabel
            control={<Switch color='primary' checked={state.parking} onChange={handleChange} name="parking" />}
            label="Parking"
          /></div>
        </FormGroup>
 
      </FormControl>
      <br />
      <div style={{ textAlign: 'right' }}>
        <button style={{
          color: 'white',
          cursor: 'pointer',
          padding: '10px 15px', borderRadius: '10px',
          border: 'none', backgroundColor: '#005751',
          outline: 'none',
          transition: 'all 500ms ease-in-out',
          ':hover': {
            backgroundColor: '#047361',
            transform: 'scale(1.05)'
        } }} onClick={clearFilters} > Clear</button>

      </div>
    </div>
  )
}

const styles = {
  sliderContainer: {
    backgroundColor: 'white',
    width: '100%'
  },
  icon: {
    marginLeft:'10px',
    marginRight: '40px',
    marginTop:"8px",

    width: '20px',
    height: '20px'
  }
}

export default Radium(Filters)