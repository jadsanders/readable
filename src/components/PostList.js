import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostHeader from './PostHeader';
import ListSort from './ListSort';
import NothingFound from './NothingFound';



class PostList extends Component {
  leftbox = {
    width: 'calc(20% - 30px)',
    height: '20px',
    display: 'inline-block',
    textAlign: 'left',
    padding: '15px',
    verticalAlign: 'top'
  }
  rightbox = {
    width: 'calc(80% - 30px)',
    height: '14px',
    display: 'inline-block',
    textAlign: 'right',
    padding: '15px',
    paddingTop: '21px',
  }

  render() {
    const { postList, path } = this.props
    const listsort = postList.length > 1 ? (<ListSort />) : (null);

    return (
      <div>
        <div className='component-header-box'>
          <div style={this.leftbox}><h3>Posts</h3></div>
          <div style={this.rightbox}><h5>{listsort}</h5></div>
        </div>
        <div className="postlist-box">
          {postList.length > 0
            ? postList.map((post) =>
                <div key={post.id}>
                  <PostHeader post={post}/>
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

    //Filter posts according to the selected category
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
