import Radium from 'radium'
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";
import Modal from './Modal'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import MemberPage from './MemberPage'
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../images/logoNoBackgound.png';


const Navbar = () => {
  

  let history = useHistory();

  const { isLoggedIn, logOutUser } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [showMyPage, setShowMyPage] = useState(false)

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
    history.push("/");
  }

  return (
    <>

      <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center" >
  <Hidden xsUp>
        <Grid item style={{ color: "crimson", fontSize: "30px" }}>
          <img src={logo} style={styles.logoDesktop}/>
        </Grid>
        </Hidden>
         
        <Hidden smUp>
         
          <Grid item style={{ color: "crimson", fontSize: "30px" }}>
          <img src={logo} style={styles.logoMobile}/>
        </Grid>

</Hidden>
        <Grid item>
          <div key="1" style={styles.home} onClick={goHome}>Home</div>
        </Grid>
       {/*  {isUserLoggedIn && !showModal ? <Grid  item><div key="2" style={styles.userName} onClick={() => { history.push('/mypage') }}>👤 {isLoggedIn[0].firstName}</div> </Grid> : ''} */}
        {isUserLoggedIn && !showModal ? <Grid item><div key="2" style={styles.userName} onClick={() => { history.push('/mypage') }}><PersonIcon fontSize="large" /></div> </Grid> : ''}

        <Grid item>
          <div key="3" style={styles.home} onClick={() => { history.push('/FAQ') }}>FAQ</div>
        </Grid>

        {!isUserLoggedIn ? <Grid item><div key="4" style={styles.signIn} onClick={() => { signInModal() }}>Sign In</div> </Grid> : <Grid item> <div style={styles.signIn} onClick={logOut}>Log out</div></Grid>}

        {showModal ? <Modal closeModal={() => setShowModal(false)} /> : ''}
        {showMyPage ? <MemberPage /> : ''}


      </Grid>


    </>
  )
}

const styles = {

  navbar: {

  },

  home: {
    fontSize: "20px",
    cursor: 'pointer',
    ':hover': {
      color: 'crimson',
      WebkitTransform: "scale(1.3)",
      transition: '0.3s'
    },
  },
  signIn: {
    
    color: 'whitesmoke',
    backgroundColor: 'crimson',
    borderRadius: '8px',
    textDecoration: 'none',
    padding: '6px',
    cursor: 'pointer',
    ':hover': {
      WebkitTransform: "scale(1.2)",
      transition: '0.3s'
    },


  },

  userName: {
    fontSize: "20px",
    cursor: 'pointer',
    ':hover': {
      color: 'crimson',
      WebkitTransform: "scale(1.3)",
      transition: '0.3s'
    },
  },

  logoDesktop: {
    width: '50%',
  

  },

  logoMobile: {
  
    width: '50%',
    display: 'block',
    margin: '0 auto',
   
    
    
  },
  
 

}



export default Radium(Navbar);

