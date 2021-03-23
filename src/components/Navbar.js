import Radium from 'radium'
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import Modal from './Modal'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import MemberPage from './MemberPage.js'

const Navbar = () => {

  let history = useHistory();

  const { isLoggedIn, logOutUser } = useContext(UserContext)

  const [showSignIn, setShowSignIn] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const [showMyPage, setShowMyPage] = useState(false)

  const toggleShowMyPage = () => setShowMyPage(!showMyPage)
  
  useEffect(async () => {

    if (isLoggedIn.length > 0) {
      setShowSignIn(false)
      setIsUserLoggedIn(true)
    }
  }, [isLoggedIn])


  const signInModal = async () => {
    setShowSignIn(true)
  }


  const goHome = () => {
    history.push("/");
  }
  const logOut = async () => {
    setIsUserLoggedIn(false)
    const u = await logOutUser()
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
            {isUserLoggedIn && <a style={styles.userName} onClick={() => { toggleShowMyPage()}}>Hej {isLoggedIn[0].firstName}</a>}
            {!isUserLoggedIn && <a style={styles.signIn} onClick={() => { signInModal() }}>Sign In</a>}
            <a style={styles.signIn} onClick={logOut}>Log out</a>
          </div>
          {showSignIn ? <Modal /> : ''}
          {showMyPage ? <MemberPage />: ''}
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

  },

  userName: {
    marginLeft: '16px',
    textDecoration: 'none',
    padding: '6px',
    cursor: 'pointer'
  }


}



export default Radium(Navbar);
