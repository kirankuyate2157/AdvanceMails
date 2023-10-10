
const MailDetails = ({ mail }) => {
  if (!mail) {
    return <p>Select a mail to view or Data Not found ! </p>;
  }
  const { subject, sender, date, labels, attachments, body } = mail;

  return (
    <div className='bg-white w-full max-h-[82vh]  p-2 text-black border rounded shadow overflow-y-auto'>
      <div className='bg-gray-200 p-3 rounded-md'>
        <h2 className='text-xl font-semibold'>{subject}</h2>
        <div className='flex justify-between items-center mt-2'>
          <div className='flex items-center '>
            <span className='text-gray-600 text-sm'>
              From: {sender.name} &lt;{sender.email}&gt;
            </span>
            <span className='ml-4 text-gray-600 text-sm'>{date}</span>
          </div>
          <div className='flex space-x-2'>
            {labels.map((label, index) => (
              <span
                key={index}
                className='px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded-full'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4 px-3'>
        {attachments.length > 0 && (
          <div className='border-t border-gray-300 pt-2'>
            <p className='font-semibold'>Attachments:</p>
            <ul>
              {attachments.map((attachment, index) => (
                <li key={index} className='text-gray-600'>
                  {attachment.filename} ({attachment.size})
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className='mt-4'>
          <p className='font-semibold'>Message:</p>
          <p className='mt-2 text-gray-700'>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default MailDetails;
