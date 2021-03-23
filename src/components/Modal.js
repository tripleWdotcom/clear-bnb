import SignUp from './SignUp'
import SignIn from './SignIn'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Radium from 'radium'


function Modal(props) {
  const { isLoggedIn } = useContext(UserContext)
  const [isShowSignUp, setIsShowSignUp] = useState(false)

  useEffect(async () => {
    if (!Array.isArray(isLoggedIn)) {
      setIsShowSignUp(false)
    }
  }, [isLoggedIn])

  const signUpForm = () => {
    console.log('signUpForm clicked')
    setIsShowSignUp(true)
    console.log('isSignUp in Modal', isShowSignUp)
  }

  const closeSignUp = () => {
    setIsShowSignUp(false)
    props.closeModal()
    console.log('isSignUp in Modal(const closeSignUp)', isShowSignUp)
  }

  const whenClicked = () => {
    console.log('Create account button from sign up is clicked')
    setIsShowSignUp(false)
    props.closeModal()
  }

  return (
    <div style={modalStyle}>
      <button style={modalStyle.close} onClick={closeSignUp}>X</button>
      {isShowSignUp ? <SignUp isClicked={whenClicked} /> : <SignIn isClicked={whenClicked}/>}
      {!isShowSignUp ? <button style={modalStyle.btn} key="2" onClick={signUpForm}>Sign Up</button> : ''}
    </div>
  )
}



const modalStyle = {
  position: "fixed",
  left: "auto",
  right: "auto",
  top: "15%",
  bottom: "auto",
  margin: "auto",
  background: "transparent",
  zIndex: '10',
  btn: {
    minWidth: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    borderRadius: "4px",
    backgroundColor: "#fefefe",
    border: "none",
    color: "#22223B",
    padding: "1.2em",
    boxShadow: "0px 8px 36px #222",
    ':hover': {
      backgroundColor: "#A8BACE",
      border: "none",
      color: "#fefefe"
    },
  },
  close: {
    cursor: "pointer",
    marginRight: "0.25em",
    marginBottom: "0.5em",
    borderRadius: "4px",
    backgroundColor: "#fefefe",
    border: "none",
    color: "#22223B",
    padding: "0.8em 1em",
    boxShadow: "0px 2px 36px #222",
    textAlign: 'right',
    ':hover': {
      backgroundColor: "#A8BACE",
      border: "none",
      color: "#fefefe"
    },
  }
}

export default Radium(Modal)