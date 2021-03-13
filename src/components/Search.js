
import { useHistory } from "react-router-dom";
const SearchComponent = ()=>{
  let history = useHistory();

  const searchButton= ()=> {
  
      history.push("/home-results");
  }

  return(
    <div>
    <div> place holders location</div>
    <div> place holder for dates  </div>
      <button type="button" onClick={searchButton}>
        Search
    </button>
    </div>


  )
}

export default SearchComponent
