import React from 'react';
import './CardFooter.css';

export default function CardFooter({ assignee, points }) {
  return (
    <div className="card-footer">
      <div className="assignee-container">
        <img 
          src={assignee.avatar} 
          alt={assignee.name} 
          className="assignee-avatar" 
        />
        <span className="assignee-name">{assignee.name}</span>
      </div>
      <div className="points-badge">
        {points} {points === 1 ? 'pt' : 'pts'}
      </div>
    </div>
  );
}