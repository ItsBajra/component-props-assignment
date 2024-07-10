import React, { useState } from 'react';
import ChildMessageComponent from './ChildMessageComponent';

const ParentMessageComponent = () => {
  const [message, setMessage] = useState("Hello, World!");

  const updateMessage = () => {
    setMessage("The message has been updated!");
  };

  return (
    <div className="p-4 text-center bg-gray-800 text-white rounded-md mx-auto my-4 w-96">
      <ChildMessageComponent message={message} />
      <button
        className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 hover:scale-105 transition transform duration-200"
        onClick={updateMessage}
      >
        Update Message
      </button>
    </div>
  );
};

export default ParentMessageComponent;
