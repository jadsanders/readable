import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/helpers';


class CategorySelect extends Component {

  categoryLink = {
    backgroundColor: '#63849a',
    color: '#fff',
    transition: 'all 0.3s',
  }

  linkBox = {
    marginTop: '25px'
  }

  header = {
    height: '20px',
    padding: '15px',
  }

  render() {

    const { categories } = this.props

    return(

      <div className="category-box">
        <div className='component-header-box'>
          <h3 style={this.header}>Categories</h3>
        </div>
        <div>
          {categories.map((cat) =>
            <Link
              className="category-link"
              to={`/${cat.path}`}
              key={cat.name}
              style={this.props.path === cat.name ? this.categoryLink : null}>

              {capitalize(cat.name)}

            </Link>
          )}
        </div>

        {this.props.path !== undefined
          ? <div style={this.linkBox}>
              <Link className="reset-link" to="/"><i className="material-icons">clear</i></Link>
            </div>
          : null}

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

export default connect(mapStateToProps,null)(CategorySelect)
