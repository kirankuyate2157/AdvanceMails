import React, { useState, useEffect } from "react";
const MailListItem = ({ mail, onClick }) => {
  return (
    <li
      className='cursor-pointer w-full p-2 rounded-lg m-2 shadow-sm  hover:bg-gray-200'
      onClick={() => onClick(mail)}
    >
      <div className='flex w-full items-center pr-3  justify-between'>
        <div className='flex items-center'>
          <div className='w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center mr-2'>
           
            {mail.sender.name[0].toUpperCase()} 
          </div>
          <div className='truncate w-full flex  justify-between'>
            <span className='font-semibold'>{mail.sender.name}</span>
            <span className='text-gray-600  text-sm ml-1'>
              - {mail.subject}
            </span>
          </div>
        </div>
        <div className='text-sm text-gray-600'>{mail.date}</div>
      </div>
    </li>
  );
};

const MailList = ({ mails, onMailClick }) => {
  const [visibleMails, setVisibleMails] = useState(10); // Number of initially visible mails
  const [isLoading, setIsLoading] = useState(false);

  // Function to load more mails
  const loadMoreMails = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleMails((prevVisibleMails) => prevVisibleMails + 10);
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  };

  // Scroll event listener to trigger loadMoreMails
  const handleScroll = () => {
    const scrollableDiv = document.getElementById("mailListContainer");
    if (
      scrollableDiv &&
      !isLoading &&
      scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
        scrollableDiv.scrollHeight
    ) {
      loadMoreMails();
    }
  };

  useEffect(() => {
    const scrollableDiv = document.getElementById("mailListContainer");
    scrollableDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id='mailListContainer'
      className='h-[92vh] w-full overflow-y-auto '
      // style={{ maxHeight: "calc(100vh - 200px)" }}
    >
      <ul>
        {mails.slice(0, visibleMails).map((mail) => (
          <MailListItem key={mail.id} mail={mail} onClick={onMailClick} />
        ))}
      </ul>
      {isLoading && (
        <div className='text-center py-2'>
          <span className='animate-spin'>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default MailList;
