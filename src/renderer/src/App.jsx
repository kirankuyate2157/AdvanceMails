import data from "./assets/data";
import MailDashboard from "./components/MailDashboard";

function App() {
  return (
    <>
      <div className='App w-full'>
        <MailDashboard mails={data} />
      </div>
    </>
  );
}

export default App;
