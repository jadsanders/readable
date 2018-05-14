import React from 'react';
import './MiniButton.css'

const MiniButton = ({ active, color, onClick, buttonText }) => (
  <div className=
    { active === true
      ? `mini-button mini-button-${color} mini-button-${color}-active`
      : `mini-button mini-button-${color}`
    }
    onClick={onClick}
  >
    {buttonText}
  </div>
)

export default MiniButton;
