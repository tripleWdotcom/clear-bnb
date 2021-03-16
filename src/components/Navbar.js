import Radium from 'radium'
import Media from 'react-media';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import SignIn from './SignIn'
import {useState} from 'react'

const Navbar = () => {

  let history = useHistory();

  const [showSignIn, setShowSignIn] = useState(false)

  const signInModal = () => {
    setShowSignIn(true)
  }

  const closeSignInModal = () => {
    setShowSignIn(false)
  }


  const goHome=()=>{
    history.push("/");
  }
  return (

    <Hidden xsDown >
      <nav className="navbar" style={styles.navbar}>

        <h1 style={{
          color: "crimson"
        }}>ClearBnB</h1>

        <div className="links"
          style={{
            marginLeft: 'auto'
          }}>
          <a style={styles.home} onClick={goHome}>Home</a>
          <a style={styles.signIn} onClick={signInModal}>Sign In</a>
          <a style={styles.signIn} onClick={closeSignInModal}>Close sign In</a>
          {showSignIn ? <SignIn /> : ''}
        </div>
      </nav>
    </Hidden>

  )
}

const styles = {

  navbar: {

    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    borderBottom: '1px solid whitesmoke',
  },

  home: {

    marginLeft: '16px',
    textDecoration: 'none',
    padding: '6px',
    cursor: 'pointer',
    ':hover': {
      color: 'crimson',
    },
  },
  signIn: {

    color: 'whitesmoke',
    backgroundColor: 'crimson',
    borderRadius: '8px',
    marginLeft: '16px',
    textDecoration: 'none',
    padding: '6px',
    cursor: 'pointer'

  }


}



export default Radium(Navbar);
