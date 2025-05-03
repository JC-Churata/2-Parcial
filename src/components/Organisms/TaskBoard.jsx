import React from 'react';
import StatusTag from '../Moleculas/StatusTag';
import CardFooter from '../Moleculas/CardFooter';
import './TaskBoard.css';

const TaskBoard = ({ columns }) => {
  return (
    <div className="task-board">
      {columns.map((column) => (
        <div key={column.id} className="board-column">
          <div className="column-header">
            <h3>{column.title}</h3>
            <span className="task-count">{column.tasks.length}</span>
          </div>
          <div className="tasks-container">
            {column.tasks.map((task) => (
              <div key={task.id} className="task-card">
                <StatusTag 
                  statusColor={task.typeColor} 
                  number={task.id} 
                  title={task.title} 
                  code={task.type} 
                />
                <div className="task-description">
                  <p>{task.description || "Descripción no disponible"}</p>
                </div>
                <CardFooter 
                  assignee={task.assignee} 
                  points={task.storyPoints} 
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;