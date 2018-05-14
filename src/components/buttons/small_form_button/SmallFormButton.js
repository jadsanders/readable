import React from 'react';
import './SmallFormButton.css';

const SmallFormButton = ({ color, onClick, buttonText }) => (
  <div className={`small-form-button small-form-button-${color} not-selectable`} onClick={onClick}>
    {buttonText}
  </div>
)

export default SmallFormButton;
