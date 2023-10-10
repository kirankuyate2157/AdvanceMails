import React, { useState } from "react";
import MailList from "./MailList";
import MailDetails from "./MailDetails";

import { RiInboxLine, RiSendPlaneLine } from "react-icons/ri";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const MailDashboard = ({ mails }) => {
  const [selectedMail, setSelectedMail] = useState(null);
  const [activeTab, setActiveTab] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTabsExpanded, setTabsExpanded] = useState(true);

  const filteredMails = mails
    .filter((mail) => mail.folder === activeTab)
    .filter((mail) =>
      mail.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleMailClick = (mail) => {
    setSelectedMail(mail);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBackClick = () => {
    setSelectedMail(null);
  };
  const handleToggleTabs = () => {
    setTabsExpanded(!isTabsExpanded);
  };

  const Tab = ({ label, icon, activeTab, onClick }) => {
    const isActive = activeTab === label.toLowerCase();
    return (
      <motion.li
        onClick={onClick}
        className={`font-mono cursor-pointer mb-2 py-2 bg-gray-300 flex items-center px-4 rounded-full text-xl ${
          isActive
            ? "bg-blue-500 text-blue font-semibold"
            : "hover:bg-blue-200"
        }`}
      >
        {icon}
        {isTabsExpanded && (
          <span className='text-xs text-slate-white  ml-2 hidden lg:flex'>{label}</span>
        )}
      </motion.li>
    );
  };

  return (
    <div className='w-screen font-mono bg-slate-300 flex h-screen'>
      <div
        className={`w-[10%] flex flex-col justify-between items-center bg-gray-100 p-4 ${
          isTabsExpanded ? "w-1/9" : "w-20"
        }`}
      >
        <AnimatePresence>
          {
            <motion.ul
              initial={{ width: 1 }}
              animate={{ width: "auto" }}
              exit={{ width: 1 }}
              className='overflow-hidden'
            >
              <Tab
                label='Inbox'
                icon={<RiInboxLine />}
                activeTab={activeTab}
                onClick={() => handleTabClick("inbox")}
              />
              <Tab
                label='Sent'
                icon={<RiSendPlaneLine />}
                activeTab={activeTab}
                onClick={() => handleTabClick("sent")}
              />
             
            </motion.ul>
          }
        </AnimatePresence>
        <button
          className='mt-2 p-1 w-8 text-gray-600 flex justify-center hover:text-blue-500 focus:outline-none'
          onClick={handleToggleTabs}
        >
          {isTabsExpanded ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>
      <div className='w-full  h-screen border-l border-gray-300'>
        <div className='flex justify-start p-3  text-black pl-5  items-center bg-slate-50 gap-20'>
          <h1 className='text-xl font-semibold '>Mail Dashboard</h1>
          <div className='px-2'>
            <input
              type='text'
              placeholder='Search mails...'
              className='w-[30vw] p-1 px-3 bg-gray-200 text-gray-900 text-sm rounded-xl border'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {/* Mail List */}
        {selectedMail ? (
          <div>
            <button
              className='mb-4 text-sm mt-1 ml-1 xs:text-xs flex bg-slate-100 items-center gap-2 text-blue-500 hover:underline cursor-pointer'
              onClick={handleBackClick}
            >
              <FiChevronLeft className='text-xl' />
              Back to Mail List
            </button>
            <MailDetails mail={selectedMail} />
          </div>
        ) : (
          <MailList mails={filteredMails} onMailClick={handleMailClick} />
        )}
      </div>
    </div>
  );
};

export default MailDashboard;
