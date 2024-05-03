import "./App.css";
import { Notifications } from "@bdhamithkumara/react-push-notification";
import Timer from "./components/timer";

function App() {
  return (
    <>
      <div>
        <Notifications />

        <Timer />
      </div>
    </>
  );
}

export default App;
