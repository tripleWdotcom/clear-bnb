import React, { createContext, useState, useEffect } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const HouseContext = createContext()

// Create function for HouseContext
export default function HouseContextProvider(props) {

  // A reactive state to store houses
  const [houses, setHouses] = useState([])

  // Get all houses
  const fetchAllCities = async () => {
    let res = await fetch('/rest/houses/city/' + null, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }


  // Get users rentals/houses they own
  const myRentals = async userId => {
    let res = await fetch('/rest/houses/user/' + userId, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }

  // Get houses by city
  const fetchHousesByCity = async city => {
    let res = await fetch('/rest/houses/city/' + city , {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }

  // Get houses by filters (checkbox and range) - Does this work with userId as well?
  const fetchHousesByFilters = async filters => {
    filters = JSON.stringify(filters)
    // filters should be an object passed to a query
    let res = await fetch('/rest/houses/filters/' + filters, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }

  // Add a new house
  const addHouse = async house => {
    let res = await fetch('/rest/houses', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(house)
    })
    res = await res.json()
    house._id = res._id
    // Append a new house to the reactive house list
    // to trigger reactivity we replace the old list with a new 
    // by spreading the old list (a copy of it) and adding the new house
    setHouses([...houses, house])
    return res;
  }

  // Remove a house by id
  const removeHouseById = async id => {
    let res = await fetch('/rest/houses/' + id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    // let index = houses.indexOf(res)
    // houses.splice(index, 1)
    return res;
  }

  // useEffect(() => {
  //   fetchAllCities()
  // }, [])

  // The values we want the children components to reach and be able to use
  const values = {
    houses,
    addHouse,
    removeHouseById,
    fetchHousesByFilters,
    fetchHousesByCity,
    myRentals,
    fetchAllCities
  }

  return (
    <HouseContext.Provider value={values}>
      {props.children}
    </HouseContext.Provider>
  )
}
