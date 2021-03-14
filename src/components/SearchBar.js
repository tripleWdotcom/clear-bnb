import React, { useContext, useState, useEffect, componentDidMount } from 'react';
import Select, { createFilter } from 'react-select';
import { HouseContext } from '../contexts/HouseContext'

export default function SearchBar(props) {

  const { fetchAllHouses } = useContext(HouseContext)
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);

  async function setAllOptions() {
    console.log('Im in getHouses')
    const cities = await fetchAllHouses()
    console.log('cities', cities)
    let sortedCity = [...cities].sort((a, b) => a.city.localeCompare(b.city, { ignorePunctuation: true, ignoreCase: true }))
    console.log('sortedCity', sortedCity)
    let newCities = []
    sortedCity.map((c, i) => { newCities.push({ value: c.city, label: c.city + ', ' + c.country }) })
    console.log(newCities)
    setOptions([...newCities])
  }

  useEffect(() => {
    setAllOptions()
  }, [])

  const changeCityList = async (val, e) => {
    setSelectedOption()
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
