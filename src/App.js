import logo from './logo2.svg';
import './App.css';
import UserContextProvider from './contexts/UserContext'
import FeatureContextProvider from './contexts/FeatureContext'
import HouseContextProvider from './contexts/HouseContext'
import BookingContextProvider from './contexts/BookingContext'
import Home from './pages/Home'

function App() {
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
    </div>
  );
}

export default App;
