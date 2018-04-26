import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as APIUtil from '../utils/api';

class PostDetailScreen extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    APIUtil.fetchComments(this.props.match.params.id).then((comments) => {
      this.setState({
        comments
      })
    })
  }

  render() {
    const { currentPost } = this.props

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

            : null
          }
        </div>

      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return {
    currentPost: posts.byId[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(PostDetailScreen)
