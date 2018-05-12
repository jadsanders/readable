import React, { Component } from 'react';
import { addPost, editPost, sortPostsDate } from '../../../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCategories } from '../../../actions/categories';

import MediumButton from '../../buttons/medium_button/MediumButton';

import { capitalize } from '../../../utils/helpers';

import './PostForm.css';

class PostForm extends Component {

  state = this.props.state

  handleCreate = (e) => {
    e.preventDefault()
    if (!this.canBeSubmitted()) {
      return
    } else {
      this.props.createPost(this.state)
      this.props.sortPostsDate()
      this.props.history.push('/')
    }
  }

  handleUpdate= (e) => {
    e.preventDefault()
    if (!this.canBeSubmitted()) {
      return
    } else {
      this.props.updatePost(this.state)
      this.props.sortPostsDate()
      this.props.history.push('/')
    }
  }

  updateTitle = (text) => {this.setState({ title: text })}
  updateBody = (text) => {this.setState({ body: text })}
  updateAuthor = (text) => {this.setState({ author: text })}
  updateCategory = (text) => {this.setState({ category: text })}



  canBeSubmitted() {
    const { title, body, author, category } = this.state;
    return (
      title.length > 0 &&
      body.length > 0 &&
      author.length > 0 &&
      category.length > 0
    );
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return(
      <div className="post-form">

        <form onSubmit={this.handleSubmit}>
          <h5>Title*</h5>
          <input
            type="text"
            name="title"
            placeholder="e. g. 'My awesome blogpost'"
            onChange={(event) => this.updateTitle(event.target.value)}
            value={this.state.title}
            className={this.state.title.length > 0 ? "post-form-title post-form-has-value" : "post-form-title"}
          />

          <h5>Content*</h5>
          <textarea
            type="textarea"
            name="body"
            placeholder="e. g. 'This is an awesome blogpost!'"
            onChange={(event) => this.updateBody(event.target.value)}
            value={this.state.body}
            className={this.state.body.length > 0 ? "post-form-body post-form-has-value" : "post-form-body"}
          />

          {this.props.type === "create"
            ? <div>
                <h5>Your Name*</h5>
                <input
                  type="text"
                  name="author"
                  placeholder="e. g. oliver123"
                  onChange={(event) => this.updateAuthor(event.target.value)}
                  value={this.state.author}
                  className={this.state.author.length > 0 ? "post-form-author post-form-has-value" : "post-form-author"}
                />


                <fieldset className="post-form-category-select">
                  <h5>Category*</h5>
                  {this.props.categories.map((category) =>
                    <div key={category.name} className="post-form-category-select-item">
                      <input
                        type="radio"
                        id={category.name}
                        name='category'
                        value={category.name}
                        checked={this.state.category === category.name}
                        onChange={(event) => this.updateCategory(event.target.value)}
                      />

                      <label
                        htmlFor={category.name}
                        className={this.state.category === category.name ? "post-form-category-label-active" : null}
                      >
                        {capitalize(category.name)}
                      </label>

                    </div>
                  )}
                </fieldset>
              </div>
            : null
          }

          <div className="post-form-first-button">
            {this.props.type === "create"
              ? <MediumButton color={this.canBeSubmitted() ? "green" : "grey"} buttonText="Save Post" onClick={this.handleCreate}/>
              : <MediumButton color={this.canBeSubmitted() ? "green" : "grey"} buttonText="Update Post" onClick={this.handleUpdate} />
            }
          </div>

          <Link to='/' onClick={this.props.sortPostsDate}>
            <MediumButton color="blue" buttonText="Discard"/>
          </Link>

          <div className="post-form-required">*required</div>

        </form>
      </div>
    )
  }
}

function mapStateToProps ({ categories }) {
  const allCategories = categories.byName
  return {
    categories: Object.values(allCategories)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (post) => dispatch(addPost(post)),
    updatePost: (post) => dispatch(editPost(post)),
    sortPostsDate: () => dispatch(sortPostsDate()),
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
