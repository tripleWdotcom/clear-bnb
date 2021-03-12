import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MemberPage from './components/MemberPage.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPage from './pages/MyPages.js'


function App() {
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
    rel="stylesheet" />

  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )
  

  return (
    <div className="App">
      <div id="contentGridContainer">

      <Router>
        <header className={true ? 'App-Header' : ''}>
          <Navbar />
          <MemberPage />
        </header>

          <main className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mypage" component={MyPage} />
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
