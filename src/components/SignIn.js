import { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import Radium from 'radium'
import { useEffect } from 'react';

function SignIn(props) {
  const { isLoggedIn, logInUser } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badCredentials, setBadCredentials] = useState(false)

  useEffect(() => {
    if (isLoggedIn.error === 'No match.') {
  
      setBadCredentials(true)
    }
    
  }, [isLoggedIn])

  const handleSubmit = async e => {
 
  
    e.preventDefault()


    const inputUser = {
      email: email,
      password: password
    }

    await logInUser(inputUser)

    if (badCredentials) {
      props.isClicked()
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={modalStyle.form}>
        <h1>Log in</h1>
        <label style={modalStyle.label} key="1">
          Email:
          <input
            required
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={modalStyle.input} key="2" >
          </input>
        </label>
        <label style={modalStyle.label} key="3">
          Password
          <input
            required
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={modalStyle.input} key="4">
          </input>
        </label>
        {badCredentials ? <a>Bad credentials</a> : ''}
        <button style={{ ...modalStyle.button, ...modalStyle.btnIn }}  key="5">Log in</button>
      </form>
    </div>
  )
}

export default Radium(SignIn)

const modalStyle = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    minWidth: "100px",
    minHeight: "300px",
    padding: "20px 40px 40px 40px",
    boxShadow: "0px 8px 36px #222",
    backgroundColor: "#fefefe",
    borderRadius: "6px",
  },
  label: {
    marginBottom: "0.5em",
    color: "#444",
    fontWeight: "lighter",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    width: "100%",
    padding: "10px 10px",
    borderRadius: "5px",
    border: "1px solid #d6d1d5",
    marginTop: "5px",
  },
  button: {
    minWidth: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    borderRadius: "4px",
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      backgroundColor: "#047361",
      border: "none",
      color: "#fefefe",
      transform: 'scale(1.05)'
    }
  },
  btnIn: {
    backgroundColor: "#005751",
    border: "none",
    color: "#fefefe",
    padding: "1.2em",
  },
  btnUp: {
    border: "solid #22223B 2px",
    backgroundColor: "white",
    color: "#22223B",
    padding: "0.938em",
  },
}