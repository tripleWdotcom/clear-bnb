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

  const marks = [
    {
      value: 0,
      label: '1',
    },
    {
      value: 1,
      label: '2',
    },
    {
      value: 2,
      label: '3',
    },
    {
      value: 3,
      label: '4',
    },
    {
      value: 4,
      label: '5',
    },
    {
      value: 5,
      label: '6',
    },
    {
      value: 6,
      label: '7',
    },
    {
      value: 7,
      label: '8',
    },
    {
      value: 8,
      label: '9',
    },
    {
      value: 9,
      label: '10',
    },
  ];


  function valuetext(value) {
    return `${value}`;
  }


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
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="on"
          />
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

