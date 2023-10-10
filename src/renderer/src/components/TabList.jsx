// TabList.js
import React from 'react';

const TabList = ({ activeTab, onTabChange }) => {
  const tabs = ['inbox', 'sent', 'drafts']; // Define your tabs here

  return (
    <div className="bg-white p-4 shadow-md flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${
            activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } px-4 py-2 rounded-md`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabList;
