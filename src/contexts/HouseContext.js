import React, { createContext, useState } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const HouseContext = createContext()

// Create function for HouseContext
export default function HouseContextProvider(props) {

  // A reactive state to store houses
  const [houses, setHouses] = useState([])

  // Get all houses - IS THIS FETCH NEEDED?
  const fetchHouses = async () => {
    let res = await fetch('/rest/houses')
    res = await res.json()
    setHouses(res)
  }

  // Get houses by filters (checkbox and range) - Does this work with userId as well?
  const fetchHousesByFilters = async filters => {
    // filters should be an object passed to a query
    let res = await fetch('/rest/houses/:filters', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(filters)
    })
    res = await res.json()
    console.log(res)
    setHouses(res)
  }

  // Add a new house
  const addHouses = async house => {
    let res = await fetch('/rest/houses', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(house)
    })
    res = await res.json()
    house.id = res.id
    // Append a new house to the reactive house list
    // to trigger reactivity we replace the old list with a new 
    // by spreading the old list (a copy of it) and adding the new house
    setHouses([...houses, house])
  }

  // Remove a house by id
  const removeHouseById = async houseId => {
    let res = await fetch('/rest/houses/:id', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(houseId)
    })
    res = await res.json()
    let index = houses.indexOf(res)
    houses.splice(index, 1)
  }

  // The values we want the children components to reach and be able to use
  const values = {
    houses,
    addHouses,
    removeHouseById,
    fetchHousesByFilters
  }

  // Calls one time, as mounted in Vue
  useEffect(() => {
    fetchHouses()
  }, [])

  return (
    <HouseContext.Provider value={values}>
      {props.children}
    </HouseContext.Provider>
  )
}
