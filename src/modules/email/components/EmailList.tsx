import EmailRow from "./EmailRow";

const emails = [
  { sender: "Michael Adams", subject: "Meeting follow-up", time: "8:17 AM" },
  {
    sender: "Takaied Market",
    subject: "Dashboard template $29",
    time: "June 19"
  },
  { sender: "Button Co", subject: "Your invoice is ready", time: "June 17" }
  // Add more...
];

const EmailList = () => {
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-160px)]">
      {emails.map(email => (
        <EmailRow key={email.time} {...email} />
      ))}
    </div>
  );
};

export default EmailList;
