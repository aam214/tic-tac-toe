import './App.css';
import { useState } from 'react';

export default function Square({value}){
  const [value, setValue]= useState(null);
  function handleClick(){
    console.log('clicked');
  }
  
  
  return( <button onClick={handleClick}
  className="Square">
    {value}</button>);
}


