import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { HouseContext } from '../contexts/HouseContext'

export default function HouseDetails(props) {

  const { _id } = useParams()
  const { houses } = useContext(HouseContext)
  const rental = houses.find(r => r._id === _id)

  return (
    <div>
      <h1>{rental.slogan}</h1>


      <p>{rental.feautureIds}</p>

    </div>

  )

}