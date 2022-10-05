import React, { useEffect, useState } from 'react'; 
import { createClient } from 'pexels';
import "./App.css";
import Card from "./components/Card/Card";

function App() {
 const [quotes, setQuotes] = useState("");
 const client = createClient('563492ad6f91700001000001c51b42520a1a4b79987d274ce83654a0');

 const fetchQuote = () => {
  fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
   setQuotes(data.slip.advice);
  })
  .catch((error) => {
   console.log("error in fetching advices");
  });
 }
 useEffect(() => {
  fetchQuote()
 }, []);
 return (
  <div className="App">
   <button
    onClick={fetchQuote}
    style={{ outline: "none" }}
   >
    Get random advice
   </button>
   <Card randomAdvice={quotes}/>
  </div>
 );
}

export default App;
