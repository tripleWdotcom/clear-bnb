
import { useContext, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar'
import {HouseContext} from '../contexts/HouseContext'

const SearchComponent = () => {

  let history = useHistory();

  const {fetchHousesByCity2 } = useContext(HouseContext)


  const [currentCity, setCurrentCity] = useState([])

  useEffect(() => {
    localStorage.setItem('selectedOption', null)
  })

  const searchButton =  async() => {
   // localStorage.setItem('selectedCity',currentCity)
    history.push("/home-results");
    await fetchHousesByCity2(currentCity.value)
  }

  const handleData = (ev) => {
    localStorage.setItem('selectedOption', JSON.stringify(ev))
   localStorage.setItem('selectedCity', JSON.stringify(ev))
    setCurrentCity(ev)
  }

  return (
    <div>
      <SearchBar getData={handleData} />
      <br />
      <div> place holder for dates  </div>
      <button type="button" onClick={searchButton}>
        Search
    </button>
    
    </div>


  )
}

export default SearchComponent
