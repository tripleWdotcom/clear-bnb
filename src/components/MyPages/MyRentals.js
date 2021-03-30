import { useEffect, useContext, useState } from 'react';
import { HouseContext } from '../../contexts/HouseContext'
import { UserContext } from '../../contexts/UserContext'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid'
import RentalRecieptPage from '../../pages/RentalRecieptPage'


function MyRentals() {

  const { myRentals, fetchMyRentals } = useContext(HouseContext)
  const { isLoggedIn } = useContext(UserContext)

  const [rentalId, setRentalId] = useState('')

  const [showDetailedPage, setShowDetailedPage] = useState(false)


  useEffect(async () => {
    console.log('Something has changed in my bookings')
    await fetchMyRentals(isLoggedIn[0]._id)
  }, [])

  useEffect(() => {
    console.log('My rentals is now', myRentals)
  }, [myRentals])

  const openDetailPage = (rentalId) => {
    setShowDetailedPage(true)
    setRentalId(rentalId)
  }

  const closeDetailPage = () => {
    setShowDetailedPage(false)
  }

  const structureRentals = (r, i) =>
  (
    <Grid item xs style={style.item} key={"a" + i} onClick={() => openDetailPage(r._id)}>
      <img style={style.img} key={"b" + i} src={r.pics[0]} />
      {r.isOffer ? <div style={style.offer} key={"f" + i}><div style={style.offerText} key={"g" + i}>Special offer</div></div> : ''}
      <div style={style.info} key={"c" + i}>
        <h2 style={style.infoText} key={"d" + i}>{r.city}</h2>
        {r.dateRanges.length < 2 ? <p style={style.infoText} key={"j" + i}>{new Date(r.dateRanges[0].availableStart).toString().substr(3, 13)}
          - {new Date(r.dateRanges[0].availableEnd).toString().substr(3, 13)}</p> : <p>Multiple date ranges</p>}
        <br />
        <p style={{ margin: '5px 0 5px 15px' }} key={"e" + i}>
          See more details...
          </p>
      </div>
    </Grid>
  )

  return (
    <div className="MyRentals">
      <Grid container direction="column" alignItems="center">
        <h2>My Rentals page</h2>
        {myRentals.length > 0 ? myRentals.map((r, i) => structureRentals(r, i)) : <h3 style={style.noBook}>Here will your future rentals be...</h3>}
      </Grid>
      {showDetailedPage ? <RentalRecieptPage rentalId={rentalId} closeModal={closeDetailPage} /> : ''}
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
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 8px 6px -6px black',
  },
  info: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: 'calc(100% - 20px)',

    height: '90px',
    bottom: '14px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    transition: 'all 500ms ease-in-out',
    overflow: 'hidden',
    ':hover': {
      height: '140px',
      cursor: 'pointer',
    }
  },
  infoText: {
    margin: '5px 0 5px 10px',
    lineHeight: '150%',
    letterSpacing: '1px',
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