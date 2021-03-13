import Radium from 'radium'
import React, { useState } from "react";


const Filters = () => {


  const [valueBeds, onChange] = useState(1)

  const [boxes, setState] = useState({
    tv: true,
    wifi: true,
    breakfast: true,
    gym: true,
    kitchen: true,
    smoking: true,
    animalF: true,
    pool: true,
    parking: true

  })
  function handleBoxes(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({ ...boxes, [e.target.name]: value });
    console.log("value is :", e.target.name, value)
  }





  return (
    <div>
      <h2>filters not sending info at the moment</h2>
      <hr/>
      <div style={slidecontainer}>
        <div>
          <p>number of beds?</p>
          <input type="range" id="popo" min="1" max="5" value={valueBeds}
            onChange={({ target: { value: x } }) => {
              onChange(x);
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