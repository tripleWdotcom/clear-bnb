import React, { createContext, useState, useEffect } from 'react';

// Creating a reference to this context
// to be used with the useContext hook in components
export const UserContext = createContext()

// Create function for UserContext
export default function UserContextProvider(props) {

  // A reactive state to store users
  const [users, setUsers] = useState([])


  // Get all users
  const fetchUsers = async () => {
    let res = await fetch('/rest/users')
    res = await res.json()
    setUsers(res)
  }

  // Get the user that is logged in if someone is logged in
  const loggedInUser = async () => {
    let res = await fetch('/api/login', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }

  // Log in user
  const logInUser = async userCredentials => {
    console.log('Context', userCredentials)
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userCredentials)
    })
    res = await res.json()
    return res;
  }

  // Log out user
  const logOutUser = async () => {
    let res = await fetch('/api/login', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json()
    return res;
  }

  // Add a new user
  const addUser = async user => {
    let res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json()
    user._id = res._id
    // Append a new user to the reactive users list
    // to trigger reactivity we replace the old list with a new 
    // by spreading the old list (a copy of it) and adding the new user
    setUsers([...users, user])
  }

  // Remove a user by id
  // Should we have this?
  const deleteUserById = async userId => {
    let res = await fetch('/api/users/:id', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userId)
    })
    res = await res.json()
    return res;
    let index = users.indexOf(res)
    users.splice(index, 1)
  }

  // The values we want the children components to reach and be able to use
  const values = {
    users,
    addUser,
    loggedInUser,
    logInUser,
    logOutUser,
  }

  //Calls one time, as mounted in Vue
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}

