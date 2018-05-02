import React from 'react';
import './LargeButton.css'

const LargeButton = (props) => (
  <div className={`large-button large-button-${props.color}`}>
    {props.buttonText}
  </div>
)

export default LargeButton;
