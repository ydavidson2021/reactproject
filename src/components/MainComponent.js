import React, { Component } from 'react';
import Confectionery from './ConfectioneryComponent';
import SweetInfo from './SweetInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';



const mapStateToProps = state => {
  return {
      sweets: state.sweets, 
      comments: state.comments
  };
};

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
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
            sweet={this.props.sweets.filter(sweet => sweet.id === +match.params.sweetId)[0]}
            comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
            addComment={this.props.addComment}        
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
              <Route exact path='/confectionery' render={() => <Confectionery sweets={this.props.sweets} />} />
              <Route path='/confectionery/:sweetId' component={SweetWithId} />
              <Route exact path='/contactus' component={Contact} />     
              <Redirect to='/home' />
          </Switch>
          <Footer/>
      </div>
    );
  };
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Main));