import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import AllComments from './components/AllComments/AllComments';
import { createContext, useState } from 'react';

export const SearchContext = createContext();
function App() {
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <SearchContext.Provider value={[search,setSearch]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/comments/:postId">
            <Comments />
          </Route>
          <Route path="/allComments">
            <AllComments />
          </Route>
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
