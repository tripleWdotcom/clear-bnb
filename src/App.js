import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu.js'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {



  function App() {

    const page404 = () => (
      <h1>Page not found: {window.location.pathname}</h1>
    )

    return (
      <div className="App">

        <Router>
          <header className={true ? 'App-Header' : ''}>
            <Navbar />
            <Menu />
          </header>


          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="*" component={page404} />
            </Switch>
          </main>

        </Router>

      </div>

    );
  }
}

export default App;
