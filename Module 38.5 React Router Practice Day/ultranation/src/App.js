import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from "./components/Countries/Countries";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
