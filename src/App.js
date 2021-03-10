import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )

  return (
    <div className="App">

      <Router>
        <header className={true ? 'App-Header' : ''}>
          <Navbar />

        </header>


        <main>
          <Switch>
            <div className="content" style={styles.content}>
              <Route exact path="/" component={Home} />
            </div>
            <Route path="*" component={page404} />
          </Switch>
        </main>

      </Router>

    </div>

  );
}

const styles = {

  content: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '20px'
  }

}

export default App;
