import React from 'react';

const ColorStrip = ({ reverse = false }) => {
  const colors = ['#FFD600', '#FF3B30', '#1E4DFF'];
  const displayColors = reverse ? [...colors].reverse() : colors;

  return (
    <div className="flex h-4 w-full border-b-[3px] border-black dark:border-tonedwhite divide-x-[3px] divide-black dark:divide-tonedwhite select-none">
      {displayColors.map((color, idx) => (
        <div key={idx} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export default ColorStrip;
