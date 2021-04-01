import Radium from 'radium'
import { useState, useContext, useEffect } from 'react'
import { HouseContext } from '../../contexts/HouseContext'
import { UserContext } from '../../contexts/UserContext'
import { FeatureContext } from '../../contexts/FeatureContext'
import Slider from '@material-ui/core/Slider'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import parking from '../../images/parking.png';
import nosmoking from '../../images/nosmoking.png';
import gym from '../../images/gym.png';
import tv from '../../images/tv.png';
import animalFriendly from '../../images/animalFriendly.png';
import wifi from '../../images/wifi.png';
import breakfast from '../../images/breakfast.png';
import kitchen from '../../images/kitchen.png';
import pool from '../../images/pool.png';

function AddNewRental(props) {

  const { addNewRental } = useContext(HouseContext)
  const { isLoggedIn } = useContext(UserContext)
  const { features } = useContext(FeatureContext)

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [slogan, setSlogan] = useState("");
  const [adress, setAdress] = useState("");
  const [pics, setPics] = useState(['url']);
  const [beds, setBeds] = useState(1);
  const [price, setPrice] = useState(10);
  const [featureIds, setFeatureIds] = useState([
    { name: 'wifi', value: false },
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

  const handleSubmit = async (e) => {

    e.preventDefault()

    let idsOfFeatures = []
    featureIds.map(f => {
      if (f.value == true) {
        let featureObj = features.filter(fea => fea.name == f.name)

        idsOfFeatures.push(featureObj[0]._id)
      }
    })

    let unixTimeDates = []
    ranges.map(r => {
      unixTimeDates.push({ availableStart: r.startDate.getTime(), availableEnd: r.endDate.getTime() })
    })

    const newRental = {
      firstName: isLoggedIn[0].firstName,
      lastName: isLoggedIn[0].lastName,
      email: isLoggedIn[0].email,
      userId: isLoggedIn[0]._id,
      city: city,
      country: country,
      slogan: slogan,
      description: description,
      address: adress,
      bedrooms: beds,
      price: price,
      pics: pics,
      featureIds: idsOfFeatures,
      dateRanges: unixTimeDates,
      isOffer: isOffer
    }
    await addNewRental(newRental)

    props.setNewAction('showRentals')

  }

  function valuetextBeds(value) {
    return `${value}`;
  }
  function valuetextPrice(value) {
    return `${value}`;
  }

  const handleSelect = (newRange, name) => {

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
          <h2 style={{ textAlign: 'center' }}>Create your new rental</h2>
          <br />
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
              placeholder="e.g. A lovely house by the lake..."
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
              placeholder="e.g. Sip on your coffee while looking out over the lake..."
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
              placeholder="e.g. Lake road 34"
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
              placeholder="e.g. Amsterdam"
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
              placeholder="e.g. Netherlands"
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

          {pics.length < 5 ? <div style={{ cursor: 'pointer', ':hover': { color: 'green' } }} onClick={() => setPics([...pics, 'url'])}>+ Add more pictures</div> : 'Get more pictures with premium'}
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
              defaultValue={10}
              getAriaValueText={valuetextPrice}
              step={10}
              valueLabelDisplay="on"
              max={500}
              min={10}
              onChangeCommitted={(e, val) => setPrice(val)}
            />
            Price per night €
          </label>
          <br />
          <br />
          <FormControl component="fieldset">
            <FormGroup aria-label="position">
              <label style={modalStyle.label} key="14">
                Amenities
             <br />
                <br />
                {featureIds.map((f, i) => (
                  <><div style={{ display: 'inline-flex' }} key={'p' + i}><img style={{
                    width: '20px', height: '20px', marginTop: '8px', marginRight: '15px'
                  }}
                    src={
                      f.name == 'tv' ? tv
                        : f.name == 'wifi' ? wifi
                          : f.name == 'parking' ? parking
                            : f.name == 'smoking' ? nosmoking
                              : f.name == 'gym' ? gym
                                : f.name == 'animalFriendly' ? animalFriendly
                                  : f.name == 'breakfast' ? breakfast
                                    : f.name == 'kitchen' ? kitchen : f.name == 'pool' ? pool : ''}
                    alt={f.name}
                  />

                    <FormControlLabel
                      value={f.value}
                      control={<Switch color="primary" />}
                      label={f.name === 'smoking' ? 'No ' + f.name
                        : f.name === 'animalFriendly' ? f.name.charAt(0).toUpperCase() + f.name.slice(1, 6) + ' ' + f.name.slice(6).toLowerCase()
                          : f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                      labelPlacement="end"
                      onChange={(e, val) => updateAmenities(val, f.name)}
                      key={'d' + i}
                    /></div>
                    <br />
                  </>
                )
                )}
              </label>
              <br />
              <br />
              <label style={modalStyle.label} key="15">
                Do you wanna make this a special offer?
                 <br />
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
              {isOffer ? 'A' : i == 0 ? '1st a' : i == 1 ? '2nd a' : '3d a'}vailablitity range
              <input
                required
                name="startDate"
                value={'Start date: ' + r.startDate.toDateString()}
                onClick={() => { (i == 0 ? setShowCalOne(!showCalOne) : i == 1 ? setShowCalTwo(!showCalTwo) : setShowCalThree(!showCalThree)) }}
                style={modalStyle.input} key={'f' + i}>
              </input>
              <input
                required
                disabled
                name="endDate"
                value={'End date: ' + r.endDate.toDateString()}

                style={modalStyle.input} key={'g' + i}>
              </input>
              {i > 0 ? <h6 style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-10px', ':hover': { color: 'red' } }} key={'h' + i}
                onClick={() => { setShowCalOne(false); setShowCalTwo(false); setShowCalThree(false); setRanges([...ranges.slice(0, i), ...ranges.slice(i + 1)]); }}>remove</h6> : ''}
            </label>
          )
          )}
          {ranges.length < 3 && !isOffer ? <div style={{ cursor: 'pointer', ':hover': { color: 'green' } }} key="16" onClick={() => setRanges([...ranges, {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          }])}>+ Add more date ranges</div> : !isOffer ? 'Get more date ranges with premium' : ''}

          {showCalOne ? <><DateRange
            className="calOne"
            minDate={new Date()}
            showPreview={true}
            onChange={e => handleSelect(e.selection, 'calOne')}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            weekStartsOn={1}
            ranges={[ranges[0]]}
          /><p style={{ cursor: 'pointer' }} onClick={() => setShowCalOne(!showCalOne)}>Add dates</p></>
            : showCalTwo ? <><DateRange
              className="calTwo"
              minDate={ranges[0].endDate}
              showPreview={true}
              onChange={e => handleSelect(e.selection, 'calTwo')}
              moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              showMonthAndYearPickers={false}
              weekStartsOn={1}
              ranges={[ranges[1]]}
            /><p style={{ cursor: 'pointer' }} onClick={() => setShowCalTwo(!showCalTwo)}>Add dates</p></>
              : showCalThree ? <><DateRange
                className="calThree"
                minDate={ranges[1].endDate}
                showPreview={true}
                onChange={e => handleSelect(e.selection, 'calThree')}
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                weekStartsOn={1}
                ranges={[ranges[2]]}
              /><p style={{ cursor: 'pointer' }} onClick={() => setShowCalThree(!showCalThree)}>Add dates</p></> : ''}
          <br />
          <br />
          <button style={{ ...modalStyle.button, ...modalStyle.btnIn }} key="17">Create rental</button>

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
    width: "100%",

    padding: "20px 40px 40px 40px",
    borderRadius: "6px",
    boxShadow: '0 8px 6px -6px black',
    backgroundColor: "#fefefe",
  },
  label: {
    marginBottom: "0.5em",
    color: "#444",
    fontWeight: "500px",
    fontSize: '17px',
    fontFamily: 'Roboto, sans-serif'
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
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px'
  },
  button: {
    minWidth: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    borderRadius: "4px",
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      backgroundColor: "#047361",
      border: "none",
      color: "#fefefe",
      transform: 'scale(1.05)'
    }
  },
  btnIn: {
    backgroundColor: "#005751",
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






