import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/users">
          <Users></Users>
        </Route>

        <Route exact path="/">
          <Users />
        </Route>

        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
