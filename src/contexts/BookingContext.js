import React, { createContext, useState } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const BookingContext = createContext()

export default function BookingContextProvider(props) {

  const [bookings, setBookings] = useState([])

  // Get bookings by userId
  const fetchBookings = async userId => {
    let res = await fetch('/rest/bookings/:userId', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userId)
    })
    res = await res.json()
    setBookings(res)
  }

  // Add a new booking
  const addBooking = async booking => {
    let res = await fetch('/rest/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
    res = await res.json()
    booking.id = res.id
    setBookings([...bookings, booking])
  }

  // Remove a booking by id
  const removeBookingById = async bookingId => {
    let res = await fetch('/rest/booking/:id', {
      method: 'DELETE'
    })

  }

  // The values we want the children components to reach and be able to use
  const values = {
    bookings,
    addBooking,
    removeBookingById
  }

  // Calls one time, as mounted in Vue
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  )
}
