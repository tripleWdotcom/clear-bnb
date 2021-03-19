import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import '../pages/cal.css'

const Calen= ()=>{

  const [toggle, setToggle] = useState(false)

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  let sd = state[0].startDate
  let ed = state[0].endDate
  console.log("start date: ", state[0].startDate, " In timestamp:", sd.getTime())
  console.log("end date:", state[0].endDate, " In timestamp:", (ed ? ed.getTime() : "Not defined yet"))
  localStorage.setItem('startDateChosen', sd.getTime())
  localStorage.setItem('endDateChosen', ed.getTime())

  return(<div>
    <button onClick={() => { setToggle(!toggle) }} className="toggleButton">Choose Dates</button>
      {
        toggle ? <DateRange
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          disabledDates={[1616488666543]}
          showDateDisplay={false}
          rangeColors={['#82975b']}
          showMonthAndYearPickers={false}
          showPreview={true}
          weekStartsOn={1}
          className={'calen'}
        >
        </DateRange> : null
      }
  </div>
  )
}
export default Calen


