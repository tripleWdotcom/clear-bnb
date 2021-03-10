import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const page404 = () => {
      return (
        <div className="not-found">
          <h2>Sorry</h2>
          <p>That page cannot be found: {window.location.pathname}</p>
         <Link to="/">Back to the homepage...</Link>
        </div>
    )
  }
  

  return (
    <div className="App">

      <Router>
        <header className={true ? 'App-Header' : ''}>
          <Navbar />
        </header>

        <main>
          <Switch>

            <Route exact path="/" component={Home} />

            <Route path="*" component={page404} />
          </Switch>
        </main>

        <footer className={true ? 'App-Footer' : ''}>
          <Footer />
        </footer>

      </Router>

    </div>

  );
}

export default App;

