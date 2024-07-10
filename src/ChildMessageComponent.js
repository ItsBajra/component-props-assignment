import React from 'react';

const ChildMessageComponent = ({ message }) => {
  return (
    <div className="text-xl font-bold">
      {message}
    </div>
  );
};

export default ChildMessageComponent;
