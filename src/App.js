import { Route, Switch, } from 'react-router-dom';
import Nav from '../src/components/Nav'
import './App.css';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Assurance from './components/Assurance';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/security">
          <SecurityPage />
        </Route>
      </Switch>
      <Assurance />
      <Footer />
    </div>
  );
}

export default App;
