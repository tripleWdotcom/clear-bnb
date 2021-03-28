import Radium from 'radium'
import Media from 'react-media';
import { useHistory } from "react-router-dom";


const Footer = () => {

   let history = useHistory();


   const goHome = () => {
      history.push("/");
   }
   
   return ( 
     <Media query="(max-width: 700px)">
     <nav className="footer">
      <div className="links">
         <a onClick={goHome}>Home</a>
         <a>Sign in</a>
      </div>
     </nav>


   </Media>
   );
}
 
export default Radium(Footer);