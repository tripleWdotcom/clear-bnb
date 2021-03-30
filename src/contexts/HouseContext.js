import React, { createContext, useState, useEffect } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const HouseContext = createContext()

// Create function for HouseContext
export default function HouseContextProvider(props) {


  // A reactive state to store houses
  const [citiesAndCountriesNames, setCitiesAndCountriesNames] = useState([])
  const [myRentals, setMyRentals] = useState([])
  const [housesByCityTemp, setHousesByCityTemp] = useState([]) //Temp will be dates later
  const [housesByCityAndDate, setHousesByCityAndDate] = useState([]) //Temp will be dates later
  const [offers, setOffers] = useState([])



  // Get all citiesAndCountriesNames 
  const fetchCitiesAndCountriesNames = async () => {
    let res = await fetch('/rest/houses/city/' + null, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    setCitiesAndCountriesNames(res)
  }

  const fetchOffers = async () => {
    let res = await fetch('/rest/offerhouses' ,{
      method: 'GET', 
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    setOffers(res)
  }


  // Get users rentals/houses they own
  const fetchMyRentals = async userId => {
    let res = await fetch('/rest/houses/user/' + userId, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()

    setMyRentals(res)

  }

  // Get houses by city
  /* const fetchHousesByCity = async city => {
    let res = await fetch('/rest/houses/city/' + city , {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  } */

  // Get houses by city2 - temp method. This will be removed. Fetch by filters will do this.
  const fetchHousesByCity2 = async city => {
    let res = await fetch('/rest/houses/ccity/' + city, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    setHousesByCityTemp(res)
  }

  // Get houses by filters (checkbox and range) - Does this work with userId as well?
  const fetchHousesByCityAndDate = async filters => {
    filters = JSON.stringify(filters)
    // filters should be an object passed to a query
    let res = await fetch('/rest/houses/filters/' + filters, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    setHousesByCityAndDate(res);
  }

  // const addNewRentalOffer = async newRentalOffer => {
  //   let res = await fetch('/rest/offers', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(newRentalOffer)
  //   })
  //   res = await res.json()
  //   newRentalOffer._id = res._id
  //   // Append a new house to the reactive house list
  //   // to trigger reactivity we replace the old list with a new 
  //   // by spreading the old list (a copy of it) and adding the new house
  //   setOffers([...offers, newRentalOffer])
  //   setMyRentals([...myRentals, newRentalOffer])
  // }

  // Add a new rental and spread it.
  const addNewRental = async newRental => {
    let res = await fetch('/rest/houses', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRental)
    })
    res = await res.json()
    newRental._id = res._id
    // Append a new house to the reactive house list
    // to trigger reactivity we replace the old list with a new 
    // by spreading the old list (a copy of it) and adding the new house
    setMyRentals([...myRentals, newRental])
  }

  // Remove a house by id
  const removeRentalById = async rentalId => {
    let res = await fetch('/rest/houses/' + rentalId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    let index = myRentals.indexOf(res)
    myRentals.splice(index, 1)
  }

  // Remove offer when booked
  // const removeRentalOfferById = async rentalOfferId => {
  //   let res = await fetch('/rest/houses/' + rentalOfferId, {
  //     method: 'DELETE',
  //     headers: { 'content-type': 'application/json' },
  //   })
  //   res = await res.json()

  //   let indexOffer = offers.indexOf(res)
  //   offers.splice(indexOffer, 1)

  //   let index = myRentals.indexOf(res)
  //   myRentals.splice(index, 1)

  // }
  
  // The values we want the children components to reach and be able to use
  const values = {
    offers,
    myRentals,
    citiesAndCountriesNames,
    housesByCityAndDate,
    housesByCityTemp,
    addNewRental,
    fetchMyRentals,
    removeRentalById,
    fetchHousesByCityAndDate,
   // fetchHousesByCity,
    fetchHousesByCity2,
  }

  useEffect(() => {
    fetchCitiesAndCountriesNames()
    fetchOffers()
  }, [])


  return (
    <HouseContext.Provider value={values}>
      {props.children}
    </HouseContext.Provider>
  )
}
