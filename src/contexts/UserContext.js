import React, { createContext, useState } from 'react';

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

  // Add a new user
  const addUser = async user => {
    let res = await fetch('/rest/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json()
    user.id = res.id
    // Append a new user to the reactive users list
    // to trigger reactivity we replace the old list with a new 
    // by spreading the old list (a copy of it) and adding the new user
    setUsers([...users, user])
  }

  // Remove a user by id
  const removeUserById = async userId => {
    let res = await fetch('/rest/users/:id', {
      method: 'DELETE'
    })

  }

  // The values we want the children components to reach and be able to use
  const values = {
    users,
    addUser,
    removeUserById
  }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}
