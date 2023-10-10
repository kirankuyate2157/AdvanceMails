const data=[
    {
      "id": 1,
      "subject": "Meeting Agenda",
      "sender": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "date": "2023-09-28 10:30 AM",
      "folder": "inbox",
      "isRead": false,
      "isStarred": false,
      "labels": ["Work", "Meeting"],
      "attachments": [
        {
          "filename": "agenda.pdf",
          "size": "2.1 MB"
        }
      ],
      "body": "Dear Team,\n\nPlease find attached the agenda for our upcoming meeting. Kindly review it before the meeting.\n\nBest regards,\nJohn"
    },
    {
      "id": 2,
      "subject": "Report Submission",
      "sender": {
        "name": "Jane Smith",
        "email": "jane.smith@example.com"
      },
      "date": "2023-09-27 03:45 PM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": false,
      "labels": ["Work", "Report"],
      "attachments": [
        {
          "filename": "report.docx",
          "size": "1.5 MB"
        }
      ],
      "body": "Hi all,\n\nI have completed the quarterly report. You can find it attached to this email. Let me know if you have any feedback.\n\nRegards,\nJane"
    },
    {
      "id": 3,
      "subject": "Invitation to Webinar",
      "sender": {
        "name": "Webinar Team",
        "email": "webinar@example.com"
      },
      "date": "2023-09-26 09:15 AM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": true,
      "labels": ["Webinar", "Education"],
      "attachments": [],
      "body": "Hello,\n\nYou are invited to our upcoming webinar on 'Advanced Web Development.' Please register using the provided link.\n\nBest regards,\nWebinar Team"
    },
    {
      "id": 4,
      "subject": "Job Interview Invitation",
      "sender": {
        "name": "HR Department",
        "email": "hr@example.com"
      },
      "date": "2023-09-25 02:00 PM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": true,
      "labels": ["Job", "Interview"],
      "attachments": [],
      "body": "Dear Applicant,\n\nCongratulations! You have been selected for an interview for the position of Software Developer. Please confirm your availability.\n\nSincerely,\nHR Department"
    },
    {
      "id": 5,
      "subject": "Reminder: Project Deadline",
      "sender": {
        "name": "Manager",
        "email": "manager@example.com"
      },
      "date": "2023-09-24 11:00 AM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": false,
      "labels": ["Work", "Deadline"],
      "attachments": [],
      "body": "Team,\n\nThis is a friendly reminder that the project deadline is approaching. Let's ensure all tasks are completed on time.\n\nRegards,\nManager"
    },
    {
      "id": 6,
      "subject": "Holiday Party Invitation",
      "sender": {
        "name": "Event Coordinator",
        "email": "events@example.com"
      },
      "date": "2023-09-23 05:30 PM",
      "folder": "inbox",
      "isRead": false,
      "isStarred": true,
      "labels": ["Event", "Party"],
      "attachments": [],
      "body": "Hello,\n\nYou are invited to our annual holiday party. Join us for a night of fun, food, and festivities!\n\nBest regards,\nEvent Coordinator"
    },
    {
      "id": 7,
      "subject": "Payment Confirmation",
      "sender": {
        "name": "Finance Department",
        "email": "finance@example.com"
      },
      "date": "2023-09-22 01:45 PM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": false,
      "labels": ["Finance", "Payment"],
      "attachments": [],
      "body": "Dear Customer,\n\nThis email is to confirm the successful payment of your recent invoice. Thank you for your prompt payment.\n\nSincerely,\nFinance Department"
    },
    {
      "id": 8,
      "subject": "New Product Announcement",
      "sender": {
        "name": "Marketing Team",
        "email": "marketing@example.com"
      },
      "date": "2023-09-21 08:00 AM",
      "folder": "inbox",
      "isRead": false,
      "isStarred": false,
      "labels": ["Marketing", "Product"],
      "attachments": [
        {
          "filename": "product.jpg",
          "size": "500 KB"
        }
      ],
      "body": "Hi,\n\nWe are excited to announce the launch of our new product! Check out the attached image for a sneak peek.\n\nBest regards,\nMarketing Team"
    },
    {
      "id": 9,
      "subject": "Vacation Request Approved",
      "sender": {
        "name": "HR Department",
        "email": "hr@example.com"
      },
      "date": "2023-09-20 04:15 PM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": false,
      "labels": ["HR", "Vacation"],
      "attachments": [],
      "body": "Dear Employee,\n\nYour vacation request has been approved. Enjoy your time off!\n\nSincerely,\nHR Department"
    },
    {
      "id": 10,
      "subject": "Important Security Update",
      "sender": {
        "name": "IT Department",
        "email": "it@example.com"
      },
      "date": "2023-09-19 12:30 PM",
      "folder": "inbox",
      "isRead": true,
      "isStarred": false,
      "labels": ["IT", "Security"],
      "attachments": [],
      "body": "Hello,\n\nWe have implemented an important security update for your account. Please review this email for details.\n\nBest regards,\nIT Department"
    }
    // Add more mail objects here
  ]
  
  export default data;