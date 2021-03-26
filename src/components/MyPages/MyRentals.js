import { useEffect, useContext } from 'react';
import { HouseContext } from '../../contexts/HouseContext'
import { UserContext } from '../../contexts/UserContext'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid'



function MyRentals() {

  const { myRentals, fetchMyRentals } = useContext(HouseContext)
  const { isLoggedIn } = useContext(UserContext)

  useEffect(async () => {
    console.log('Something has changed in my bookings')
    await fetchMyRentals(isLoggedIn[0]._id)
  }, [])

  useEffect(() => {
    console.log('My rentals is now', myRentals)
  }, [myRentals])

  const structureRentals = (r, i) =>
  (
    <Grid item xs style={style.item} key={"a" + i}>
      <img style={style.img} key={"b" + i} src={r.pics[0]} />
      {r.isOffer ? <div style={style.offer} key={"f" + i}><div style={style.offerText} key={"g" + i}>Special offer</div></div> : ''}
      <div style={style.info} key={"c" + i}>
        <div style={style.infoText} key={"d" + i}>
          <h3>{r.city}</h3>
          {r.dateRanges.length < 2 ? <a>{new Date(r.dateRanges[0].startDate).toString().substr(3, 13)}
          - {new Date(r.dateRanges[0].endDate).toString().substr(3, 13)}</a> : <a>Multiple date ranges</a>}
          <br />
          <br />
          <a style={style.infoMore} key={"e" + i}>
            See more details...
          </a>
        </div>
      </div>
    </Grid>
  )

  return (
    <div className="MyRentals">
      <Grid container direction="column" alignItems="center">
        <h2>My Rentals page</h2>
        {myRentals.length > 0 ? myRentals.map((r, i) => structureRentals(r, i)) : 'You have no rentals yet'}
      </Grid>
    </div>
  )
}

export default Radium(MyRentals);

const style = {
  item: {
    position: 'relative',
    margin: '5px',
    padding: '10px',
  },
  img: {
    width: '300px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 8px 6px -6px black',
  },
  info: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    width: '300px',
    height: '60px',
    bottom: '14px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    transition: 'all 500ms ease-in-out',
    overflow: 'hidden',
    ':hover': {
      height: '100px',
      cursor: 'pointer',
      transition: 'all 500ms ease-in-out'
    }
  },
  infoText: {
    margin: '5px 0 5px 10px',
    lineHeight: '150%',
    letterSpacing: '5px',
  },
  offer: {
    position: 'absolute',
    width: '120px',
    height: '30px',
    top: '10px',
    backgroundColor: 'crimson',
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  offerText: {
    margin: '6px 0 5px 12px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300px',
    fontSize: '15px'
  },
  noBook: {
    marginTop: '60px'
  }
}