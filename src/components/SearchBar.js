import React, { useContext, useState, useEffect, componentDidMount } from 'react';
import Select, { createFilter } from 'react-select';
import { HouseContext } from '../contexts/HouseContext'

export default function SearchBar(props) {

  const { fetchAllCities } = useContext(HouseContext)
  const [options, setOptions] = useState([])
  const localSelected = localStorage.getItem('selectedOption');
  const [selectedOption, setSelectedOption] = useState(localSelected ? localSelected : null);

  async function setAllOptions() {
    const cities = await fetchAllCities()
    let optionCities = []
    cities.map((c, i) => {
      optionCities.push({ value: c.city, label: c.city + ', ' + c._id })
    })
    setOptions([...optionCities])
  }

  useEffect(() => {
    setAllOptions()
  }, [])

  const changeCityList = async (val, e) => {
    setSelectedOption()
    localStorage.setItem('selectedOption', val)

    console.log("val", val)
    console.log('e', e)
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
