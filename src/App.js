import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext'
import FeatureContextProvider from './contexts/FeatureContext'
import HouseContextProvider from './contexts/HouseContext'
import BookingContextProvider from './contexts/BookingContext'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeResults from './pages/HomeResults'
//import MemberPage from './components/MemberPage.js'
import MyPage from './pages/MyPage'
import FAQ from './pages/FAQ.js'
//import { useContext } from 'react'
import error404 from './images/error404.png'





function App() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet" />




  const page404 = () => (<div>
    <h1 style={{ color: "red", textAlign: "center" }}>Page not found: {window.location.pathname}</h1>
    <img src={error404} alt="" />
  </div>)
  // localStorage.clear() // we might need to add/remove later

  return (
    <div className="App">
      <UserContextProvider>
        <BookingContextProvider>
          <HouseContextProvider>
            <FeatureContextProvider>

              <div id="contentGridContainer">

                <Router>
                  <header className={true ? 'App-Header' : ''}>
                    <Navbar />
                  </header>
                  <main className="content">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/home-results" component={HomeResults} />
                      <Route exact path="/FAQ" component={FAQ} />
                      <Route exact path="/mypage" component={MyPage} />
                      <Route path="*" component={page404} />
                    </Switch>
                  </main>


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
