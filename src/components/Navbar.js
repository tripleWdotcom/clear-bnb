import Radium from 'radium'
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import Modal from './Modal'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../images/bnb.svg';


const Navbar = () => {


  let history = useHistory();

  const { isLoggedIn, logOutUser } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(async () => {
  
    if (!showModal && !Array.isArray(isLoggedIn) || isLoggedIn.length > 0) {
      if (isLoggedIn.error == 'Not logged in') {
     
        setIsUserLoggedIn(false)
      } else if (isLoggedIn.error == 'Someone already logged in') {
     
        setIsUserLoggedIn(true)
      } else if (!isLoggedIn.error) {
   
        setShowModal(false)
        setIsUserLoggedIn(true)        
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
    history.push("/");
  }

  return (
    <>

      <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center" >
        <Hidden xsDown>
          <Grid item sm={6} md={6}style={{ color: "crimson", fontSize: "30px" }}>
            <img src={logo} style={styles.logoDesktop} />
          </Grid>
        </Hidden>

        <Hidden smUp>

          <Grid item style={{ color: "crimson", fontSize: "30px" }}>
            <img src={logo} style={styles.logoMobile} />
          </Grid>

        </Hidden>
        <Grid item>
          <div key="1" style={styles.home} onClick={goHome}>Home</div>
        </Grid>
     
        {isUserLoggedIn && !showModal ? <Grid item><div key="2" style={styles.userName} onClick={() => { history.push('/mypage') }}><PersonIcon fontSize="large" /></div> </Grid> : ''}

        <Grid item>
          <div key="3" style={styles.home} onClick={() => { history.push('/FAQ') }}>FAQ</div>
        </Grid>

        {!isUserLoggedIn ? <Grid item><div key="4" style={styles.signIn} onClick={() => { signInModal() }}>Sign In</div> </Grid> : <Grid item> <div style={styles.signIn} onClick={logOut}>Log out</div></Grid>}

        {showModal ? <Modal closeModal={() => setShowModal(false)} /> : ''}
     


      </Grid>


    </>
  )
}

const styles = {

  navbar: {

  },

  home: {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: '600px',
    fontSize: "20px",
    cursor: 'pointer',
    ':hover': {
      color: 'teal',
      WebkitTransform: "scale(1.3)",
      transition: '0.3s'
    },
  },
  signIn: {
    fontFamily: 'Mulish, sans-serif',
    color: 'white',
    cursor: 'pointer',
    padding: '10px 15px', borderRadius: '10px',
    border: 'none', backgroundColor: '#005751',
    outline: 'none',
    transition: 'all 500ms ease-in-out',
    ':hover': {
      backgroundColor: '#047361',
      transform: 'scale(1.05)'
    }


  },

  userName: {
    fontSize: "20px",
    cursor: 'pointer',
    ':hover': {
      color: 'teal',
      WebkitTransform: "scale(1.3)",
      transition: '0.3s'
    },
  },

  logoDesktop: {
    width: '35%',


  },

  logoMobile: {

    width: '30%',
    display: 'block',
    margin: '0 auto',



  },



}



export default Radium(Navbar);

