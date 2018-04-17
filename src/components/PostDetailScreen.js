import React, { Component } from 'react';

class PostDetailScreen extends Component {
  render() {

    return (
      <div>
        <h5>This is the PostDetailScreen (for post body & comments)!</h5>
        <h1>Current category: {this.props.match.params.category}</h1>
        <h1>Current blog post: {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default PostDetailScreen;
