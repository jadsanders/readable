import React from 'react';
import { connect } from 'react-redux';
import { sortPostsDate, sortPostsVote, sortPostsComments } from '../../actions/posts';
import MiniButton from '../buttons/mini_button/MiniButton';

import './PostsListSort.css';

const PostsListSort = ({ sortPostsDate, sortPostsVote, sortPostsComments, sortType }) => (
  <div className="not-selectable">

    <MiniButton
      onClick={ () => sortPostsDate() }
      active={ sortType === 'timestamp' ? true : false }
      buttonText="Newest"
      color="custom"
    />

    <MiniButton
      onClick={ () => sortPostsVote() }
      active={ sortType === 'voteScore' ? true : false }
      buttonText="Most liked"
      color="custom"
    />

    <MiniButton
      onClick={ () => sortPostsComments() }
      active={ sortType === 'comments' ? true : false }
      buttonText="Most discussed"
      color="custom"
    />

  </div>
)




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
