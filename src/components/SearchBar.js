import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { HouseContext } from '../contexts/HouseContext'

export default function SearchBar(props) {

  let { houses } = useState(HouseContext)

  // useEffect(() => {
  //   fetchAllHouses()
  //   console.log('houses from search', houses)
  // }, [])
  

  // useEffect(() => {
  //   options.push(houses.map(h => ({ label: h.city, value: h.city + ', ' + h.country })))
  // })
  
  const options = [{ value: 'Hallo', label: 'Yhellow' }, { value: 'No', label: 'Maybe' }]
  
  const getOptions = (() => {
    console.log('houses from search', houses)
  })
  

  //const options = () => { cities.map(c => options.push({ value: c.city, label: c.city + ', ' + c.country })) }



  // const handleChange = (val, e) => {
  //   console.log('Option selected:', val}
  // console.log('Options:', options}
  // }


  // const field = ({ options }) => {
  //   <select name="city"
  // }
  

  return (
    <div>
      <Select 
        onChange={getOptions}
        loadOptions={options}
      />
    </div>
  )
}