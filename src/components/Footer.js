import Radium from 'radium'
import Media from 'react-media';

const Footer = () => {
   
   return ( 
     <Media query="(max-width: 700px)">
     <nav className="footer">
      <div className="links">
         <div>Home</div>
         <div>Sign in</div>
      </div>
     </nav>


   </Media>
   );
}
 
export default Radium(Footer);