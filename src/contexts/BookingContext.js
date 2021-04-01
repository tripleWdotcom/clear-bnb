import React, { createContext, useState } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const BookingContext = createContext()

export default function BookingContextProvider(props) {

  const [myBookings, setMyBookings] = useState([])

  // Get bookings by userId
  const fetchMyBookingsByUserId = async userId => {
    let res = await fetch('/rest/bookings/user/' + userId, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    setMyBookings(res)
  }

  // Add a new booking
  const addNewBooking = async newBooking => {
    let res = await fetch('/rest/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newBooking)
    })
    res = await res.json()
    newBooking._id = res._id
    setMyBookings([...myBookings, newBooking])
  }

  // Remove a booking by id
  const deleteBookingById = async bookingId => {
    let res = await fetch('/rest/bookings/' + bookingId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    let index = myBookings.indexOf(res)
    myBookings.splice(index, 1)
  }

  // The values we want the children components to reach and be able to use
  const values = {
    myBookings,
    fetchMyBookingsByUserId,
    addNewBooking,
    deleteBookingById
  }

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  )
}
