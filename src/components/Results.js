import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext } from "react";

export default function Results() {
  const { housesByCityAndDate, fetchHousesByCityAndDate } = useContext(HouseContext)

  useEffect(async () => {
    //let city = JSON.parse(localStorage.getItem('selectedCity')).value

    let objects = {
      city: JSON.parse(localStorage.getItem('selectedCity')).value,
      availableStart: localStorage.getItem("startDateChosen"),
      availableEnd: localStorage.getItem("endDateChosen"),
      priceMin: (localStorage.getItem("priceMin") === null ? 1 : localStorage.getItem("priceMin")),
      priceMax: (localStorage.getItem("priceMax") === null ? 500 : localStorage.getItem("priceMax")),
      bedroomsMin: (localStorage.getItem("bedsNumberMin") === null ? 1 : localStorage.getItem("bedsNumberMin")),
      bedroomsMax: (localStorage.getItem("bedsNumberMax") === null ? 10 : localStorage.getItem("bedsNumberMax"))
    }
    let x = JSON.parse(localStorage.getItem('features'))
    let toto = { ...objects, ...x }
    await fetchHousesByCityAndDate(toto)
    //await fetchHousesByCityAndDate(objects)

   // console.log("what is my obejc???", toto)
  }, [localStorage.getItem('selectedCity'),
  localStorage.getItem("bedsNumberMin"),
  localStorage.getItem("bedsNumberMax"),
  localStorage.getItem("priceMin"),
  localStorage.getItem("priceMax"),
  localStorage.getItem('features')])
  //])



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