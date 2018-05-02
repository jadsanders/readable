import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';

import SmallButton from '../buttons/small_button/SmallButton';
import CloseButton from '../buttons/close_button/CloseButton';

import './PostsCategoryFilter.css';




class PostsCategoryFilter extends Component {


  render() {
    const { categories } = this.props
    return(
      <div>

        <div className='component-header-box'>
          <h3 style={this.header}>Categories</h3>
        </div>

        {categories.map((cat) =>
          <Link
            key={cat.name}
            to={`/${cat.path}`}
          >
            <SmallButton
              buttonText={capitalize(cat.name)}
              active={this.props.path === cat.name ? true : false}
              color="blue"
            />
          </Link>
        )}

        {this.props.path !== undefined
          ? <div className="close-button-container">
              <Link to="/">
                <CloseButton />
              </Link>
            </div>
          : null
        }
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

export default connect(mapStateToProps,null)(PostsCategoryFilter);
