

import { useHistory } from "react-router-dom";
import { HouseContext } from '../contexts/HouseContext'
import { useContext } from 'react'
import { useState } from "react";


export default function Results() {
  const { fetchHousesByCity2 } = useContext(HouseContext)
  const [cf, setCf] = useState([])
  let x = JSON.parse(localStorage.getItem('selectedOption'))
  x=x.value
  console.log(x," erukvheheörovir")
 


  const test = c => (

    <div key={c._id}>

      <h4 style={{ cursor: 'pointer' }}>{c.slogan}</h4><h5>{c.price} USD per night</h5>
      <p>{c.featureIds.map(f => <span key={f._id}> {(() => {
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
      })()}</span>)}</p>
    </div>
  )

  const cityHouses = async () => {
    let citiesFound = await fetchHousesByCity2(x)
    console.table(citiesFound)
    setCf(citiesFound)

  }
  cityHouses()
  console.table(cf)

  return (
    <div>{x}
      <div >
        {cf.map(c => test(c))}
      </div>
    </div>
  )


}