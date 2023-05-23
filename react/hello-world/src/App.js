import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./components/Greet.js";
import { Welcome, Welcome2, Welcome3 } from "./components/Welcome.js";
import Message from "./components/Message.js";

function App() {
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
