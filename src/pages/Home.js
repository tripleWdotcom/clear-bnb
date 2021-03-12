import { useContext, useEffect } from 'react'
import {UserContext} from '../contexts/UserContext'

export default function Home() {
  const { users, addUser, loggedInUser, logInUser, logOutUser } = useContext(UserContext)

  
  console.log(users)

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
    </div>
  )
}