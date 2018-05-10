import React from 'react';
import './MediumButton.css'

const MediumButton = (props) => (
  <div className={`medium-button medium-button-${props.color}`} onClick={props.onClick}>
    {props.buttonText}
  </div>
)

export default MediumButton;
