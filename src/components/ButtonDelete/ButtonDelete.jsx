import React from 'react';
import './ButtonDelete.css';

function Bubble({ children, isButton, onBubbleClick }) {
  return (
    <div className="button-delete" onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
  )
}

export default Bubble