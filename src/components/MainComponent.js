import React, { Component } from 'react';
import Confectionery from './ConfectioneryComponent';
import Directory from './DirectoryComponent';
import SweetInfo from './SweetInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
      sweets: state.sweets,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return(
          <Home       
          />
      );
    }
    {/*const SweetWithName= ({match}) => {
      return (
          <SweetInfo 
            sweet={this.state.sweets.filter(sweet => sweet.name === +match.params.sweetName)[0]}
          />
      );
    }; */}

    const SweetWithId= ({match}) => {
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
              {/*<Route exact path='/confectionery' render={() => <Confectionery sweets={this.state.sweets} />} /> */}
              {/*<Route path='/confectionery/:sweetName' component={SweetWithName} /> */}
              <Route exact path='/directory' render={() => <Directory sweets={this.state.sweets} />} />
              <Route path='/confectionery/:sweetId' component={SweetWithId} />
              <Route exact path='/contactus' component={Contact} />     
              <Redirect to='/home' />
          </Switch>
          <Footer/>
      </div>
    );
  };
}

export default withRouter (connect(mapStateToProps)(Main));