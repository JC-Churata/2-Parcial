import React from 'react';
import TaskBoard from './components/Organisms/TaskBoard';

function App() {
  const columns = [
    {
      id: 1,
      title: "Por Hacer",
      tasks: [
        {
          id: 101,
          type: "Tarea",
          typeColor: "#61bd4f",
          title: "Implementar moléculas",
          description: "Crear componentes StatusTag y CardFooter",
          assignee: { 
            avatar: "https://i.pravatar.cc/40?img=3", 
            name: "Carlos" 
          },
          storyPoints: 5
        }
      ]
    },
    {
      id: 2,
      title: "En Progreso",
      tasks: [
        {
          id: 201,
          type: "Error",
          typeColor: "#eb5a46",
          title: "Corregir estilos",
          description: "Ajustar padding en CardFooter",
          assignee: { 
            avatar: "https://i.pravatar.cc/40?img=5", 
            name: "María" 
          },
          storyPoints: 3
        }
      ]
    }
  ];

  return <TaskBoard columns={columns} />;
}

export default App;