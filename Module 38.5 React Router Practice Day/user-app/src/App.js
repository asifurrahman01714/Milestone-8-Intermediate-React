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
        
        <Route exact path="/https://omnigo.com.bd/AsifUrRahman/userdetails/">
          <Users /> 
        </Route>

        <Route path="/https://omnigo.com.bd/AsifUrRahman/userdetails//users">
          <Users/>
        </Route>

        <Route path="/https://omnigo.com.bd/AsifUrRahman/userdetails//userDetails/:id">
          <UserDetails/>
        </Route>

        <Route path="/https://omnigo.com.bd/AsifUrRahman/userdetails/*">
            <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
