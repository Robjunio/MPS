import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";

function App() {
  
  return <div className="App">
    <Router>
    <Link to="/"> Home </Link>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/createpost" exact component = {CreatePost} />
      </Switch>
    <Link to="/createpost"> Create A Post </Link>
    </Router>
  </div>;
}

export default App;
