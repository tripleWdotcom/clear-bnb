import Radium from 'radium'
import Media from 'react-media';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useState } from 'react';

const Navbar = () => {
  const { logOutUser } = useContext(UserContext);
  let history = useHistory();
  const [signIn, setSignIn] = useState(true);
  const toggle = () => setSignIn(!signIn);


  const goHome = () => {
    history.push("/");
  }

  async function handleOnClick(url) {
    if (signIn) {
      history.push(url)
      toggle(!signIn)
    }
    else {
      await logOutUser
      toggle(!signIn)
      history.push("/");
    }

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
          <a style={styles.signIn} onClick={() => handleOnClick("/login")}>{signIn ? 'Sign in' : 'Sign out'}</a>

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
