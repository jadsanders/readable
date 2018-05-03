import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostHeader from '../post_header/PostHeader';
import PostsListSort from '../posts_list_sort/PostsListSort';
import NothingFound from '../errors/nothing_found/NothingFound';

import './PostsList.css';

class PostList extends Component {
  render() {

    console.log(this.props.postList)

    const { postList, path } = this.props
    const listsort = postList.length > 1 ? (<PostsListSort />) : (null);

    return (
      <div>

        <div className='component-header-box'>
          <div className='left-postlist-header-box'><h3>Posts</h3></div>
          <div className='right-postlist-header-box'><h5>{listsort}</h5></div>
        </div>

        <div className="postlist-box">
          {postList.length > 0
            ? postList.map((post) =>
                <div key={post.id}>
                  <PostHeader post={post} openEditPostModal={this.props.openEditPostModal}/>
                </div>
              )
            : null
          }

          {postList.length === 0 && path !== undefined
            ? <NothingFound />
            : null
          }

        </div>
      </div>
    );
  }
}

function mapStateToProps ({posts}, ownProps) {

  const postOrder = posts.allIds
  const allPosts = posts.byId
  const currentPath = ownProps.path

  return {
    postList: postOrder.map((id) => (

      Object.keys(allPosts[id]).reduce((posts, post) => {
        posts[post] = allPosts[id][post]
          ? allPosts[id][post]
          : null

        return posts
      }, {})

    )).filter((post) => {
      if(currentPath === undefined) {
        return post
      } else {
        return post.category === currentPath
      }
    })
  }
}

export default connect(mapStateToProps)(PostList)
