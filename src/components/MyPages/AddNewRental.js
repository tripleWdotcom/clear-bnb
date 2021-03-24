import Radium from 'radium'
import { useState, useContext } from 'react'
import { HouseContext } from '../../contexts/HouseContext'
import { UserContext } from '../../contexts/UserContext'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

function AddNewRental() {
  const { addNewRental } = useContext(HouseContext)
  const { isLoggedIn } = useContext(UserContext)

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [slogan, setSlogan] = useState("");
  const [adress, setAdress] = useState("");
  const [pics, setPics] = useState(['url']);
  const [beds, setBeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [featureIds, setFeatureIds] = useState([
    { name: 'wifi', value: 'false' },
    { name: 'tv', value: false },
    { name: 'breakfast', value: false },
    { name: 'gym', value: false },
    { name: 'kitchen', value: false },
    { name: 'smoking', value: false },
    { name: 'animalFriendly', value: false },
    { name: 'pool', value: false },
    { name: 'parking', value: false }
  ]);
  const [isOffer, setIsOffer] = useState(false)
  const [showCalOne, setShowCalOne] = useState(false)
  const [showCalTwo, setShowCalTwo] = useState(false)
  const [showCalThree, setShowCalThree] = useState(false)

  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  const handleSubmit = async e => {
    console.log('Add new rental button clicked!')

    console.log(`
      FirstName: ${isLoggedIn[0].firstName} 
      LastName: ${isLoggedIn[0].lastName}
      Email: ${isLoggedIn[0].email}
      UserId: ${isLoggedIn[0]._id}
      City: ${city}
      Country: ${country}
      Slogan: ${slogan}
      Description: ${description}
      Adress: ${adress}
      Beds: ${beds}
      Price: ${price}
    `);
    console.log('Pics: ', pics)
    console.log('FeatureIds: ', featureIds)
    console.log('Date Ranges: ', ranges)

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

  const handleSelect = (newRange, name) => {
    console.log('Ranges', newRange)
    console.log('name ', name)
    let copyOfRanges = [...ranges]

    switch (name) {
      case 'calOne': {
        let item = { ...copyOfRanges[0] }
        item = newRange
        copyOfRanges[0] = item
        setRanges(copyOfRanges)
      };
        break;
      case 'calTwo': {
        let item = { ...copyOfRanges[1] }
        item = newRange
        copyOfRanges[1] = item
        setRanges(copyOfRanges)
      };
        break;
      case 'calThree': {
        let item = { ...copyOfRanges[2] }
        item = newRange
        copyOfRanges[2] = item
        setRanges(copyOfRanges)
      };
        break;
    }
  }

  const updateAmenities = (newValue, name) => {
    featureIds.map((f, i) => {
      if (f.name === name) {
        featureIds[i].value = newValue
        return;
      }
    })
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

          <label style={modalStyle.label} key="11">
            Pictures
             </label>
          {pics.map((p, i) => (
            <label style={modalStyle.label} key={'a' + i}>
              <input
                required
                placeholder="Input picture url"
                name="url"
                type="url"
                onChange={(e) => pics[i] = e.target.value}
                style={modalStyle.input} key={'b' + i}>
              </input>
              {i > 0 ? <h6 style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-10px', ':hover': { color: 'red' } }} key={'c' + i}
                onClick={() => setPics([...pics.slice(0, i), ...pics.slice(i + 1)])}>remove</h6> : ''}
            </label>
          )
          )}

          {pics.length < 5 ? <div style={{ cursor: 'pointer', ':hover': { color: 'red' } }} onClick={() => setPics([...pics, 'url'])}>+ Add more pictures</div> : 'Get more pictures with premium'}

          <br />
          <br />
          <br />
          <br />
          <br />
          <label style={modalStyle.label} key="12">
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
          <label style={modalStyle.label} key="13">
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
              <label style={modalStyle.label} key="14">
                Amenities
             <br />

                {featureIds.map((f, i) => (
                  <>
                    <FormControlLabel
                      value={f.value}
                      control={<Switch color="primary" />}
                      label={f.name}
                      labelPlacement="end"
                      onChange={(e, val) => updateAmenities(val, f.name)}
                      key={'d' + i}
                    />
                    <br />
                  </>
                )
                )}
              </label>
              <br />
              <br />
              <label>
                Do you wanna make this a special offer?
              <FormControlLabel
                  value={isOffer}
                  control={<Switch color="primary" />}
                  label={isOffer ? 'Yes' : 'No'}
                  labelPlacement="end"
                  onChange={(e, val) => {
                    setIsOffer(val); setRanges([{
                      startDate: new Date(),
                      endDate: new Date(),
                      key: 'selection',
                    }]);
                  }}
                />
              </label>
            </FormGroup>
          </FormControl>
          <br />
          <br />

          {ranges.map((r, i) => (
            <label style={modalStyle.label} key={'e' + i}>
              Your {isOffer ? '' : i == 0 ? '1st' : i == 1 ? '2nd' : '3d'} availablitity range
              <input
                required
                name="startDate"
                value={'Start date: ' + r.startDate.toDateString()}
                onChange={(e) => console.log('What is the new start date ', i, e.target.value)}
                onClick={() => { (i == 0 ? setShowCalOne(!showCalOne) : i == 1 ? setShowCalTwo(!showCalTwo) : setShowCalThree(!showCalThree)); console.log('im clicking to show cal') }}
                style={modalStyle.input} key={'f' + i}>
              </input>
              <input
                required
                disabled
                name="endDate"
                value={'End date: ' + r.endDate.toDateString()}
                onChange={(e) => console.log('What is the new end date', i, e.target.value)}
                style={modalStyle.input} key={'g' + i}>
              </input>
              {i > 0 ? <h6 style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-10px', ':hover': { color: 'red' } }} key={'h' + i}
                onClick={() => setRanges([...ranges.slice(0, i), ...ranges.slice(i + 1)])}>remove date range</h6> : ''}
            </label>
          )
          )}
          {ranges.length < 3 && !isOffer ? <div onClick={() => setRanges([...ranges, {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          }])}>+ Add more date ranges</div> : !isOffer ? 'Get more date ranges with premium' : ''}

          {showCalOne ? <DateRange
            className="calOne"
            minDate={new Date()}
            showPreview={true}
            onChange={e => handleSelect(e.selection, 'calOne')}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            weekStartsOn={1}
            ranges={[ranges[0]]}
          /> : showCalTwo ? <DateRange
            className="calTwo"
            minDate={ranges[0].endDate}
            showPreview={true}
            onChange={e => handleSelect(e.selection, 'calTwo')}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            weekStartsOn={1}
            ranges={[ranges[1]]}
          /> : showCalThree ? <DateRange
            className="calThree"
            minDate={ranges[1].endDate}
            showPreview={true}
            onChange={e => handleSelect(e.selection, 'calThree')}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            weekStartsOn={1}
            ranges={[ranges[2]]}
          /> : ''}

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
  },
  adding: {
    cursor: 'pointer',
    ':hover': {
      color: "red"
    }
  }
}






