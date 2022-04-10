import './App.css';
import { BrowsrRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
