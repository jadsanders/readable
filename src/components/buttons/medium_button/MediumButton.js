import React from 'react';
import './MediumButton.css'

const MediumButton = ({ color, onClick, buttonText }) => (
  <div className={`medium-button medium-button-${color} not-selectable`} onClick={onClick}>
    {buttonText}
  </div>
)

export default MediumButton;
