import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ParentToggleComponent from './ParentToggleComponent';
import ParentCounterComponent from './ParentCounterComponent';
import ParentMessageComponent from './ParentMessageComponent';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <ParentToggleComponent />
        <ParentCounterComponent />
        <ParentMessageComponent />
      </div>
    </div>
  );
}

export default App;
