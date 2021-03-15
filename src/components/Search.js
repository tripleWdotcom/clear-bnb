
import { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar'

const SearchComponent = () => {
  let history = useHistory();

  useEffect(() => {
    localStorage.setItem('selectedOption', null)
  })

  const searchButton = () => {
    history.push("/home-results");
  }

  const handleData = (ev) => {
    localStorage.setItem('selectedOption', JSON.stringify(ev))
    localStorage.setItem('selectedCity', JSON.stringify(ev))
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
