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
function App() {
  return (
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
  );
}

export default App;
