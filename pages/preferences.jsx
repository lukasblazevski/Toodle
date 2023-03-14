import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

function Preferences() {
  const [primaryColor, setPrimaryColor] = useState('#007bff');
  const [secondaryColor, setSecondaryColor] = useState('#6c757d');

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color);
  };

  const handleSecondaryColorChange = (color) => {
    setSecondaryColor(color);
  };

  return (
    <div>
      <h2>Preferences</h2>
      <div>
        <h3>Primary Color</h3>
        <TwitterPicker color={primaryColor} onChange={handlePrimaryColorChange} />
      </div>
      <div>
        <h3>Secondary Color</h3>
        <TwitterPicker color={secondaryColor} onChange={handleSecondaryColorChange} />
      </div>
    </div>
  );
}

export default Preferences;
