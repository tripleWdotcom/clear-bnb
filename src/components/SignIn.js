import { useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import Radium from 'radium'

function SignIn() {
  const { logInUser} = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    console.log('Login button clicked!')

    console.log(`
      Email: ${email}
      Password: ${password}
    `);

    e.preventDefault()

    // setModal(!modal)
    const inputUser = {
      email: email,
      password: password
    }
    await logInUser(inputUser)
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
            style={modalStyle.input} key="2">
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
        <button style={{ ...modalStyle.button, ...modalStyle.btnIn }} key="5">Log in</button>
        <button style={{ ...modalStyle.button, ...modalStyle.btnUp }} key="6">Sign up</button>
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




// form > h1 {
//   display: flex;
//   justify - content: center;
//   font - family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue", sans - serif;
//   font - size: 2em;
//   font - weight: lighter;
//   margin - top: 0.25em;
//   color: #222;
//   letter - spacing: 2px;
// }

// .info {
//   padding - bottom: 1em;
//   padding - left: 0.5em;
//   padding - right: 0.5em;
// }





// select {
//   display: block;
//   width: 100 %;
//   height: 35px;
// }
// input[type = "checkbox"] {
//   display: inline - block;
//   width: auto;
//   margin - top: 2em;
//   margin - right: 10px;
// }




// .error {
//   color:#db2269;
//   font - size: 0.5em;
//   display: relative;
// }

// .submit {
//   width: 100 %;
//   display: flex;
//   flex - wrap: wrap;
// }





// const Login = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const { logInUser, loggedInUser, logOutUser } = useContext(UserContext)
//   const toggle = () => setModal(!modal);

//   const username = useRef()
//   const password = useRef()

//   const login = async e => {
//     e.preventDefault()

//     setModal(!modal)
//     const inputUser = {
//       username: username.current.value,
//       password: password.current.value
//     }

//     const U = await logInUser(inputUser)
//     console.log('user', U)
//     const User = await loggedInUser()
//     localStorage.setItem("currentUser", JSON.stringify(User))
//     //const currentUser = JSON.parse(localStorage.getItem("currentUser.username"))
//     const currentUser = JSON.parse(localStorage.getItem("currentUser[0].username"))
//     console.log('currentUser username', currentUser)

//   }

//   const logout = async e => {
//     e.preventDefault()
//     setModal(!modal)
//     const loggedUser = await loggedInUser()
//     localStorage.removeItem(loggedUser)
//     await logOutUser(loggedUser)
//   }

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>Login window</ModalHeader>
//         <ModalBody>
//           <div className="inputZon">
//             <input required ref={username} key="2" style={styles.input} placeholder="username.." />
//           </div>
//           <div className="inputZon">
//             <input required ref={password} key="3" style={styles.input} placeholder="password.." />
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={login}>Log in</Button>{' '}
//           <Button color="primary" onClick={logout}>Log out</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   )
// }
