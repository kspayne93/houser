import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        { routes }
      </div>
    );
  }
}

export default App;
