import Radium from 'radium'
import Media from 'react-media';


const Navbar = () => {
  return (

    <Media query="(min-width: 700px)">
      <nav className="navbar" style={styles.navbar}>

        <h1 style={{
          color: "crimson"
        }}>ClearBnB</h1>
        <div className="links"
          style={{
            marginLeft: 'auto'
          }}>
          <span style={styles.home}>Home</span>
          <span style={styles.signIn}>Sign in</span>
        </div>
      </nav>
    </Media>

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
