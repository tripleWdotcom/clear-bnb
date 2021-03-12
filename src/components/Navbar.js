import Radium from 'radium'
import Media from 'react-media';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const Navbar = () => {
  const styles = useStyles();

  return (

    <Hidden xsDown >
    <div className={styles.root}>

          <Paper className={styles.paper}>
      <Grid container spacing={3}>
        <Grid item xs={10}>

            <nav className={styles.navbar}>
              <span style={{
                color: "crimson",
              }}>ClearBnB</span>
              <span className={styles.home}>Home</span>
              <span className={styles.signIn}>Sign in</span>
              
            </nav>
            </Grid>

      </Grid>
            </Paper>
    </div>
</Hidden>

  )
}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: 'cyan'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
    
  },

  navbar: {
    padding: '20px',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    borderBottom: '1px solid whitesmoke',
  },

  home: {

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


}));



export default Radium(Navbar);
