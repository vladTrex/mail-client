import React, { Component } from 'react';

import Login  from './components/Login';
import './App.css';

class App extends Component {
  render(){
    return(
        <div>
          <h2>Mail Client</h2>
          <Login onLogin={() => null} />
        </div>
    );
  }
}

export default App;
