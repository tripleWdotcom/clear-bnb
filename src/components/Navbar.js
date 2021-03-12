import Radium from 'radium'
import Media from 'react-media';
import Hidden from '@material-ui/core/Hidden';

const Navbar = () => {
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
          <a style={styles.home}>Home</a>
          <a style={styles.signIn}>Sign in</a>
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
