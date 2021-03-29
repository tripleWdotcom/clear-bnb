import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import '../pages/cal.css'
import searchBtn from '../images/searchButton.png';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";

const Calen = () => {
  let history = useHistory();

  const [toggle, setToggle] = useState(false)
  const searchButton = async () => {
    localStorage.setItem('startDateChosen', sd.getTime())
    localStorage.setItem('endDateChosen', ed.getTime())
    history.push("/home-results");
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  let sd = state[0].startDate
  let ed = state[0].endDate


  //console.log("start date: ", state[0].startDate, " In timestamp:", sd.getTime())
  //console.log("end date:", state[0].endDate, " In timestamp:", (ed ? ed.getTime() : "Not defined yet"))
  return (<div>

    <span>
      <div className="checkIn" style={styles.checkIn} onClick={() => { setToggle(!toggle) }}>
        <div style={{ color: 'black', WebkitUserSelect: 'none' }}>Check-In </div>{sd.toDateString()}
      </div>
      <div className="checkOut" style={styles.checkOut} onClick={() => { setToggle(!toggle) }}>
        <div style={{ color: 'black', WebkitUserSelect: 'none' }}> Check-Out</div>{ed.toDateString()}
      </div>
    </span>
    <div className="calendarContainer">
      {
        toggle ? <DateRange
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          disabledDates={[1616488666543]}
          minDate={new Date()}
          showDateDisplay={false}
          rangeColors={['#82975b']}
          showMonthAndYearPickers={false}
          showPreview={true}
          weekStartsOn={1}
          // months={2}
          // direction={'horizontal'}
          className={'calen'}
        >
        </DateRange> : null
      }
    </div>
    <br /><br />
    <SearchIcon style={{ cursor: 'pointer', fontSize: '250%' }} onClick={searchButton} />
    {/* <img src={searchBtn} style={{ height: '50px', cursor: 'pointer' }} alt="buttonnn" onClick={searchButton} /> */}
  </div>
  )
}

const styles = {
  checkIn: {
    backgroundColor: 'white',

    borderRadius: '5px',
    fontFamily: 'initial',
    padding: '5px',
    textAlign: 'center',
    fontSize: '18px',
    border: '1px solid #d3d3d3',
    margin: '10px',
    outline: 'none',
    webKitUserSelect: 'none',
    color: '#047361'

  },
  checkOut: {
    backgroundColor: 'white',

    borderRadius: '5px',
    fontFamily: 'initial',
    padding: '5px',
    textAlign: 'center',
    fontSize: '18px',
    border: '1px solid #d3d3d3',
    outline: 'none',
    color: '#F24738',
    margin: '10px',


  }



}

export default Calen


