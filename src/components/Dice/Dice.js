import React from 'react';
import './Dice.css';

const Dice = ({ face, diceWidth }) => {

  // console.log(`diceWidth: ${diceWidth}`)
  // const getTransform = (index) => {
  //   const rotations = [
  //     'rotateX(0deg) translateZ(' + diceWidth/2 + 'px)',
  //     'rotateX(0deg) translateZ(' + diceWidth/2 + 'px)',
  //     'rotateX(-90deg) translateZ(' + diceWidth/2 + 'px)',
  //     'rotateX(-270deg) translateZ(' + diceWidth/2 + 'px)',
  //     'rotateX(0deg) translateZ(' + diceWidth/2 + 'px)',
  //     'rotateX(0deg) translateZ(' + diceWidth/2 + 'px)',
  //   ];
  //   return rotations[index - 1];
  // };
  

  return (
    <div className='dice0'>
      <div className='dice_inner'>
        <div className={`dice face${face}`}>
            <div className="face1" style={{transform: `rotateY(0deg) translateZ(${diceWidth/2}px)`, background: "red"}}>1</div>
            <div className="face2" style={{transform: `rotateY(90deg) translateZ(${diceWidth/2}px)`, background: "blue"}}>2</div>
            <div className="face3" style={{transform: `rotateX(90deg) translateZ(${diceWidth/2}px)`, background: "green"}}>3</div>
            <div className="face4" style={{transform: `rotateX(270deg) translateZ(${diceWidth/2}px)`, background: "pink"}}>4</div>
            <div className="face5" style={{transform: `rotateY(270deg) translateZ(${diceWidth/2}px)`, background: "royalblue"}}>5</div>
            <div className="face6" style={{transform: `rotateY(180deg) translateZ(${diceWidth/2}px)`, background: "purple"}}>6</div>
            </div>
        </div>
      </div>
  );
};

export default Dice;
