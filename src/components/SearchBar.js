import React, { useContext, useState, useEffect} from 'react';
import Select, { createFilter } from 'react-select';
import { HouseContext } from '../contexts/HouseContext'

export default function SearchBar(props) {

  const { citiesAndCountriesNames } = useContext(HouseContext)
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(JSON.parse(localStorage.getItem('selectedOption')));

  
  async function setAllOptions() {
    setSelectedOption(JSON.parse(localStorage.getItem('selectedOption')))
    let optionCities = []
    citiesAndCountriesNames.map(c => {
      optionCities.push({ value: c._id, label: c._id + ', ' + c.country })
    })
    setOptions([...optionCities])
  }

  useEffect(() => {
    setAllOptions()
  }, [])

  const changeCityList = async (val, e) => {
    props.getData(val)
    setSelectedOption()
  }

  const filterConfig = { 
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: 'start'
  }

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={changeCityList}
        options={options}
        filterOption={createFilter(filterConfig)}
      />
    </div>
  )
}
