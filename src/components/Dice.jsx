import React, { useState, useEffect } from "react";
import "./Dice.css";

const Dice = () => {
  const [dice1, setdice1] = useState(null);
  const [dice2, setdice2] = useState(null);
  const [dice3, setdice3] = useState(null);

  useEffect(() => {
    window.addEventListener("keypress", onKeypress);
    return () => {
      window.removeEventListener("keypress", onKeypress);
    };
  }, []);

  const onKeypress = (e) => {
    if (e.key === " ") {
      setdice1(Math.floor(Math.random() * 6) + 1);
      setdice2(Math.floor(Math.random() * 6) + 1);
      setdice3(Math.floor(Math.random() * 6) + 1);
    }
  };

  const rollthedice1 = () => {
    setdice1(Math.floor(Math.random() * 6) + 1);
  };
  const rollthedice2 = () => {
    setdice2(Math.floor(Math.random() * 6) + 1);
  };
  const rollthedice3 = () => {
    setdice3(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="app">
      <h2>
        Zərləri birlikdə atmaq üçün boşluğa, tək-tək atmaq üçün isə üstlərinə
        bas
      </h2>
      <div className="dices">
        <div onClick={rollthedice1} className="dice">
          {dice1}
        </div>
        <div onClick={rollthedice2} className="dice">
          {dice2}
        </div>
        <div onClick={rollthedice3} className="dice">
          {dice3}
        </div>
      </div>
    </div>
  );
};

export default Dice;
