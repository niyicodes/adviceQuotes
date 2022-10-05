import React from "react";
// import { Link } from 'react-router-dom'
import styled from "styled-components";

const Card = ({randomAdvice}) => {
 return (
  <QuoteCard>
   <h3>Tip of the Day is Here!</h3>
   <h4>Note it Down 🗒</h4>
   <p>{randomAdvice}</p>
  </QuoteCard>
 );
};

const QuoteCard = styled.div`
 max-height: 400px;
 padding: 30px 40px;
 background-color: #2d2c2c;
 border-radius: 10px;
 h3 {
  font-size: 25px;
  color: #7baedb;
 }

 h4 {
  margin-top: -10px;
  color: white;
  font-size: 15px;
 }

 p {
  color: whitesmoke;
  font-size: 20px;
  max-width: 100%;
  width: 85%;
  margin:auto;
 }

`;

export default Card;
