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
      <button onClick={signUpForm}>Sign Up</button>
      <button onClick={closeSignUp}>Close</button>
    </div>
  )
}

const modalStyle = {
  width: "300px",
  height: "300px",
  backgroundColor: 'purple'
}