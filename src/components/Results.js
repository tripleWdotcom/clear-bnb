

import { useHistory } from "react-router-dom";
import { HouseContext } from '../contexts/HouseContext'
import { useState, useEffect, useContext } from "react";
import Popup from '../pages/HomeDetails';

export default function Results() {

  const [buttonPopup, setButtonPopup] = useState(false);


  const { fetchHousesByCity2 } = useContext(HouseContext)
  const { houses } = useContext(HouseContext)

  const [cities, setCities] = useState([]);

  const test = c => (

    <div style={{width:"100%"}} key={c._id}>
      <hr/>
      <img style={{
        height: '100px'
      }}
        src={c.pics[0]}
        alt={'picture ' + c.id}

      />

      <h4 style={{ cursor: 'pointer' }}>{c.slogan}</h4><h5> USD{c.price} (per night)</h5>
      <p>{c.featureIds.map(f => <span style={{fontSize:"10px"}} key={f._id}> {(() => {
        switch (f.name) {
          case "tv": return "\📺 TV";
          case "gym": return "\🏋️ GYM";
          case "animalFriendly": return "\🐶 Animal Friendly";
          case "wifi": return "\📶 WiFi";
          case "pool": return "\🏊 pool";
          case "smoking": return "\🚬 Smoking";
          case "parking": return "\🅿️ Parking";
          case "kitchen": return "\🍳 Kitchen";
          case "breakfast": return "\🍞 Breakfast";


          default: return "#FFFFFF";
        }
      })()}     </span>)}</p>


      <div>
        <button style={{ cursor: 'pointer' }} onClick={() => setButtonPopup(true)}>Open
      </button>

        <Popup trigger={buttonPopup} setTrigger=
          {setButtonPopup}>
          <h3>This house</h3>
          <p>Here you can see more information about this house</p>
        </Popup>
        </div>
        
    </div>
  )
 
  async function cityHouses() {
    let x = JSON.parse(localStorage.getItem('selectedCity'))
    x = x.value
    let citiesFound = await fetchHousesByCity2(x)
    setCities(citiesFound);
  }
  useEffect(() => {
    cityHouses();
  }, [])

  return (
    <div>
      <div >
        {cities.map(c => test(c))}
      </div>
    </div>
  )
}