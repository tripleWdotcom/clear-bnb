import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeResults from './components/HomeResults.js';
import HouseContextProvider from './contexts/HouseContext'
import HouseDetails from './components/HouseDetails'
function App() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet" />

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )
  

  return (
    <div className="App">
      <HouseContextProvider>
      <div id="contentGridContainer">

      <Router>
        <header className={true ? 'App-Header' : ''}>
          <Navbar />

        </header>

          <main className="content">
          <Switch>        
            <Route exact path="/" component={Home} />
                <Route exact path="/home-results/:id" component={HouseDetails}/>

            <Route exact path="/home-results" component={HomeResults} /> 
            <Route path="*" component={page404} />
          </Switch>
        </main>

        <footer className={true ? 'App-Footer' : ''}>
          <Footer />
        </footer>

      </Router>

      </div>
        </HouseContextProvider>
    </div>

  );
}

export default App;
