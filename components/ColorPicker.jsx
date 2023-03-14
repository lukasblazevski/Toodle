import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

function TwitterPickerComponent({ color, onChange }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (color) => {
    onChange(color.hex);
  };

  return (
    <div>
      <div
        style={{
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          backgroundColor: color,
          cursor: 'pointer',
        }}
        onClick={handleColorClick}
      />
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <div style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }} onClick={handleColorClose} />
          <TwitterPicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}
    </div>
  );
}
