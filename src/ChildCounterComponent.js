import React from 'react';

const ChildCounterComponent = ({ count }) => {
  return (
    <div className="text-xl font-bold">
      Count: {count}
    </div>
  );
};

export default ChildCounterComponent;
