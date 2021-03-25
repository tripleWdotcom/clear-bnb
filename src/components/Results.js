import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext, useState } from "react";

export default function Results() {
  const { housesByCityAndDate, fetchHousesByCityAndDate } = useContext(HouseContext)
  const [showDetailedPage, setShowDetailedPage] = useState(false)

  useEffect(async () => {
    //let city = JSON.parse(localStorage.getItem('selectedCity')).value
    let x = JSON.parse(localStorage.getItem('features'))
    let objects = {
      city: JSON.parse(localStorage.getItem('selectedCity')).value,
      availableStart: localStorage.getItem("startDateChosen"),
      availableEnd: localStorage.getItem("endDateChosen"),
      priceMin: (localStorage.getItem("priceMin") === null ? 1 : localStorage.getItem("priceMin")),
      priceMax: (localStorage.getItem("priceMax") === null ? 500 : localStorage.getItem("priceMax")),
      bedroomsMin: (localStorage.getItem("bedsNumberMin") === null ? 1 : localStorage.getItem("bedsNumberMin")),
      bedroomsMax: (localStorage.getItem("bedsNumberMax") === null ? 10 : localStorage.getItem("bedsNumberMax"))
    }

    let toto = { ...objects, ...x }
    await fetchHousesByCityAndDate(toto)
    //await fetchHousesByCityAndDate(objects)

    console.log("what is my obejc???", toto)
  }, [localStorage.getItem('selectedCity'),
  localStorage.getItem("bedsNumberMin"),
  localStorage.getItem("bedsNumberMax"),
  localStorage.getItem("priceMin"),
  localStorage.getItem("priceMax"),
  localStorage.getItem('features')])
  //])

  const openDetailPage = () => {
    setShowDetailedPage(true)
  }



  const test = c => (

    <div style={{ cursor: 'pointer', width: "100%" }} key={c._id} onClick={openDetailPage}>
      <hr />
      <img style={{
        height: '200px',
        width: '100%',
        borderRadius: '10px'
      }}
        src={c.pics[0]}
        alt={'picture ' + c.id}
      />

      <h4>{c.slogan}</h4><h5> USD{c.price} (per night)</h5>
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
  let x = +localStorage.getItem("startDateChosen")
  let y=new Date(x)
  let xx = +localStorage.getItem("endDateChosen")
  let yy = new Date(xx)
 
  return (
    <div> Houses available from:
      {y.toDateString()} to {yy.toDateString()}
      <div >
        {housesByCityAndDate.map(c => test(c))}
      </div>
      {showDetailedPage ? 'show detailed page' : 'dont show'}
    </div>
  )
}