import './App.css';
import React from 'react';
import Square from "./Square"

export default function Board() {
  return (
  <>
  <div className='tic-tac'>
  <div className="board-row">
     <Square/>
     <Square/>
     <Square/>
      </div>
      <div className="board-row">
      <Square/>
     <Square/>
     <Square/>
      </div>
      <div className="board-row">
      <Square/>
     <Square/>
     <Square/>
      </div>
    </div>
    </>
);
}

