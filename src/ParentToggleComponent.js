import React, { useState } from 'react';
import ChildToggleComponent from './ChildToggleComponent';

const ParentToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div className="p-4 text-center bg-gray-800 text-white rounded-md mx-auto my-4 w-96">
      <ChildToggleComponent isOn={isOn} toggleSwitch={toggleSwitch} />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-105 transition transform duration-200"
        onClick={toggleSwitch}
      >
        Toggle Switch
      </button>
    </div>
  );
};

export default ParentToggleComponent;
