import data from "./assets/data";
import MailDashboard from "./components/MailDashboard";

function App() {
  return (
    <>
      <div className='App'>
        <h2 className='bg-cyan-400 text-black'> hii from react APP !</h2>
        <MailDashboard mails={data} />
      </div>
    </>
  );
}

export default App;
