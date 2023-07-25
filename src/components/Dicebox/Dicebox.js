import React, { useState, useEffect, useRef } from 'react';
import Dice from '../Dice/Dice.js';
import '../Dicebox/Dicebox.css';

const DiceBox = () => {
  const [diceWidth, setDiceWidth] = useState(0);
  const [dice1, setDice1] = useState(1);

  const diceRef = useRef(null);
  
  // console.log(`diceWidth : ${diceWidth}`);
  // console.log(`dice 1 : ${dice1}`);
  // console.log(`setDice1 : ${setDice1}`);
  
  useEffect(() => {
    setTimeout(() => {
      const updateDiceWidth = () => {
        if (diceRef.current) {
          console.log("???????????")
          setDiceWidth(diceRef.current.clientWidth);
        }
      };

      console.log(`dicebox ${diceWidth}`)
      
      window.addEventListener('resize', updateDiceWidth);
      
      // Call it once to set the initial dice width
      updateDiceWidth();
      
      return () => {
        window.removeEventListener('resize', updateDiceWidth);
      };
    }, 1000)
    
  }, []);
  
  const rolling = () => {
    let ranNum = Math.floor(Math.random() * 6) + 1
    setDice1(ranNum);
    // console.log(ranNum);
  };
  
  return (
    <section id="diceBox">
      <div className="dice_wrap">
        <Dice ref={diceRef} face={dice1} diceWidth={diceWidth} />
      </div>
      <button id="btnRolling" onClick={rolling}>
        주사위 굴리기
      </button>
    </section>
  );
};

export default DiceBox;


// dice_face={`dice_face${dice1}`}