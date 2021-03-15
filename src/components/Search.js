
import { useHistory } from "react-router-dom";
import SearchBar from './SearchBar'

const SearchComponent = ()=>{
  let history = useHistory();

  const searchButton= (e)=> {
      history.push("/home-results");
  }

  return(
    <div>
      <SearchBar />
      <br />
    <div> place holder for dates  </div>
      <button type="button" onClick={searchButton}>
        Search
    </button>
    </div>


  )
}

export default SearchComponent
