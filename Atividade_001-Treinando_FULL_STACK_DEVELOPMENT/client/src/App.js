import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((Response) => {
      setListOfPosts(Response.data);
    });
  }, []);

  return <div className="App">{listOfPosts.map((value, key) => {

    return <div className = "post"> 
      <div className = 'title'> {value.title} </div>
      <div className = 'body'> {value.postText} </div>
      <div className = 'username'> {value.username} </div>
    </div>;

  })}
  </div>;
}

export default App;
