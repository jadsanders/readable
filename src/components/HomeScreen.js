import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render() {

    const { postList } = this.props

    return (
      <div>
        <h5>This is the HomeScreen (for post listings and filter functionality)!</h5>
        <h1>Current category: {this.props.match.params.category}</h1>

        {postList}

      </div>
    );
  }
}


function mapStateToProps ({ posts }) {

  const postOrder = posts.allIds

  return {
    postList: postOrder.map((id) => ({
      id
    }))
  }
}

export default connect(mapStateToProps,null)(HomeScreen)
