import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as APIUtil from '../../utils/api';
import NothingFound from '../../components/errors/nothing_found/NothingFound';

import './PostDetailScreen.css';

class PostDetailScreen extends Component {

  state = {
    currentPost: {},
    comments: []
  }

  componentDidMount() {

    //here i need to fetch both, currentpost and comments for that post

    APIUtil
    .fetchPostDetails(this.props.match.params.id)
    .then((currentPost) => this.setState({currentPost}))


  }

  render() {
    const { currentPost } = this.state

    console.log(this.state)

    return (
      <div>

        <div className='home-button-container'>
          <Link to='/'>Home</Link>
        </div>

        <div className='post-detail-container'>
          {currentPost !== undefined ?
            <div>
              <div className='post-detail-box'>
                <h2>{currentPost.title}</h2>
              </div>

              <div className='post-comments-box'>
                {this.state.comments.map((comment) =>
                  <div className='comment-box' key={comment.id}>
                    {comment.body}
                  </div>
                )}
              </div>
            </div>

            : <NothingFound />
          }
        </div>

      </div>
    );
  }
}

export default PostDetailScreen;
