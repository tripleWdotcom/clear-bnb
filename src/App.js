import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
