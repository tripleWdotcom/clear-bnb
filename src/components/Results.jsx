import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext } from "react";
import Grid from '@material-ui/core/Grid';
import TvIcon from '@material-ui/icons/Tv';
import parking from '../images/parking.png';
import smoking from '../images/smoking.png';
import gym from '../images/gym.png';
import tv from '../images/tv.png';
import animalFriendly from '../images/animalFriendly.png';
import wifi from '../images/wifi.png';
import breakfast from '../images/breakfast.png';
import kitchen from '../images/kitchen.png';
import pool from '../images/pool.png';
import adress from '../images/adress.png';
import beds from '../images/beds.png';
import city from '../images/city.png';
import country from '../images/country.png';
import price from '../images/price.png';
import contact from '../images/contact.png';
import email from '../images/email.png';
import checkIn from '../images/checkIn.png';
import checkOut from '../images/checkOut.png';
import { Wifi } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden'
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default function Results() {
  const { housesByCityAndDate, fetchHousesByCityAndDate } = useContext(HouseContext)

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



  const test = c => (

    <div key={c._id}>
     
      <Grid container style={{paddingTop:'20px'}}>

        <Grid item md={4} >
          <img style={{
            height: '100%',
            width: '100%',
            borderRadius: '10px'
          }}
            src={c.pics[0]}
            alt={'picture ' + c.id}
          ></img>
        </Grid>
        <Grid item md={8}>

          <Grid container direction="column">
            <Grid item style={{textAlign:"left"}}>

              <h2 style={{ cursor: 'pointer' }}>{c.slogan}</h2>
              <h4> <LocationOnIcon />{c.city}</h4>

            </Grid>
            
            <Hidden xsDown>
              <Grid container direction="row" >
                {c.featureIds.map(f => <span style={{ fontSize: "15px" }} key={f._id}> {(() => {
                  switch (f.name) {
                    case "tv": return (<div><img src={tv} style={{ width: '20px' }} /> TV</div>);
                    case "gym": return (<div><img src={gym} style={{ width: '20px' }} /> Gym</div>);
                    case "animalFriendly": return (<div><img src={animalFriendly} style={{ width: '20px' }} /> Animal Friendly</div>);
                    case "wifi": return (<div><img src={wifi} style={{ width: '20px' }} /> Wi-Fi</div>);
                    case "pool": return (<div><img src={pool} style={{ width: '20px' }} /> Pool</div>);
                    case "smoking": return (<div><img src={smoking} style={{ width: '20px' }} /> Smoking</div>);
                    case "parking": return (<div><img src={parking} style={{ width: '20px' }} /> Parking</div>);
                    case "kitchen": return (<div><img src={kitchen} style={{ width: '20px' }} /> Kitchen</div>);
                    case "breakfast": return (<div><img src={breakfast} style={{ width: '20px' }} /> Breakfast</div>);
                    default: return "#FFFFFF";
                  }
                })()}     </span>)}

                {/*    <div style={{ height: '100px',display:'flex' }}>{c.featureIds.map(f => <div key={f._id}> {(() => {
                switch (f.name) {
                  case "tv": return (<div><TvIcon />TV</div>);
                  case "gym": return (<div><TvIcon />Gym</div>);
                  case "animalFriendly": return (<div><TvIcon />Animal Friendly</div>);
                  case "wifi": return (<div><TvIcon />WiFi</div>);
                  case "pool": return (<div><TvIcon />Pool</div>);
                  case "smoking": return (<div><TvIcon />Smoking</div>);
                  case "parking": return (<div><TvIcon />Parking</div>);
                  case "kitchen": return (<div><TvIcon />Kitchen</div>);
                  case "breakfast": return (<div><TvIcon />Breakfast</div>);
                  default: return "#FFFFFF";
                }
              })()}     </div>)}</div> */}

              </Grid>

              
            </Hidden>
            <Hidden smUp>
              <Grid >
                <div style={{display:'inline-flex'}}>{c.featureIds.map(f => <span style={{padding:'10px'}} key={f._id}> {(() => {
                  switch (f.name) {
                    case "tv": return (<div><img src={tv} style={{ width: '20px' }} /></div>);
                    case "gym": return (<div><img src={gym} style={{ width: '20px' }} /> </div>);
                    case "animalFriendly": return (<div><img src={animalFriendly} style={{ width: '20px' }} /></div>);
                    case "wifi": return (<div><img src={wifi} style={{ width: '20px' }} /> </div>);
                    case "pool": return (<div><img src={pool} style={{ width: '20px' }} /> </div>);
                    case "smoking": return (<div><img src={smoking} style={{ width: '20px' }} /></div>);
                    case "parking": return (<div><img src={parking} style={{ width: '20px' }} /></div>);
                    case "kitchen": return (<div><img src={kitchen} style={{ width: '20px' }} /></div>);
                    case "breakfast": return (<div><img src={breakfast} style={{ width: '20px' }} /></div>);
                    default: return "#FFFFFF";
                  }
                })()}     </span>)}</div>
              </Grid>


            </Hidden>
           

            <Grid item xs={12} container justify="space-around">
              <h4> ${c.price} </h4>   <h4> Beds: {c.bedrooms} </h4>

            </Grid>
    
          </Grid>

        </Grid>
      </Grid>
    </div>

  )
  let x = +localStorage.getItem("startDateChosen")
  let y = new Date(x)
  let xx = +localStorage.getItem("endDateChosen")
  let yy = new Date(xx)

  return (
    <div>
      <div style={{ fontSize: "20px", padding: '20px', backgroundColor: 'whitesmoke', color: 'black' }}>
        Available houses with Check-In on:<b>{y.toDateString()}</b> and Check out on:  <b>{yy.toDateString()}</b>
      </div>

      {housesByCityAndDate.map(c => test(c))}


    </div>
  )
}