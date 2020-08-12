import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import SweetInfo from './SweetInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SWEETS } from '../shared/sweets';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sweets: SWEETS
    };
  }
  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div>
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory sweets={this.state.sweets} />} />
              <Redirect to='/home' />
          </Switch>
          <Footer/>
      </div>
    );
  };
}

export default Main;
