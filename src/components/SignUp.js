import Radium from 'radium'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'

function SignUp(props) {
  const { isLoggedIn , addUser} = useContext(UserContext)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [badCredentials, setBadCredentials] = useState(false)

  useEffect(() => {
    if (isLoggedIn.error === 'Email already in use') {
      console.log('Im in bad credentials for sign up')
      setBadCredentials(true)
    }
  }, [isLoggedIn])

  const handleSubmit = async e => {
    console.log('Add user button clicked!')

    console.log(`
      FirstName: ${firstName}
      LastName: ${lastName}
      Email: ${email}
      Password: ${password}
      Password2: ${password2}
    `);

    e.preventDefault()

    if (!email || !password || !password2 || !firstName || !lastName) {
      setBadCredentials(true)
      return;
    }

    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }
    console.log('before addUser', newUser)

    await addUser(newUser)
    

    // CHECK IF EMAIL IS OK 

    if (badCredentials) {
      console.log('My credentials in Sign UP', badCredentials)
      props.isClicked()
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} style={modalStyle.form}>
        <h1>Sign up</h1>
        <label style={modalStyle.label} key="1">
          Firstname
          <input
            required
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={modalStyle.input} key="2">
          </input>
        </label>
        <label style={modalStyle.label} key="3">
          Lastname
          <input
            required
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={modalStyle.input} key="4">
          </input>
        </label>
        <label style={modalStyle.label} key="5">
          Email:
          <input
            required
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={modalStyle.input} key="6">
          </input>
        </label>
        <label style={modalStyle.label} key="7">
          Password
          <input
            required
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={modalStyle.input} key="8">
          </input>
        </label>
        <label style={modalStyle.label} key="9">
          Password
          <input
            required
            name="password"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            style={modalStyle.input} key="10">
          </input>
        </label>
        {badCredentials ? <a>Email already in use</a> : ''}
        <button style={{ ...modalStyle.button, ...modalStyle.btnIn }} key="11">Create account</button>
      </form>
    </div>

  )
}

export default Radium(SignUp)

const modalStyle = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    minWidth: "100px",
    minHeight: "400px",
    padding: "20px 40px 40px 40px",
    borderRadius: "6px",
    boxShadow: "0px 8px 36px #222",
    backgroundColor: "#fefefe",
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
    ':hover': {
      backgroundColor: "#A8BACE",
      border: "none",
      color: "#fefefe"
    }
  },
  btnIn: {
    backgroundColor: "#22223B",
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
