import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { selectCategory } from '../actions/categories';

class CategorySelect extends Component {
  render() {

    const { categories, selectCategory } = this.props

    const style = {
      margin: "5px"
    }

    return(
      <div>
        <Link
          style={style}
          to="/"
          key="all"
          onClick={() => selectCategory([])}
          >

          all

        </Link>



        {categories.map((cat) =>
          <Link
            style={style}
            to={`/${cat.path}`}
            key={cat.name}
            onClick={() => selectCategory(cat.name)}>

            {cat.name}

          </Link>
        )}
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
    selectCategory: (data) => dispatch(selectCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect)
