import React, { useEffect, useState } from 'react';

const CLIENT_ID = '672641830297-fopp43q89fq6sm208f9p84asepkqh2kj.apps.googleusercontent.com';
const API_KEY = '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';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

function FetchData() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleClientLoad = () => {
      gapi.load('client:auth2', initClient);
    };

    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(checkSignInStatus);
        checkSignInStatus();
      });
    };

    const checkSignInStatus = () => {
      const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
      if (isSignedIn) {
        fetchEmails();
      } else {
        gapi.auth2.getAuthInstance().signIn();
      }
    };

    const fetchEmails = () => {
      gapi.client.gmail.users.messages.list({
        userId: 'me',
        maxResults: 10,
      }).then(response => {
        const emailIds = response.result.messages || [];

        const requests = emailIds.map(email => {
          return gapi.client.gmail.users.messages.get({
            userId: 'me',
            id: email.id,
          });
        });

        Promise.all(requests).then(emails => {
          const emailData = emails.map(email => email.result);
          setMessages(emailData);
          console.log("emails fetch data : ", emailData);
        });
      });
    };

    handleClientLoad();
  }, []);

  return (
    <div>
      <h1>Gmail Emails</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>From:</strong> {message.payload.headers.find(header => header.name === 'From').value}<br />
            <strong>Subject:</strong> {message.payload.headers.find(header => header.name === 'Subject').value}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
