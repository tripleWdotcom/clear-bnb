import Radium from 'radium'
import { useState, useContext } from 'react'
import { HouseContext } from '../../contexts/HouseContext'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useEffect } from 'react';

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
  const [numOfPics, setNumOfPics] = useState(['h'])
  const [beds, setBeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [featureIds, setFeatureIds] = useState([
    { wifi: false },
    { tv: false },
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
      Beds: ${beds}
      Price: ${price}
      FetureIds: ${featureIds}
    `);
    pics.map(p => {
      console.log('pics ', p)
    })
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

  // useEffect(() => {
  //   console.log('numOfPics has changed value', numOfPics)
  //   pictureFields()
  // }, [numOfPics])



  function valuetextBeds(value) {
    return `${value}`;
  }
  function valuetextPrice(value) {
    return `${value}`;
  }

  // const pictureFields = () => {
  //   console.log('I want to render pics')
  //   let inputFields = []
  //   for (let i = 0; i < numOfPics; i++) {
  //     inputFields.push(
  //       <label style={modalStyle.label} key={'a' + i}>
  //         Picture link
  //         <input
  //           required
  //           name="url"
  //           type="url"
  //           onChange={(e) => setPics([...pics, ...e.target.value])}
  //           style={modalStyle.input} key={'b' + i}>
  //         </input>
  //       </label>
  //     )
  //   }
  //   console.log('input fields', inputFields)
  //   return <>inputFields</>;
  // }





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
              maxLength="50"
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
              maxLength="250"
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

          {numOfPics.map((n, i) =>
            <label style={modalStyle.label} key={'a' + i}>
              Picture link
              <input
                required
                name="url"
                type="url"
                onChange={(e) => setPics([...pics, e.target.value])}
                style={modalStyle.input} key={'b' + i}>
              </input>
            </label>
          )
          }

          <div onClick={() => setNumOfPics([...numOfPics, ...'h'])}>+ Add more pics</div>
          <br />


          <br />
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
          <br />
          <br />
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
          <br />
          <br />
          <FormControl component="fieldset">
            <FormGroup aria-label="position">
              <label style={modalStyle.label} key="12">
                Amenities
             <br />
                <FormControlLabel
                  value={featureIds[0].wifi}
                  control={<Switch color="primary" />}
                  label="Wifi"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[0].wifi = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[1].tv}
                  control={<Switch color="primary" />}
                  label="Tv"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[1].tv = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[2].breakfast}
                  control={<Switch color="primary" />}
                  label="Breakfast"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[2].breakfast = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[3].gym}
                  control={<Switch color="primary" />}
                  label="Gym"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[3].gym = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[4].kitchen}
                  control={<Switch color="primary" />}
                  label="Kitchen"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[4].kitchen = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[5].smoking}
                  control={<Switch color="primary" />}
                  label="Smoking"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[5].smoking = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[6].animalFriendly}
                  control={<Switch color="primary" />}
                  label="Animal friendly"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[6].animalFriendly = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds.pool}
                  control={<Switch color="primary" />}
                  label="Pool"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[7].pool = val}
                />
                <br />
                <FormControlLabel
                  value={featureIds[8].parking}
                  control={<Switch color="primary" />}
                  label="Parking"
                  labelPlacement="end"
                  onChange={(e, val) => featureIds[8].parking = val}
                />
              </label>
            </FormGroup>
          </FormControl>
          <button style={{ ...modalStyle.button, ...modalStyle.btnIn }} key="15">Create rental</button>
        </form>
      </div>


    </div >
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
    fontSize: '20px',
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
  removePicField: {
    color: 'red'
  }
}






