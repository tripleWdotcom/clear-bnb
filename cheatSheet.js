import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { FeatureContext } from '../contexts/FeatureContext'
import { HouseContext } from '../contexts/HouseContext'
import { BookingContext } from '../contexts/BookingContext'

export default function Home() {
  const { addUser, loggedInUser, logInUser, logOutUser } = useContext(UserContext)
  const { fetchFeatures } = useContext(FeatureContext)
  const { addHouse, removeHouseById, fetchHousesByFilters, fetchHousesByCity, myRentals } = useContext(HouseContext)
  const { fetchBookingsByUserId, addBooking, deleteBookingById } = useContext(BookingContext)



  const us = async () => {
    let newUser = {
      email: "TYTYTY0@gmail.com",
      password: "hello123",
      firstName: "TYTY",
      lastName: "jtyyyyo",
      username: "TTT"
    }

    const user = await addUser(newUser)
    console.log(user)
  }

  const loged = async () => {
    const u = await loggedInUser()
    console.log(u)
  }

  const logIn = async () => {
    let credentials = {
      username: "TTT",
      password: "hello123"
    }

    const u = await logInUser(credentials)
    console.log(u)
  }

  const logOut = async () => {
    const u = await logOutUser()
    console.log(u)
  }

  const allFeatures = async () => {
    const u = await fetchFeatures()
    console.log(u)
  }

  const cityHouses = async () => {
    const u = await fetchHousesByCity("ma")
    console.log(u)
  }

  const housesByFilters = async () => {
    let filters = {
      bedroomsMin: 1,
      bedroomsMax: 4,
      priceMin: 10,
      priceMax: 400,
      availableStart: 1615536065000,
      availableEnd: 1638733653000,
      city: "Kaoma",
      wifi: null,
      tv: "604773bf04ac3c37f09f7f1a",
      breakfast: null,
      gym: null,
      kitchen: null,
      smoking: null,
      animalFriendly: null,
      pool: null,
      parking: null
    }
    const u = await fetchHousesByFilters(filters)
    console.log(u)
  }

  const addNewHouse = async () => {
    let newHouse = {
      city: "Malmö",
      country: "Sweden",
      description: "Hej hopp",
      slogan: "Cabin in the woods",
      address: "Malmövägen 3",
      pics: [],
      bedrooms: 2,
      price: 500,
      bathroom: 2,
      featureIds: ['604773bf04ac3c37f09f7f1a', '604773bf04ac3c37f09f7f1c'],
      availableStart: 1615372912000,
      availableEnd: 1639996912000,
      userId: "604b57b37318430af6bedb72"
    }
    const u = await addHouse(newHouse)
    console.log(u)
  }

  const showMyRentals = async () => {
    let userId = "604b57b37318430af6bedb72"
    const u = await myRentals(userId)
    console.log(u)
  }

  const removeHouse = async () => {
    let houseId = "604b7449fa684c1777a3a025"
    const u = await removeHouseById(houseId)
    console.log(u)
  }

  const usersBookings = async () => {
    let userId = "6047715d04ac3c37f09f7f10"
    const u = await fetchBookingsByUserId(userId)
    console.log(u)
  }

  const newBooking = async () => {
    let newBook = {
      houseId: "60476fc004ac3c37f09f7f07",
      userId: "6047715d04ac3c37f09f7f10",
      totalPrice: 3000,
      startDate: 1623321712000,
      endDate: 1623753712000
    }
    const u = await addBooking(newBook)
    console.log(u)
  }

  const removeBooking = async () => {
    let bookId = "604b7761fa684c1777a3a028"
    const u = await deleteBookingById(bookId)
    console.log(u)
  }






  return (
    <div>
      Home page
      <button onClick={us}>
        CLick to add user
      </button><br />
      <button onClick={logIn}>Log in</button>
      <br />
      <button onClick={logOut}>
        Log out
      </button>
      <br />
      <button onClick={loged}>
        CLick to see logged in user
      </button>
      <br />
      <button onClick={allFeatures}>
        CLick to see all features
      </button>
      <br />
      <button onClick={cityHouses}>
        CLick to see houses of city starting with 'M'
      </button>
      <br />
      <button onClick={housesByFilters}>
        CLick to see houses with filters
      </button>
      <br />
      <button onClick={addNewHouse}>
        Click to add a new house
      </button>
      <br />
      <button onClick={showMyRentals}>
        Click to show my rentals
      </button>
      <br />
      <button onClick={removeHouse}>
        Click to remove my house
      </button>
      <br />
      <button onClick={usersBookings}>
        Click to show my bookings
      </button>
      <br />
      <button onClick={newBooking}>
        Click to add a new booking
      </button>
      <br />
      <button onClick={removeBooking}>
        Click to remove a booking
      </button>
    </div>
  )
}