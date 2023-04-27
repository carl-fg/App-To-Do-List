import React from 'react';
import './Card.css';

export default function Card(props) {

  return (
    <div className="card">
        <h3 className="card_title">{props.tache}</h3>
        <p className="card_text">{props.txt}</p>
        <button onClick={() => props.supprFunc(props.index)} className="card_btn_delete">X</button>
    </div>
  )
}