import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition = () => false }) {
  const [ticket, setTicket] = useState(genTicket(n));

  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <>
    <div className="app">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />

      <br /><br /><br />

      <button  className="btn" onClick={buyTicket}>Buy New Ticket</button>

      <h3>{isWinning && "Congratulations, You Won 🎉"}</h3>
   </div>
    </>
  );
}
