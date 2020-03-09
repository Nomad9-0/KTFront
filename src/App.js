import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Muster from './components/muster/Muster';
import MyKt from './components/my_kt/MyKt';
import Account from './components/account/Account';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='bannerTitle'>KILL TEAM FRONT</h1>
    <Router>
        <Navbar />
        <div className='bodyWrapper'>
          <Route path="/" exact component={Home} />
          <Route path="/muster" component={Muster} />
          <Route path="/my_kt" component={MyKt} />
          <Route path="/account" component={Account} />
          <Route path="/my_kt/unit" />
        </div>
    </Router>
    </div>
  );
}

export default App;
