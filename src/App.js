import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

<<<<<<< Updated upstream
import Menu from './components/Menu.js'
import Navbar from './components/Navbar';
import Home from './pages/Home';
=======
import MemberPage from './components/MemberPage.js'
import Home from './pages/Home';
import MyPage from './pages/MyPages.js'
// import Burger from './components/Burger.js'

>>>>>>> Stashed changes

function App() {



<<<<<<< Updated upstream
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
=======
      <Router>
        <header className={true ? 'App-Header' : ''}>
          <MemberPage />
        </header>


        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mypage" component={MyPage} />
            <Route path="*" component={page404} />
          </Switch>
        </main>
>>>>>>> Stashed changes

        </Router>

      </div>

    );
  }
}

export default App;
