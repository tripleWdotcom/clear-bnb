import { HouseContext } from '../contexts/HouseContext'
import { useEffect, useContext, useState } from "react";
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
import DetailedPage from '../pages/DetailedPage'


export default function Results() {
  const { housesByCityAndDate, fetchHousesByCityAndDate } = useContext(HouseContext)
  const [showDetailedPage, setShowDetailedPage] = useState(false)
  const [houseId, setHouseId] = useState('')
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)

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
      bedroomsMax: (localStorage.getItem("bedsNumberMax") === null ? 10 : localStorage.getItem("bedsNumberMax")),
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


  const openDetailPage = (houseId) => {
    console.log('house id', houseId)
    setShowDetailedPage(true)
    setHouseId(houseId)
    setStartDate(localStorage.getItem("startDateChosen"))
    setEndDate(localStorage.getItem("endDateChosen"))
  }

  const closeDetailPage = () => {
    setShowDetailedPage(false)
  }





  const test = c => (

    <div key={c._id} style={{ backgroundColor: 'light-grey', margin: '5px' }}>

      <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ paddingTop: '20px', cursor: 'pointer' }}
        onClick={() => openDetailPage(c._id)}>

        <Grid item>
          <img style={{
            height: '100%',
            width: '100%',
            borderRadius: '10px'
          }}
            src={c.pics[0]}
            alt={'picture ' + c.id}
          ></img>
        </Grid>


        <Grid item xs style={{ textAlign: "left" }}>
          <h2>{c.slogan}</h2>
        </Grid>
        <Grid container direction="row"
          justify="space-between"
          alignItems="center"
          style={{ margin: '15px 0' }}>
          <Grid item>
            <h4>{c.city}</h4>
          </Grid>

          <Hidden xsDown>
          <Grid item>
          <hr style={{ borderTop: '1px solid grey', width: '50px'}} />
          </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid item>
              <hr style={{ borderTop: '1px solid grey', width: '20px' }} />
            </Grid>
          </Hidden>

          <Grid item>
            <h4>{c.price} € / night</h4>
          </Grid>

          <Hidden xsDown>
          <Grid item>
            <hr style={{ borderTop: '1px solid grey', width: '50px' }} />
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid item>
              <hr style={{ borderTop: '1px solid grey', width: '20px' }} />
            </Grid>
          </Hidden>

          <Grid item>
            <h4>{c.bedrooms} beds</h4>
          </Grid>
        </Grid>





        {/* <Hidden xsDown>
              <Grid container>
                {c.featureIds.map(f => <Grid item xs><span style={{ fontSize: "15px" }} key={f._id}> {(() => {
          switch (f.name) {
            case "tv": return (<img src={tv} style={{ width: '20px' }} />);
            case "gym": return (<img src={gym} style={{ width: '20px' }} />);
            case "animalFriendly": return (<img src={animalFriendly} style={{ width: '20px' }} />);
            case "wifi": return (<img src={wifi} style={{ width: '20px' }} />);
            case "pool": return (<img src={pool} style={{ width: '20px' }} />);
            case "smoking": return (<img src={smoking} style={{ width: '20px' }} />);
            case "parking": return (<img src={parking} style={{ width: '20px' }} />);
            case "kitchen": return (<img src={kitchen} style={{ width: '20px' }} />);
            case "breakfast": return (<img src={breakfast} style={{ width: '20px' }} />);
            default: return "#FFFFFF";
          }
        })()}     </span></Grid>)
}

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

        {/* </Grid>  */}


        <Grid item xs>
          <div style={{ display: 'inline-flex' }}>{c.featureIds.map(f => <span style={{ padding: '10px 20px 10px 0' }} key={f._id}> {(() => {
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



        {/* <Grid item style={{textAlign: 'left'}}>
            

            </Grid> */}

      </Grid >



    </div >

  )
  let x = +localStorage.getItem("startDateChosen")
  let y = new Date(x)
  let xx = +localStorage.getItem("endDateChosen")
  let yy = new Date(xx)

  return (
    <div>



      <div style={{ fontSize: "20px", padding: '20px', backgroundColor: '#66A395', color: 'black' }}>
        Available houses with Check-In on: <b>{y.toDateString()}</b> and Check out on: <b>{yy.toDateString()}</b>
      </div>

      {housesByCityAndDate.map(c => test(c))}
      {showDetailedPage ? <DetailedPage houseId={houseId} startDate={startDate} endDate={endDate} closeModal={closeDetailPage} /> : ''}

    </div>
  )
}