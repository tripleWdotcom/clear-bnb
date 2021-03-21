import Radium from 'radium'
import { useState, useContext, useRef } from 'react'
import { HouseContext } from '../../contexts/HouseContext'
import Slider from '@material-ui/core/Slider'

function AddNewRental() {
  const { addNewRental } = useContext(HouseContext)
  const [firstName, setFirstName] = useState("The logged in user");
  const [lastName, setLastName] = useState("The logged in user");
  const [email, setEmail] = useState("The logged in user");
  const [userId, setUserId] = useState("The logged in user");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [slogan, setSlogan] = useState("");
  const [adress, setAdress] = useState("");
  const [pics, setPics] = useState([]);
  const [beds, setBeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [featureIds, setFeatureIds] = useState([]);
  const [availableStart, setAvailableStart] = useState(0);
  const [availableEnd, setAvailableEnd] = useState(0);


  const handleSubmit = async e => {
    console.log('Add new rental button clicked!')

    console.log(`
      FirstName: ${firstName} 
      LastName: ${lastName}
      Email: ${email}
    `);

    e.preventDefault()

    // const newUser = {
    //   email: email,
    //   password: password,
    //   firstName: firstName,
    //   lastName: lastName,
    // }

    // const U = await addUser(newUser)
    // console.log('new user', U)

  }




  function valuetextBeds(value) {
    return `${value}`;
  }
  function valuetextPrice(value) {
    return `${value}`;
  }

  const [boxes, setState] = useState({
    tv: false,
    wifi: false,
    breakfast: false,
    gym: false,
    kitchen: false,
    smoking: false,
    animalF: false,
    pool: false,
    parking: false
  })



  return (
    <div className="AddNewRental">
      <div>
        <form onSubmit={handleSubmit} style={modalStyle.form}>
          <h1>Add New Rental</h1>
          <label style={modalStyle.label} key="1">
            Slogan
          <input
              required
              name="slogan"
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              style={modalStyle.input} key="2">
            </input>
          </label>
          <label style={modalStyle.label} key="3">
            Description
          <input
              required
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={modalStyle.input} key="4">
            </input>
          </label>
          <label style={modalStyle.label} key="5">
            Adress
          <input
              required
              name="adress"
              type="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              style={modalStyle.input} key="6">
            </input>
          </label>
          <label style={modalStyle.label} key="7">
            City
          <input
              required
              name="city"
              type="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={modalStyle.input} key="8">
            </input>
          </label>
          <label style={modalStyle.label} key="9">
            Country
          <input
              required
              name="country"
              type="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={modalStyle.input} key="10">
            </input>
          </label>
          <label style={modalStyle.label} key="9">
            Pictures
          <input
              required
              name="pics"
              type="pics"
              value={pics}
              onChange={(e) => setPics([...pics, ...e.target.value])}
              style={modalStyle.input} key="10">
            </input>
          </label>
          <button>Add more pics</button>
          <br />
          <br />
          <br />
          <label>
            <Slider
              defaultValue={1}
              getAriaValueText={valuetextBeds}
              step={1}
              valueLabelDisplay="on"
              max={10}
              min={1}
              onChange={(e) => setBeds(e.target.value)}
            />
            Number of beds
          </label>
          <label>
            <Slider
              defaultValue={1}
              getAriaValueText={valuetextPrice}
              step={10}
              valueLabelDisplay="on"
              max={1000}
              min={10}
              onChange={(e) => setPrice(e.target.value)}
            />
            Price per night $
          </label>
          <input
            type="checkbox"
            name="wifi"
            checked={boxes.wifi}
            onChange={(e) => setFeatureIds([...featureIds, ...{ wifi: e.target.value}])}
            /> <label>Wifi</label><br></br>
          <input
            type="checkbox"
            name="tv"
            checked={boxes.tv}
            onChange={(e) => setFeatureIds([...featureIds, ...{ tv: e.target.value}])}
            /> <label>TV</label><br></br>
          <input
            type="checkbox"
            name="breakfast"
            checked={boxes.breakfast}
            onChange={(e) => setFeatureIds([...featureIds, ...{ breakfast: e.target.value}])}
            /> <label>Breakfast</label><br></br>
          <input
            type="checkbox"
            name="gym"
            checked={boxes.gym}
            onChange={(e) => setFeatureIds([...featureIds, ...{ gym: e.target.value}])}
            /><label>Gym</label><br></br>
          <input
            type="checkbox"
            name="kitchen"
            checked={boxes.kitchen}
            onChange={(e) => setFeatureIds([...featureIds, ...{ kitchen: e.target.value}])}
            /><label>Kitchen</label><br></br>
          <input
            type="checkbox"
            name="smoking"
            checked={boxes.smoking}
            onChange={(e) => setFeatureIds([...featureIds, ...{ smoking: e.target.value}])}
          /><span>Smoking</span><br></br>
          <input
            type="checkbox"
            name="animalF"
            checked={boxes.animalF}
            onChange={(e) => setFeatureIds([...featureIds, ...{ animalFriendly: e.target.value}])}
            /><label>Animal Frienldy</label><br></br>
          <input
            type="checkbox"
            name="pool"
            checked={boxes.pool}
            onChange={(e) => setFeatureIds([...featureIds, ...{ pool: e.target.value}])}
            /><label>Pool</label><br></br>
          <input
            type="checkbox"
            name="parking"
            checked={boxes.parking}
            onChange={(e) => setFeatureIds([...featureIds, ...{ parking: e.target.value}])}
            /><label>Parking</label><br></br>


          <button style={{ ...modalStyle.button, ...modalStyle.btnIn }} key="11">Create rental</button>
        </form>
      </div>


    </div>
  )
}

export default Radium(AddNewRental);


const modalStyle = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    minWidth: "100px",
    minHeight: "400px",
    padding: "20px 40px 40px 40px",
    borderRadius: "6px",
    boxShadow: '0 8px 6px -6px black',
    backgroundColor: "#fefefe",
  },
  label: {
    marginBottom: "0.5em",
    color: "#444",
    fontWeight: "lighter",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    width: "100%",
    padding: "10px 10px",
    borderRadius: "5px",
    border: "1px solid #d6d1d5",
    marginTop: "5px",
  },
  button: {
    minWidth: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    borderRadius: "4px",
    ':hover': {
      backgroundColor: "#A8BACE",
      border: "none",
      color: "#fefefe"
    }
  },
  btnIn: {
    backgroundColor: "#22223B",
    border: "none",
    color: "#fefefe",
    padding: "1.2em",
  },
  btnUp: {
    border: "solid #22223B 2px",
    backgroundColor: "white",
    color: "#22223B",
    padding: "0.938em",
  },
}






