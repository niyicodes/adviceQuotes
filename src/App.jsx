import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FetchButton from "./components/FetchButton/FetchButton";
import Card from "./components/Card/Card";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="App">
   <FetchButton />
   <Card />
  </div>
 );
}

export default App;
