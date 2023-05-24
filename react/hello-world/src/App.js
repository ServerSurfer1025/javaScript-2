import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./components/Greet.js";
import { Welcome, Welcome2, Welcome3 } from "./components/Welcome.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/*<Greet name="Mike" nickname="Myers" />
      <button> Come on in</button>
      <p>this is a brand new paragraph for the example of this website.</p>
      <Greet name="John" nickname="Deer" />
      <Greet2 name="Mike" nickname="Myers" />
      <Greet3 name="John" nickname="Deer" />
      <Welcome name="Terrian" nickname="TJ" />
      <Welcome2 name="Valerie" nickname="Althea" />
  <Welcome3 /> */}
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
    </div>
  );
}

export default App;
