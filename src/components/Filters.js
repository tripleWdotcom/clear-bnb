
import React, { useState } from "react";
import BedSlider from './BedsRangeFilter';
import PriceSlider from './PriceRangeFilter';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import { useHistory } from "react-router-dom";



export default function Filters(){
  let history = useHistory();



  const [valueBeds, setValueBeds] = useState(1)

  const renFilters = async () => {
    history.push("/home-results");
  }

  const [boxes, setBoxes] = useState({
    
    tv: false,
    wifi: false,
    breakfast: false,
    gym: false,
    kitchen: false,
    smoking: false,
    animalF: false,
    pool: false,
    parking: false
  })
  function handleBoxes(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setBoxes({ ...boxes, [e.target.name]: value });
    console.log("value is :", e.target.name, value)
   
  }


  const [state, setState] =useState({
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
   
    console.log("value of switch is :", event.target.name,event.target.checked)
    localStorage.setItem('features', JSON.stringify(state))
    console.log("value of features is :", localStorage.getItem('features'))
    renFilters()

  };




  return (
    <div>
    
      <hr/>
    {/*   <div style={slidecontainer}> */}
        <div>
          <PriceSlider />
          <BedSlider />
        {/*   <p>number of beds?</p>
          <input type="range"  min="1" max="5" value={valueBeds}
            onChange={({ target: { value: x } }) => {
              setValueBeds(x);
              localStorage.setItem('bedsNumber',x)
              console.log("this is beds",x)
            }}
          />
          <div >
            {valueBeds}
          </div> */}
        </div>
   {/*    </div> */}
      <hr />

   {/*    <form style={{ textAlign: "left" }}>
        <input
          type="checkbox"
          name="wifi"
          checked={boxes.wifi}
          onChange={handleBoxes}
        /> <label>Wifi</label><br></br>
        <input
          type="checkbox"
          name="tv"
          checked={boxes.tv}
          onChange={handleBoxes}
        /> <label>TV</label><br></br>
        <input
          type="checkbox"
          name="breakfast"
          checked={boxes.breakfast}
          onChange={handleBoxes}
        /> <label>Breakfast</label><br></br>
        <input
          type="checkbox"
          name="gym"
          checked={boxes.gym}
          onChange={handleBoxes}
        /><label>Gym</label><br></br>
        <input
          type="checkbox"
          name="kitchen"
          checked={boxes.kitchen}
          onChange={handleBoxes}
        /><label>Kitchen</label><br></br>
        <input
          type="checkbox"
          name="smoking"
          checked={boxes.smoking}
          onChange={handleBoxes}
        /><label>Smoking</label><br></br>
        <input
          type="checkbox"
          name="animalF"
          checked={boxes.animalF}
          onChange={handleBoxes}
        /><label>Animal Frienldy</label><br></br>
        <input
          type="checkbox"
          name="pool"
          checked={boxes.pool}
          onChange={handleBoxes}
        /><label>Pool</label><br></br>
        <input
          type="checkbox"
          name="parking"
          checked={boxes.parking}
          onChange={handleBoxes}
        /><label>Parking</label><br></br>

      </form> */}

      <FormControl component="fieldset">
    {/*     <FormLabel component="legend" color="primary" >Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel 
            control={<Switch color='primary'  checked={state.gym} onChange={handleChange} name="gym" />}
            label="GYM"
          />
          <FormControlLabel
            control={<Switch color='primary' checked={state.tv} onChange={handleChange} name="tv"  />}
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
    </div>




  )

}

const slidecontainer = {
  width: "100%",
}
