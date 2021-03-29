
import React, { useEffect, useState } from "react";
import BedSlider from './BedsRangeFilter.jsx';
import PriceSlider from './PriceRangeFilter.jsx';
//import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import { useHistory } from "react-router-dom";

export default function Filters() {
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
    console.log("value of features is :", localStorage.getItem('features'))
    renFilters()
  }, [state])

  const handleChange = async (event) => {

    setState({ ...state, [event.target.name]: event.target.checked });

    console.log("value of switch is :", event.target.name, event.target.checked)

  };

  return (
    <div>
      <div className={'sliderContainer'} style={styles.sliderContainer}>
        <br /><br />
        <PriceSlider clear={reset} />
        <br /><br />     
        <BedSlider clear={reset} />
      </div>
  

      <FormControl component="fieldset" style={styles.sliderContainer}>
        {/*     <FormLabel component="legend" color="primary" >Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={<Switch color='primary' checked={state.gym} onChange={handleChange} name="gym" />}
            label="GYM"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.tv} onChange={handleChange} name="tv" />}
            label="TV"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.wifi} onChange={handleChange} name="wifi" />}
            label="Wi-Fi"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.breakfast} onChange={handleChange} name="breakfast" />}
            label="Breakfast"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.kitchen} onChange={handleChange} name="kitchen" />}
            label="Kitchen"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.smoking} onChange={handleChange} name="smoking" />}
            label="Smoking"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.animalFriendly} onChange={handleChange} name="animalFriendly" />}
            label="Animal Friendly"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.pool} onChange={handleChange} name="pool" />}
            label="Pool"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.parking} onChange={handleChange} name="parking" />}
            label="Parking"
          />
        </FormGroup>
        {/*  <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      <br />
      <div style={{ textAlign:'right'}}>
      <button onClick={clearFilters} > Clear</button>

      </div>


    </div>
  )

  
}

const styles = {
  sliderContainer: {
    backgroundColor: 'whitesmoke',
   
    
  }


}

