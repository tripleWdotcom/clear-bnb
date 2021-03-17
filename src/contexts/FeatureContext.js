import React, { createContext, useState } from 'react';

export const FeatureContext = createContext()

export default function FeatureContextProvider(props) {

  const [features, setFeatures] = useState([])

  // Get all features
  const fetchFeatures = async () => {
    let res = await fetch('/rest/features')
    res = await res.json()
    setFeatures(res)
  
  }

  // The values we want the children components to reach and be able to use
  const values = {
    features,
  }

  // Calls one time, as mounted in Vue
   useEffect(() => {
    fetchFeatures()
   }, [])

  return (
    <FeatureContext.Provider value={values}>
      {props.children}
    </FeatureContext.Provider>
  )
}
