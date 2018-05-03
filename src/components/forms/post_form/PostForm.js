import React, { Component } from 'react';
import { addPost, sortPostsDate } from '../../../actions/posts';
import { connect } from 'react-redux';


class PostForm extends Component {

  state = this.props.state

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.canBeSubmitted()) {
      return
    } else {
      this.props.createPost(this.state)
      this.props.sortPostsDate()
      this.props.history.push('/')
    }
  }

  updateTitle = (text) => {this.setState({ title: text })}
  updateBody = (text) => {this.setState({ body: text })}
  updateAuthor = (text) => {this.setState({ author: text })}
  updateCategory = (text) => {this.setState({ category: text })}

  //canBeSubmitted() {
  //  const { title, body, author, category } = this.state;
  //  return (
      //title.length > 0 &&
      //body.length > 0 &&
      //author.length > 0 &&
      //category.length
  //  );
  //}

  render() {

    //const isEnabled = this.canBeSubmitted()

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(event) => this.updateTitle(event.target.value)}
            value={this.state.title}
          />

          <input
            type="text"
            name="body"
            placeholder="Body"
            onChange={(event) => this.updateBody(event.target.value)}
            value={this.state.body}
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={(event) => this.updateAuthor(event.target.value)}
            value={this.state.author}
          />

          <fieldset selected="automotive">
            {this.props.categories.map((category) =>
              <div key={category.name}>
              <input
                type="radio"
                id={category.name}
                name='category'
                value={category.name}
                checked={this.state.category === category.name}
                onChange={(event) => this.updateCategory(event.target.value)}
              />
              <label htmlFor={category.name}>{category.name}</label>
              </div>
            )}
          </fieldset>

          <button
            onClick={this.handleSubmit}
            //disabled={!isEnabled}
          >
            { this.props.type === "edit"
              ? "Update post"
              : "Save post"
            }
          </button>

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
    sortPostsDate: () => dispatch(sortPostsDate())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
