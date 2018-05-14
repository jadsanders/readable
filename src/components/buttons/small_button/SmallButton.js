import React from 'react';
import './SmallButton.css'

const SmallButton = ({ active, color, buttonText }) => (

  <div className=
    { active === true
      ? `small-button small-button-${color} small-button-${color}-active`
      : `small-button small-button-${color}`
    }
  >
    {buttonText}
  </div>
)

export default SmallButton;
