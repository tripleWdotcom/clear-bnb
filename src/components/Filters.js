import Radium from 'radium'
import React, { useState } from "react";
import RangeSlider from './RangeFilters'


const Filters = () => {


  const [valueBeds, setValueBeds] = useState(1)

  const [boxes, setState] = useState({
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
    setState({ ...boxes, [e.target.name]: value });
    console.log("value is :", e.target.name, value)
  }



  return (
    <div>
    
      <hr/>
      <div style={slidecontainer}>
        <div>
          <RangeSlider />
          <p>number of beds?</p>
          <input type="range" id="popo" min="1" max="5" value={valueBeds}
            onChange={({ target: { value: x } }) => {
              setValueBeds(x);
              localStorage.setItem('bedsNumber',x)
              console.log("this is beds",x)
            }}
          />
          <div >
            {valueBeds}
          </div>
        </div>
      </div>
      <hr />

      <form style={{ textAlign: "left" }}>
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

      </form>
    </div>
  )

}

const slidecontainer = {
  width: "100%",
}





export default Filters