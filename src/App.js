import React, { Component } from 'react';
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

//The main app lives here in App.js. All components are either rendered here directly, or they get rendered in the routes file and are rendered here, as seen above. 


export default App;

