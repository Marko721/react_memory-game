import React from "react";
import "./SingleCard.css";

const SingleCard = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="/img/cover.png" alt="card back" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
