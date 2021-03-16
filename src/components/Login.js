import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useHistory } from "react-router-dom";

function Login() {

  const { logInUser }  = useContext(UserContext)
  //const history = useHistory()

  const email = useRef()
  const password = useRef()

  const login = async e => {
    e.preventDefault()

    //history.push("/login")
    const inputUser = {
      email: email.current.value,
      password: password.current.value
    }
    const U = await logInUser(inputUser)
    console.log('logInUser', U)
    localStorage.setItem("currentUser", JSON.stringify(U))
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log('current User email', currentUser)
  }

  return (
    <form
      key="1"
      style={styles.form}
      onClick={login}
    >
      <input required ref={email} key="2" style={styles.input} placeholder="email.." />
      <input required ref={password} key="3" style={styles.input} placeholder="password.." />

      <button key="4"
        style={{ ...styles.input, ...styles.button }}
      >Log in</button>
    </form>
  )
}


const styles = {
  form: {
    width: '200',
    heigh: '100'
  },
  input: {
    width: '100%',
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