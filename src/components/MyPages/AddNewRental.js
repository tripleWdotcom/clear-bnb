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
  const [featureIds, setFeatureIds] = useState([
    { tv: false },
    { wifi: false },
    { breakfast: false },
    { gym: false },
    { kitchen: false },
    { smoking: false },
    { animalFriendly: false },
    { pool: false },
    { parking: false }
  ]);
  const [availableStart, setAvailableStart] = useState(0);
  const [availableEnd, setAvailableEnd] = useState(0);


  const handleSubmit = async e => {
    console.log('Add new rental button clicked!')

    console.log(`
      FirstName: ${firstName} 
      LastName: ${lastName}
      Email: ${email}
      UserId: ${userId}
      City: ${city}
      Country: ${country}
      Slogan: ${slogan}
      Description: ${description}
      Adress: ${adress}
      Pics: ${pics}
      Beds: ${beds}
      Price: ${price}
      FetureIds: ${featureIds}
    `);
    featureIds.map(f => {
      console.log('feature ', f)
    })

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

  function handleCheckBox(value) {
    console.log('Im checkboxing', value)
  }



  return (
    <div className="AddNewRental">
      <div>
        <form onSubmit={handleSubmit} style={modalStyle.form}>
          <h1>Add New Rental</h1>
          <label style={modalStyle.label} key="1">
            Slogan
          <textarea
              required
              name="slogan"
              cols="1"
              rows="2"
              maxlength="50"
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              style={modalStyle.input} key="2">
            </textarea>
          </label>
          <label style={modalStyle.label} key="3">
            Description
          <textarea
              required
              name="description"
              cols="1"
              rows="8"
              maxlength="250"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={modalStyle.input} key="4">
            </textarea>
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
              type="text"
              value={pics}
              onChange={(e) => setPics([...pics, ...e.target.value])}
              style={modalStyle.input} key="10">
            </input>
          </label>
          <button>Add more pics</button>
          <br />
          <br />
          <br />
          <label style={modalStyle.label} key="10">
            <Slider
              defaultValue={1}
              getAriaValueText={valuetextBeds}
              step={1}
              valueLabelDisplay="on"
              max={10}
              min={1}
              onChangeCommitted={(e, val) => setBeds(val)}
            />
            Number of beds
          </label>
          <label style={modalStyle.label} key="11">
            <Slider
              defaultValue={1}
              getAriaValueText={valuetextPrice}
              step={10}
              valueLabelDisplay="on"
              max={1000}
              min={10}
              onChangeCommitted={(e, val) => setPrice(val)}
            />
            Price per night $
          </label>
          <label style={modalStyle.label} key="12">
            Check the features of your house
             <br />
            <input
              type="checkbox"
              name="wifi"
              value={featureIds[0].wifi}
              checked={featureIds[0].wifi}
              onChange={(e, val) => console.log('val', val)}
            /> <label>Wifi</label><br></br>
            <input
              type="checkbox"
              name="tv"
              checked={featureIds.tv}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>TV</label><br></br>
            <input
              type="checkbox"
              name="breakfast"
              checked={featureIds.breakfast}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Breakfast</label><br></br>
            <input
              type="checkbox"
              name="gym"
              checked={featureIds.gym}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Gym</label><br></br>
            <input
              type="checkbox"
              name="kitchen"
              checked={featureIds.kitchen}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Kitchen</label><br></br>
            <input
              type="checkbox"
              name="smoking"
              checked={featureIds.smoking}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Smoking</label><br></br>
            <input
              type="checkbox"
              name="animalF"
              checked={featureIds.animalFriendly}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Animal Frienldy</label><br></br>
            <input
              type="checkbox"
              name="pool"
              checked={featureIds.pool}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Pool</label><br></br>
            <input
              type="checkbox"
              name="parking"
              checked={featureIds.parking}
              onChange={(e) => handleCheckBox(e.target.value)}
            /> <label>Parking</label><br></br>
          </label>


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






