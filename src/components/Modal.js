import SignUp from './SignUp'
import SignIn from './SignIn'
import { useState} from 'react'


export default function Modal() {
  const [isSignUp, setIsSignUp] = useState(false)

  const signUpForm = () => {
    setIsSignUp(true)
  }

  const closeSignUp = () => {
    setIsSignUp(false)
  }


  return (
    <div style={modalStyle}>
      {isSignUp ? <SignUp /> : <SignIn />}
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

