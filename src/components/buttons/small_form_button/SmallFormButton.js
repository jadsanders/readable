import React from 'react';
import './SmallFormButton.css';

const SmallFormButton = (props) => (
  <div className={`small-form-button small-form-button-${props.color} not-selectable`} onClick={props.onClick}>
    {props.buttonText}
  </div>
)

export default SmallFormButton;
