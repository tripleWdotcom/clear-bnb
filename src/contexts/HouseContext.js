import React, { useEffect, createContext, useState  } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const HouseContext = createContext()


// Create function for HouseContext
export default function HouseContextProvider(props) {



  // A reactive state to store houses
  const [houses, setHouses] = useState([])
  

  //test for only houses
  const fetchHouses = async() => {
    let res = await fetch('/rest/houses')
    res = await res.json()
    console.log("1do u se me?")
    console.log(res)
    setHouses(res)
  }
  console.log("2d u se me?")

  // Calls one time, as mounted in Vue
  useEffect(() => { fetchHouses() },[])

  const values = {
    houses

  }

  return (
    <HouseContext.Provider value={values}>
      {props.children}
    </HouseContext.Provider>
  )
}
