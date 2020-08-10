import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { SWEETS } from './shared/sweets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      sweets: SWEETS
    };
  }
  render() {
      return (
          <div className="App">
              <Navbar dark color="info">
              <div className="container">
                  <NavbarBrand href="/">Sweet Tooth Fairy GPS</NavbarBrand>
              </div>
              </Navbar>
              <Directory sweets={this.state.sweets}/>
          </div>
      );
  }
}

export default App;
