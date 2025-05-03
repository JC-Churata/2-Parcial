import React from 'react';
import TaskBoard from '../components/Organisms/TaskBoard';
import './JiraBoardTemplate.css';

const JiraBoardTemplate = ({ columns }) => {
  return (
    <div className="jira-board-template">
      <h1 className="board-title">Jira Helper Board</h1>
      <TaskBoard columns={columns} />
    </div>
  );
};

export default JiraBoardTemplate;