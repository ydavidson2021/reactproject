import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="info">
              <div className="container">
                  <NavbarBrand src="assets/img/logo.png"href="/">Sweet Tooth Fairy</NavbarBrand>
              </div>
              </Navbar>
              <Directory/>
          </div>
      );
  }
}

export default App;
