import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu.js'
import MyPages from './pages/MyPages.js'

function App() {
  const page404 = () => (
    <h1>Page not found: {window.location.pathname}</h1>
  )

  return (
    <div className="App">
      <Router>
        <menu>
          <Menu />
        </menu>
        <main>
          <Switch>
            <Route exact path="/myPages" component={MyPages} />
            <Route path="*" component={page404} />
          </Switch>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
