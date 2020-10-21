import React from 'react';

const SubscriptionSlider = ({ maxSubs, numSubs, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="range"
        id="numSubs"
        name="numSubs"
        min="0"
        max={maxSubs}
        value={numSubs}
        onChange={handleChange}
      />
    </div>
  );
};

export default SubscriptionSlider;
