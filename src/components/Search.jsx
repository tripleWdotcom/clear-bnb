
import SearchBar from './SearchBar'

const SearchComponent = () => {


  const handleData = (ev) => {
    localStorage.setItem('selectedOption', JSON.stringify(ev))
    localStorage.setItem('selectedCity', JSON.stringify(ev))
  }

  return (
    <div>
      <SearchBar getData={handleData} />
      <br />  <br />

     
    </div>
  )
}

export default SearchComponent
