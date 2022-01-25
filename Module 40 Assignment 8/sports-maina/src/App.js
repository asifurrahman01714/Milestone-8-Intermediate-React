import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import { createContext, useState } from "react/cjs/react.development";

export const SearchContext = createContext();
function App() {
  const [search, setSearch] = useState();
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <Router className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route path="/leagueDetails/:idLeague">
            <LeagueDetails/>
          </Route>
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
