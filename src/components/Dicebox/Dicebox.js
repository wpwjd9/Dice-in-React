import React, { useState, useEffect, useRef } from 'react';
import Dice from '../Dice/Dice.js';
import '../Dicebox/Dicebox.css';

const DiceBox = () => {
  const [diceWidth, setDiceWidth] = useState(0);
  const [dice1, setDice1] = useState(1);

  const diceRef = useRef(null);
  
  /////////////////////////////////
  useEffect(() => {
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
    
  }, [diceWidth]);
  ///////////////////////////////
  
  const rolling = () => {
    let ranNum = Math.floor(Math.random() * 6) + 1
    setDice1(ranNum);
  };
  
  return (
    <section id="diceBox" ref={diceRef}>
      <div className="dice_wrap">
        <Dice face={dice1} diceWidth={diceWidth} />
      </div>
      <button id="btnRolling" onClick={rolling}>
        주사위 굴리기
      </button>
    </section>
  );
};

export default DiceBox;