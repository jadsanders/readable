import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CategorySelect extends Component {
  render() {

    const style = {
      margin: "5px"
    }

    return(
      <div>
        <Link
          style={style}
          onClick={() => this.props.selectCategory(null)}
          to={"/all"}
        >all</Link>



        { this.props.categories.map((category) =>

          <Link
            style={style}
            key={category.name}
            onClick={() => this.props.selectCategory(category.name)}
            to={"/" + category.name}
          >{category.name}</Link>

        )}
      </div>
    )
  }
}

export default CategorySelect;
