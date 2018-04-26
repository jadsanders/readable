import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPostsDate, sortPostsVote, sortPostsComments } from '../actions/posts';

class ListSort extends Component {

  highlightLink = {
    backgroundColor: '#63849a',
    color: '#fff'
  }

  style = {
    fontSize: '12px'
  }

  render() {
    return (
      <div style={this.style}>
        <span
          className='listsort-link'
          onClick={() => this.props.sortPostsDate()}
          style={this.props.sortType === 'timestamp' ? this.highlightLink : null}
        >
          Newest
        </span>

        <span
          className='listsort-link'
          onClick={() => this.props.sortPostsVote()}
          style={this.props.sortType === 'voteScore' ? this.highlightLink : null}
        >
          Most liked
        </span>

        <span
          className='listsort-link'
          onClick={() => this.props.sortPostsComments()}
          style={this.props.sortType === 'comments' ? this.highlightLink : null}
        >
          Most discussed
        </span>
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

export default connect(mapStateToProps,mapDispatchToProps)(ListSort);
