import React, { useState } from "react";
import MailList from "./MailList";
import MailDetails from "./MailDetails";

const MailDashboard = ({ mails }) => {
  const [selectedMail, setSelectedMail] = useState(null);
  const [activeTab, setActiveTab] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMails = mails
    .filter((mail) => mail.folder === activeTab)
    .filter((mail) =>
      mail.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleMailClick = (mail) => {
    setSelectedMail(mail);
  };

  return (
    <div className='flex h-screen'>
      <div className='w-1/4 bg-gray-100 p-4 overflow-y-auto'>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search mails...'
            className='w-full p-2 rounded border'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ul>
          <li
            className={`cursor-pointer mb-2 ${
              activeTab === "inbox" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("inbox")}
          >
            Inbox
          </li>
          <li
            className={`cursor-pointer mb-2 ${
              activeTab === "sent" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("sent")}
          >
            Sent
          </li>
          {/* Add more tabs as needed */}
        </ul>
      </div>
      <div className='w-3/4 p-4 border-l border-gray-300 overflow-y-auto'>
        <h1 className='text-2xl font-semibold mb-4'>Mail Dashboard</h1>
        <MailList mails={filteredMails} onMailClick={handleMailClick} />
      </div>
      <div className='w-1/4 bg-gray-100 p-4 overflow-y-auto'>
        <h2 className='text-2xl font-semibold mb-4'>Mail Details</h2>
        {selectedMail ? (
          <MailDetails mail={selectedMail} />
        ) : (
          <p>Select a mail to view</p>
        )}
      </div>
    </div>
  );
};

export default MailDashboard;
