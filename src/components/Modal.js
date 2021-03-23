import SignUp from './SignUp'
import SignIn from './SignIn'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'


export default function Modal() {
  const [isSignUp, setIsSignUp] = useState(false)
  const { isLoggedIn } = useContext(UserContext)
  const [isShowSignUp, setIsShowSignUp] = useState(false)

  useEffect(async () => {

    if (isLoggedIn.length > 0) {
      setIsSignUp(false)
      setIsShowSignUp(false)
    }
  }, [isLoggedIn])

  const signUpForm = () => {
    console.log('signUpForm clicked')
    setIsSignUp(true)
    setIsShowSignUp(true)
    console.log('isSignUp in Modal', isSignUp)
  }

  const closeSignUp = () => {
    setIsSignUp(false)
    console.log('isSignUp in Modal(const closeSignUp)', isSignUp)
  }

  const whenClicked = (value) => {
    setIsSignUp(false)
  }

  return (
    <div style={modalStyle}>
      {isSignUp && isShowSignUp ? <SignUp  /> : <SignIn />}
      <button style={modalStyle.form} onClick={signUpForm}>Sign Up</button>
      <button style={modalStyle.close} onClick={closeSignUp}>Close</button>
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
  
}

