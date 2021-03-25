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

  const [showModal, setShowModal] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const [showMyPage, setShowMyPage] = useState(false)

  const toggleShowMyPage = () => setShowMyPage(!showMyPage)

  useEffect(async () => {
    console.log('who is logged in', isLoggedIn)
    console.log('is logged in array', isLoggedIn.length)
    console.log('who is logged error', isLoggedIn.error)
    if (!showModal && !Array.isArray(isLoggedIn) || isLoggedIn.length > 0) {
      if (isLoggedIn.error == 'Not logged in') {
        console.log('No one is logged in')
        setIsUserLoggedIn(false)
      } else if (isLoggedIn.error == 'Someone already logged in') {
        console.log('someone is already logged in')
        setIsUserLoggedIn(true)
      } else if (!isLoggedIn.error) {
        console.log('It is an object - im in')
        console.log('first name of logged in', isLoggedIn)
        setShowModal(false)
        setIsUserLoggedIn(true)
        console.log('isUserLoggedIn', isUserLoggedIn)
      }
    }


  }, [isLoggedIn])

  const signInModal = async () => {
    setShowModal(true)
  }

  const goHome = () => {
    history.push("/");
  }

  const logOut = async () => {
    setIsUserLoggedIn(false)
    await logOutUser()

  }

  return (
    <>
      <nav className="navbar" style={styles.navbar}>

        <h1 style={{
          color: "crimson"
        }}>ClearBnB</h1>

        <div className="links"
          style={{
            marginLeft: 'auto'
          }}>
          <a style={styles.home} onClick={goHome}>🏠Home</a>
          {isUserLoggedIn && !showModal ? <a style={styles.userName} onClick={() => { toggleShowMyPage() }}>Hej {isLoggedIn[0].firstName}</a> : ''}
          {!isUserLoggedIn ? <a style={styles.signIn} onClick={() => { signInModal() }}>Sign In</a> : <a style={styles.signIn} onClick={logOut}>Log out</a>}
        </div>
        {showModal ? <Modal closeModal={() => setShowModal(false)} /> : ''}
        {showMyPage ? <MemberPage /> : ''}
      </nav>

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

