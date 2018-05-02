import React from 'react';
import './MiniButton.css'

const MiniButton = (props) => (
  <div className=
    { props.active === true
      ? `mini-button mini-button-${props.color} mini-button-${props.color}-active`
      : `mini-button mini-button-${props.color}`
    }
    onClick={props.onClick}
  >
    {props.buttonText}
  </div>
)

export default MiniButton;
