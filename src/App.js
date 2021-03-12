import logo from './logo2.svg';
import './App.css';
import UserContextProvider from './contexts/UserContext'
import FeatureContextProvider from './contexts/FeatureContext'
import HouseContextProvider from './contexts/HouseContext'
import BookingContextProvider from './contexts/BookingContext'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet" />

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )
  

  return (
    <div className="App">
      <UserContextProvider>
        <BookingContextProvider>
        <HouseContextProvider>
        <FeatureContextProvider>

      <header className="App-header">
        <Home />
          </header>
          </FeatureContextProvider>
          </HouseContextProvider>
        </BookingContextProvider>
      </UserContextProvider>
      <div id="contentGridContainer">

      <Router>
        <header className={true ? 'App-Header' : ''}>
          <Navbar />

        </header>

          <main className="content">
          <Switch>
            <div>
              <Route exact path="/" component={Home} />
            </div>
            <Route path="*" component={page404} />
          </Switch>
        </main>

        <footer className={true ? 'App-Footer' : ''}>
          <Footer />
        </footer>

      </Router>

      </div>
    </div>

  );
}

export default App;
