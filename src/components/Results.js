import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext } from "react";

export default function Results() {
  const { housesByCityAndDate, fetchHousesByCityAndDate } = useContext(HouseContext)

  useEffect(async () => {
    //let city = JSON.parse(localStorage.getItem('selectedCity')).value
    let objects ={
    city: JSON.parse(localStorage.getItem('selectedCity')).value,
    availableStart: localStorage.getItem("startDateChosen"),
    availableEnd: localStorage.getItem("endDateChosen"),
    priceMin: 1,
    priceMax: 4550,
    bedroomsMin: 1 || localStorage.getItem("bedsNumber"),
    bedroomsMax: 10,
  }
    await fetchHousesByCityAndDate(objects)
    console.log(objects)
  }, [localStorage.getItem('selectedCity'),
    localStorage.getItem("bedsNumber")])



  const test = c => (

    <div style={{ width: "100%" }} key={c._id}>
      <hr />
      <img style={{
        height: '200px',
        width: '100%',
        borderRadius: '10px'
      }}
        src={c.pics[0]}
        alt={'picture ' + c.id}
      />

      <h4 style={{ cursor: 'pointer' }}>{c.slogan}</h4><h5> SEK{c.price} (per night)</h5>
      <p>{c.featureIds.map(f => <span style={{ fontSize: "10px" }} key={f._id}> {(() => {
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
    </div>
  )

  return (
    <div>
      <div >
        {housesByCityAndDate.map(c => test(c))}
      </div>
    </div>
  )
}