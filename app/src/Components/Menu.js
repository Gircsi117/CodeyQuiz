import React, { useContext } from "react";
import { GameContext } from "../App";

const Menu = () => {
  const global = useContext(GameContext);

  return <div className="menu">
    <h1>Ez az én quiz játékom! 10 kérdést fogsz kapni, próbálj eltalálni minél többet!</h1>
    <button onClick={()=>{global.newGame()}}>Start</button>
  </div>;
};

export default Menu;
