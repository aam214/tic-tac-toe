import './App.css';
import { useState } from 'react';

export default function Square({value, onSquareClick}){

  return( <button className="Square" onClick={onSquareClick}>
    {value}</button>);
}


