import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPostsDate, sortPostsVote, sortPostsComments } from '../../actions/posts';
import MiniButton from '../buttons/mini_button/MiniButton';

import './PostsListSort.css';

class PostsListSort extends Component {
  render() {
    return (
      <div className="not-selectable">

        <MiniButton
          onClick={ () => this.props.sortPostsDate() }
          active={ this.props.sortType === 'timestamp' ? true : false }
          buttonText="Newest"
          color="custom"
        />

        <MiniButton
          onClick={ () => this.props.sortPostsVote() }
          active={ this.props.sortType === 'voteScore' ? true : false }
          buttonText="Most liked"
          color="custom"
        />

        <MiniButton
          onClick={ () => this.props.sortPostsComments() }
          active={ this.props.sortType === 'comments' ? true : false }
          buttonText="Most discussed"
          color="custom"
        />

      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    sortType: state.posts.sortType
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sortPostsDate: () => dispatch(sortPostsDate()),
    sortPostsVote: () => dispatch(sortPostsVote()),
    sortPostsComments: () => dispatch(sortPostsComments()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsListSort);
