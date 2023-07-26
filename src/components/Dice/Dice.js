import React from 'react';
import './Dice.css';

const Dice = ({ face, diceWidth }) => {

  let calDicewidth = diceWidth / 8

  return (
    <div className='dice0'>
      <div className='dice_inner'>
        <div className={`dice face${face}`}>
            <div className="face1" style={{transform: `rotateY(0deg) translateZ(${calDicewidth}px)`, background: "red"}}>1</div>
            <div className="face2" style={{transform: `rotateY(90deg) translateZ(${calDicewidth}px)`, background: "blue"}}>2</div>
            <div className="face3" style={{transform: `rotateX(90deg) translateZ(${calDicewidth}px)`, background: "green"}}>3</div>
            <div className="face4" style={{transform: `rotateX(270deg) translateZ(${calDicewidth}px)`, background: "pink"}}>4</div>
            <div className="face5" style={{transform: `rotateY(270deg) translateZ(${calDicewidth}px)`, background: "royalblue"}}>5</div>
            <div className="face6" style={{transform: `rotateY(180deg) translateZ(${calDicewidth}px)`, background: "purple"}}>6</div>
            </div>
        </div>
      </div>
  );
};

export default Dice;
