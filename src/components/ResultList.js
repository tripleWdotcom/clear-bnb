
import { useContext } from 'react'
import {useHistory} from 'react-router-dom'

import { HouseContext } from '../contexts/HouseContext'

const ResultList = () => {
  const { houses } = useContext(HouseContext)
  const history=useHistory()

  const test = house => (

    <div
     key={house._id}
      onClick={() => history.push('/home-results/' + house._id)}
      >
      <h3>{house.slogan}</h3>
      <h3>{house.featureIds[0]}</h3>
    </div>
  )

  return (

    <div>
      the list of houses
      <div>{houses.map(house => test(house))}</div>
    </div>
  )


}

export default ResultList