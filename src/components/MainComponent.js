import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { SWEETS } from '../shared/sweets';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      sweets: SWEETS,
      selectedSweet: null
    };
  }

  onSweetSelect(sweetId) {
    this.setState({selectedSweet: sweetId});
  }

  render() {
      return (
          <div>
              <Navbar dark color="info">
              <div className="container">
                  <NavbarBrand href="/">Sweet Tooth Fairy GPS</NavbarBrand>
              </div>
              </Navbar>
              <Directory sweets={this.state.sweets} onClick={sweetId => this.onSweetSelect(sweet)}/>
              <SweetInfo sweet={this.state.sweets.filter(sweet => sweet.id === this.state.selectedSweet)[0]} />
          </div>
      );
  }
}

export default Main;
