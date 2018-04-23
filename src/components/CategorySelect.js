import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class CategorySelect extends Component {
  render() {

    const { categories } = this.props

    const style = {
      margin: "5px"
    }

    return(
      <div>

        <Link style={style} to="/">all</Link>

        {categories.map((cat) =>
          <Link
            style={style}
            to={`/${cat.path}`}
            key={cat.name}>

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

export default connect(mapStateToProps,null)(CategorySelect)
