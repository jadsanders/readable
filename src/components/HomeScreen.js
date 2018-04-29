import React, { Component } from 'react';
import PostList from './PostList';
import LargeButton from './LargeButton';
import CategorySelect from './CategorySelect';
import Modal from 'react-modal';
import PostForm from './PostForm'

class HomeScreen extends Component {

  state = {
    showModal: false
  }

  openPostModal = () => {
    this.setState({
      showModal: true
    })
  }

  closePostModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    Modal.setAppElement('#root')
    return (
      <div>
        <div className="categoryselect-container">
          <CategorySelect path={this.props.match.params.category} />
          <div className="button-container">
            <LargeButton openModal={this.openPostModal}/>
          </div>
        </div>
        <div className="postlist-container">
          <PostList path={this.props.match.params.category}/>
        </div>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closePostModal}
          className="modal"
          overlayClassName="overlay"
        >
          <PostForm closeModal={this.closePostModal} />
        </Modal>

      </div>
    )
  }
}

export default HomeScreen
