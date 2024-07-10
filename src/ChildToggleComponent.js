import React from 'react';

const ChildToggleComponent = ({ isOn }) => {
  return (
    <div className="text-xl font-bold">
      {isOn ? "The switch is ON" : "The switch is OFF"}
    </div>
  );
};

export default ChildToggleComponent;
