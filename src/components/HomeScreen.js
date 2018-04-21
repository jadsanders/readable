import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h5>This is the HomeScreen (for post listings and filter functionality)!</h5>
        <h1>Current category: {this.props.match.params.category}</h1>


      </div>
    );
  }
}


function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps,null)(HomeScreen)
