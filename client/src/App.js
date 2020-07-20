import React, { useState } from 'react';
import './App.css';

function App() {
  //constructor(){
  //  const params = this.getHashParams();
  //}
  
  const [params, setParams] = useState(getHashParams);
  const [loggedIn, setLoggedIn] = useState();


  //if(!params.access_token) {
  //  nowPlaying: {
  //    name: 'Not checked';
  //    image: '';
  //  }
  //}

  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  console.log('hej');
  console.log(params.nowPlaying.name);

  return (
    <div className="App">
      <a href='http://localhost:3000'>
        <button>Login With Spotify</button>
      </a>
      <div> Now playing : { params.nowPlaying.name } </div>
      <div>
        <img src={params.nowPlaying.image} style={{width: 100}}/>
      </div>
    </div> 
  );
}

export default App;
