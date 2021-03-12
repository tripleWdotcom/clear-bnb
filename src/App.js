import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MemberPage from './components/MemberPage.js'
import Home from './pages/Home';
import MyPage from './pages/MyPages.js'

function App() {



  function App() {

    const page404 = () => (
      <h1>Page not found: {window.location.pathname}</h1>
    )

    return (
      <div className="App">
       
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

        </Router>

      </div>

    );
  }
}

export default App;
