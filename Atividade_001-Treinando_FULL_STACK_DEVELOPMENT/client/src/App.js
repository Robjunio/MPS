import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Post from "./Pages/Post";
import Login from"./Pages/Login";
import Registration from"./Pages/Registration";
import {AuthContext} from "./helpers/AuthContext";
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {
  const [authState, setAuthState] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', {headers:{
      accessToken: localStorage.getItem("accessToken"),
    }}).then((response) => {
      if (response.data.error){
        setAuthState(false);
      }
      else{
        setAuthState(true);
      }
    });
  }, []);

  return <div className="App">
    <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
        <div className="navbar">
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Create A Post </Link>
          {!authState && (
          <>
            <Link to="/login"> Login </Link>
            <Link to="/registration"> registration </Link>
          </>
          )}
        </div>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/createpost" exact component = {CreatePost} />
          <Route path = "/post/:id" exact component = {Post} />
          <Route path = "/login" exact component = {Login} />
          <Route path = "/Registration" exact component = {Registration} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  </div>;
}

export default App;
