import logo from './logo2.svg';
import './App.css';
import UserContextProvider from './contexts/UserContext'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <header className="App-header">
        <Home />
        </header>
      </UserContextProvider>
    </div>
  );
}

export default App;
