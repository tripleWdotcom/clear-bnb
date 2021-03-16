import React, { createContext, useState } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const BookingContext = createContext()

export default function BookingContextProvider(props) {

  const [bookings, setBookings] = useState([])

  // Get bookings by userId
  const fetchBookingsByUserId = async userId => {
    let res = await fetch('/rest/bookings/user/' + userId, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    // setBookings(res)
    return res;
  }

  // Add a new booking
  const addBooking = async booking => {
    let res = await fetch('/rest/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
    res = await res.json()
    // booking.id = res.id
    // setBookings([...bookings, booking])
    return res;
  }

  // Remove a booking by id
  const deleteBookingById = async id => {
    let res = await fetch('/rest/bookings/' + id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    // let index = users.indexOf(res)
    // bookings.splice(index, 1)
    return res;
  }

  

  // The values we want the children components to reach and be able to use
  const values = {
    bookings,
    fetchBookingsByUserId,
    addBooking,
    deleteBookingById
  }

  // Calls one time, as mounted in Vue
  // useEffect(() => {
  //   fetchBookings()
  // }, [])

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  )
}
