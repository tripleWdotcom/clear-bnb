import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext'
import FeatureContextProvider from './contexts/FeatureContext'
import HouseContextProvider from './contexts/HouseContext'
import BookingContextProvider from './contexts/BookingContext'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeResults from './pages/HomeResults'
import MyPage from './pages/MyPage.js'
import React, { useState,useEffect } from 'react'
import Footer from './components/Footer';




function App() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet" />

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )
  
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
  };

  return (
    <div className="App">
      <UserContextProvider>
        <BookingContextProvider>
          <HouseContextProvider>
            <FeatureContextProvider>

              <div id="contentGridContainer">

                <Router>
                  <header className={true ? 'App-Header' : ''}>
                    {dimensions.width >= 700 ? <Navbar /> : ''}
                  </header>
                  <main className="content">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/home-results" component={HomeResults} />
                      <Route exact path="/mypage" component={MyPage} />
                      <Route path="*" component={page404} />
                    </Switch>
                  </main>

                  <footer className={true ? 'App-Footer' : ''}>
                    {dimensions.width < 700 ? <Footer /> : ''}
                  </footer>

                </Router>

              </div>
            </FeatureContextProvider>
          </HouseContextProvider>
        </BookingContextProvider>
      </UserContextProvider>
    </div>

  );
}

export default App;
