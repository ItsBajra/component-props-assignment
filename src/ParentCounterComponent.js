import React, { useState } from 'react';
import ChildCounterComponent from './ChildCounterComponent';

const ParentCounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="p-4 text-center bg-gray-800 text-white rounded-md mx-auto my-4 w-96">
      <ChildCounterComponent count={count} />
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 hover:scale-105 transition transform duration-200 mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition transform duration-200"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default ParentCounterComponent;
