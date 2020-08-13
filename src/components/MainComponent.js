import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import SweetInfo from './SweetInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
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
          <Home 
            sweet={this.state.sweets.filter(sweet => sweet.featured)[0]}
          />
      );
    }

    const SweetWithId = ({match}) => {
      return (
          <SweetInfo 
              sweet={this.state.sweets.filter(sweet => sweet.id === +match.params.sweetId)[0]}
          />
      );
  };
    return (
      <div>
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory sweets={this.state.sweets} />} />
              <Route path='/directory/:sweetId' component={SweetWithId} />
              <Route exact path='/contactus' component={Contact} />     
              <Redirect to='/home' />
          </Switch>
          <Footer/>
      </div>
    );
  };
}

export default Main;
