import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext.js'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Login=(props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  
  const { logInUser, loggedInUser, logOutUser } = useContext(UserContext)
  const toggle = () => setModal(!modal);

  const username = useRef()
  const password = useRef()

  const login = async e => {
    e.preventDefault()

    setModal(!modal)
    const inputUser = {
      username: username.current.value,
      password: password.current.value
    }

    const U = await logInUser(inputUser)
    console.log('user', U)
    const User = await loggedInUser()
    localStorage.setItem("currentUser", JSON.stringify(User))
    //const currentUser = JSON.parse(localStorage.getItem("currentUser.username"))
    const currentUser = JSON.parse(localStorage.getItem("currentUser[0].username"))
    console.log('currentUser username', currentUser)
    
  }

  const logout = async e => {
    e.preventDefault()
    setModal(!modal)
    const loggedUser = await loggedInUser()
    localStorage.removeItem(loggedUser)
    await logOutUser(loggedUser)

  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}> 
        <ModalHeader toggle={toggle}>Login window</ModalHeader>
        <ModalBody>
          <div className="inputZon">
            <input required ref={username}  key="2" style={styles.input} placeholder="username.." />
          </div>
          <div className="inputZon">
            <input required ref={password}  key="3" style={styles.input} placeholder="password.." />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={login}>Log in</Button>{' '}
          <Button color="primary" onClick={logout}>Log out</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>    
  )
}

const styles = {

  input: {
    width: '10%',
    backgroundColor: '#ccc',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '25px',
    color: '#eee',
    ':focus': {
      outline: 'none'
    }
  },
  button: {
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#404449'
    }
  }
}

export default Login