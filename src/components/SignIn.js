import SignUp from './SignUp'
import { useState } from 'react'

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false)


  const signUpForm = () => {
    setIsSignUp(true)
  }

  const closeSignUp = () => {
    setIsSignUp(false)
  }

  return (
    <div style={modalStyle}>
      {isSignUp ? <SignUp /> : ''}
      <button style={modalStyle.form} onClick={signUpForm}>Sign Up</button>
      <button style={modalStyle.close} onClick={closeSignUp}>Close</button>
    </div>
  )
}

const modalStyle = {
  position: "fixed",
  left: "25%",
  right: "25%",
  top: "25%",
  bottom: "25%",
  margin: "auto",
  background: "grey",
  zIndex: '10',
  close: {
    marginBottom: '5px'
  }
}