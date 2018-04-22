import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostHeader from './PostHeader'

class PostList extends Component {

  render() {
    const { postList } = this.props

    return (
      <div>
        {postList.map((post) =>
          <div key={post.id}>
            <PostHeader post={post}/>
          </div>
        )}
      </div>
    );
  }
}


function mapStateToProps ({ posts }) {

  const postOrder = posts.allIds
  const allPosts = posts.byId

  return {
    postList: postOrder.map((id) => (

      Object.keys(allPosts[id]).reduce((posts, post) => {
        posts[post] = allPosts[id][post]
          ? allPosts[id][post]
          : null

        return posts
      }, {})
    ))
  }
}

export default connect(mapStateToProps)(PostList)
