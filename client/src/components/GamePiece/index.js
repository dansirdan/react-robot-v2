import React from 'react';
import './style.css';

function GamePiece(props) {
  return (
    <div className="col-6" id="gamePiece">
      <div className="card">
        <img className="card-img rounded" id={props.id} role="button" src={props.image} alt={props.color}
          onClick={() => props.makeGuess(props.id)}
        />
      </div>
    </div>
  )
}

export default GamePiece;