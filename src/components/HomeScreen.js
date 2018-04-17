import React, { Component } from 'react';

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

export default HomeScreen;
