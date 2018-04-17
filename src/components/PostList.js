import React, { Component } from 'react';

class PostList extends Component {

  render() {
    const style = {
      box: {
        marginBottom: "60px",
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "lightgray"
      },
      h3: {
        margin: 0
      },
    }

    return(
      <div>
        { this.props.posts.map((post) =>
          <div key={post.id} style={style.box}>
            <small>{post.category}</small>
            <h3 style={style.h3}>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    )
  }
}

export default PostList;
