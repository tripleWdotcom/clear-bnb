import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { HouseContext } from '../contexts/HouseContext'

export default function SearchBar(props) {

  const { fetchAllHouses } = useState(HouseContext)
  

  // useEffect(() => {
  //   options.push(houses.map(h => ({ label: h.city, value: h.city + ', ' + h.country })))
  // })
  
  const options = [{ value: 'Hallo', label: 'Yhellow' }, { value: 'No', label: 'Maybe' }]
  
  const getOptions = async () => {
    const houses = await fetchAllHouses()
    console.log('houses', houses)
    return []
  }
  

  //const options = () => { cities.map(c => options.push({ value: c.city, label: c.city + ', ' + c.country })) }

  const selectedOption = null;

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
        onChange={opt => console.log(opt.label, opt.value)}
        loadOptions={getOptions}
      />
    </div>
  )
}