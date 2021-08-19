import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux'

// import selectors;
import { selectMatchedIDs } from '../board/boardSlice.js';

export const Score = () => {
  const cardsMatched = useSelector(selectMatchedIDs);
  
  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};