<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import Bookings from '../components/MyPages/Bookings.js'
import MyRentals from '../components/MyPages/MyRentals.js'
import AddNewRental from '../components/MyPages/AddNewRental.js'
import Radium from 'radium'

function MyPage() {

  const [action, setAction] = useState('showBookings')

  return (
    <div className="leftPage" >
      <h3 className="myPageLinks" key="1" style={leftPageStyle} onClick={() => setAction('showBookings')}>Bookings</h3>
      <h3 className="myPageLinks" key="2" style={leftPageStyle} onClick={() => setAction('showRentals')}>My rentals</h3>
      <h3 className="myPageLinks" key="3" style={leftPageStyle} onClick={() => setAction('addNewRental')}>Add new rental</h3>
      <div className="rightPage">
        {action === 'showBookings' && <Bookings />}
        {action === 'showRentals' && <MyRentals />}
        {action === 'addNewRental' && <AddNewRental />}
      </div>
    </div >
  )
}

const leftPageStyle = {
  margin:'1em',
  cursor: 'pointer',
  ':hover': {
    color: 'rgba(255, 166, 0, 0.664)'
  }
}


export default Radium(MyPage);

>>>>>>> Stashed changes

