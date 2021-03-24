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
  const [numOfPics, setNumOfPics] = useState(1)
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
  const [isOffer, setIsOffer] = useState(false)
  const [numOfRanges, setNumOfRanges] = useState(1)
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

  useEffect(() => {
    console.log('How many ranges are their and how do they look?', ranges.length)
    console.log('Range', ranges)
  }, [ranges])



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
    console.log('the new range is', ranges)
    // setRange(range[0] = [ranges])
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
          {/* <label>
            Select how many pictures you want to upload.
            <h5>Want to upload more than 5 pictures? Get premium</h5>
            <select
              style={modalStyle.input} key="77"
              onChange={(e) => setNumOfPics(e.target.value)}>
              <option value="1" selected>1 picture</option>
              <option value="2">2 pictures</option>
              <option value="3">3 pictures</option>
              <option value="4">4 pictures</option>
              <option value="5">5 pictures</option>
            </select>
          </label> */}
          <label style={modalStyle.label} key="88">
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
              {i > 0 ? <h6 style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-10px', ':hover': { color: 'red' } }} key={'k' + i}
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
                  value={featureIds[7].pool}
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
                    }]); }}
                />
              </label>
            </FormGroup>
          </FormControl>
          <br />
          <br />

          {ranges.map((r, i) => (
            <label style={modalStyle.label} key={'y' + i}>
              Your {isOffer ? '' : i == 0 ? '1st' : i == 1 ? '2nd' : '3d'} availablitity range
              <input
                required
                name="startDate"
                value={'Start date: ' + r.startDate.toDateString()}
                onChange={(e) => console.log('What is the new start date ', i, e.target.value)}
                onClick={() => { (i == 0 ? setShowCalOne(!showCalOne) : i == 1 ? setShowCalTwo(!showCalTwo) : setShowCalThree(!showCalThree)); console.log('im clicking to show cal') }}
                style={modalStyle.input} key={'e' + i}>
              </input>
              <input
                required
                disabled
                name="endDate"
                value={'End date: ' + r.endDate.toDateString()}
                onChange={(e) => console.log('What is the new end date', i, e.target.value)}
                style={modalStyle.input} key={'f' + i}>
              </input>
              {i > 0 ? <h6 style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-10px', ':hover': { color: 'red' } }} key={'k' + i}
                onClick={() => setRanges([...ranges.slice(0, i), ...ranges.slice(i + 1)])}>remove date range</h6> : ''}
            </label>
          )
          )}
          {ranges.length < 3 && !isOffer ? <div onClick={() => setRanges([...ranges, {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          }])}>+ Add more date ranges</div> : ''}


          {/* <label key={'d' + numOfRanges}>
                Your {isOffer ? '' : numOfRanges == 1 ? 'first' : numOfRanges == 2 ? 'second' : 'third'} availablitity range
                <input
                  required
                  name="startDate"
                  value={'Start date: ' + range[0].startDate.toDateString()}
                  onChange={(e) => console.log('What is the new start date', e.target.value)}
                  onClick={() => { setShowCalOne(!showCalOne); console.log('im clicking to show cal') }}
                  style={modalStyle.input} key="33">
                </input>
                <input
                  required
                  disabled
                  name="endDate"
                  value={'End date: ' + range[0].endDate.toDateString()}
                  onChange={(e) => console.log('What is the new end date', e.target.value)}
                  style={modalStyle.input} key="35">
                </input> */}
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






