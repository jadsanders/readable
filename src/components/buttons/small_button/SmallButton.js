import React from 'react';
import './SmallButton.css'

const SmallButton = (props) => (

  <div className=
    { props.active === true
      ? `small-button small-button-${props.color} small-button-${props.color}-active`
      : `small-button small-button-${props.color}`
    }
  >
    {props.buttonText}
  </div>
)

export default SmallButton;
