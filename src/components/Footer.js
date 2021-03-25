import Radium from 'radium'
import Media from 'react-media';
import { useHistory } from "react-router-dom";
import Modal from './Modal'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import MemberPage from './MemberPage.js'


const Footer = () => {

   let history = useHistory();

   const { isLoggedIn, logOutUser } = useContext(UserContext)   
   const [showModal, setShowModal] = useState(false)
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
   const [showMyPage, setShowMyPage] = useState(false)
   const toggleShowMyPage = () => setShowMyPage(!showMyPage)

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
   },[isLoggedIn])

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
     <Media query="(max-width: 700px)">
      <nav className="footer" style={styles.footer}>
         <div className="links">
            <a style={styles.home} onClick={goHome}>🏠Home</a>
            {isUserLoggedIn && !showModal ? <a style={styles.userName} onClick={() => { toggleShowMyPage() }}>Hej {isLoggedIn[0].firstName}</a>:'' }
               {!isUserLoggedIn ? <a style={styles.signIn} onClick={() => { signInModal() }}>Sign In</a> : <a style={styles.signIn} onClick={logOut}>Log out</a>}
         </div>
            {showModal ? <Modal closeModal={() => setShowModal(false)} /> : ''}
            {showMyPage ? <MemberPage /> : ''}
      </nav>
   </Media>
   );
}
 
export default Radium(Footer);

const styles = {

   footer: {

      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '600px',
      backgroundColor:'white',
      margin: '0 auto',
      borderBottom: '1px solid whitesmoke',      
   },

   home: {

      marginLeft: '20px',
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
      marginLeft: '20px',
      textDecoration: 'none',
      padding: '6px',
      cursor: 'pointer'

   },

   userName: {
      marginLeft: '5px',
      textDecoration: 'none',
      padding: '6px',
      cursor: 'pointer'
   }


}
