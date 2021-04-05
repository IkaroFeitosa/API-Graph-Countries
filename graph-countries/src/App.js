import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Countries from './pages/Countries'
import Home from './pages/Home'
import './assets/index.css'
import {connect} from 'react-redux'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/Countries">
            <Countries />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}
const mapStateToProps = state => ({
  country:state.country
});
export default connect(mapStateToProps,null)(App);
