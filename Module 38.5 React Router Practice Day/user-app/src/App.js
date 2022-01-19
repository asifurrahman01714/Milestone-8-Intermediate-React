import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        
        <Route exact path="/">
          <Users /> // Self closing tag
        </Route>

        <Route path="/users">
          <Users/>
        </Route>

        <Route path="/userDetails/:id">
          <UserDetails/>
        </Route>

        <Route path="*">
            <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
