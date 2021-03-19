import Radium from 'radium'
import Media from 'react-media';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import Modal from './Modal'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {

  let history = useHistory();

  const { isLoggedIn, logOutUser } = useContext(UserContext)

  console.log('currentUser in Navbar', isLoggedIn)
  console.log('currentUser in Navbar 2')
  const [showSignIn, setShowSignIn] = useState(false)
  const [showName,setShowName] = useState(false)
  useEffect(async () => {
   // const u = await loggedInUser
   // console.log('u', u)
    if (isLoggedIn.length > 0)
    {
      setLoginInUser();
      setShowName(true)
    }
    else
    { console.log('no one is here') }
  //  console.log('isLoggedIn i Navbar',isLoggedIn)
   }, [isLoggedIn]) 

  const signInModal = async() => {
    setShowSignIn(true)
  }

  const closeSignInModal = () => {
    setShowSignIn(false)
  }

  const logOut = async () => {
    const u = await logOutUser()
    console.log('Logged out: ', u)
  }

  

  const goHome = () => {
    history.push("/");
  }
  function setLoginInUser()  {
    setShowSignIn(false)
  }
  return (
    <>
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
            {showName ? <a>Hej {isLoggedIn[0].firstName} </a> :'' }
            <a style={styles.signIn} onClick={signInModal}>Sign In</a>
            <a style={styles.signIn} onClick={closeSignInModal}>Close sign In</a>
            <a style={styles.signIn} onClick={logOut}>Log out</a>
          </div>
          {showSignIn ? <Modal /> : ''}
        </nav>
      </Hidden>

    </>
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
