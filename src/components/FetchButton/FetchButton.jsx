import React from 'react'

const FetchButton = ({onClick}) => {
 return (
  <button onClick={onClick} style={{outline: 'none',}}>Get random quote</button>
 )
}

export default FetchButton