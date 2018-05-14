import React from 'react';
import './LargeButton.css'

const LargeButton = ({ buttonText, color }) => (
  <div className={`large-button large-button-${color}`}>
    {buttonText}
  </div>
)

export default LargeButton;
