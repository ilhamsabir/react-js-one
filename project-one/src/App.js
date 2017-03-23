import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header.js';
import Home from './components/pages/homes/Home.js';
import Footer from './components/layout/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header/>
        </div>
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
