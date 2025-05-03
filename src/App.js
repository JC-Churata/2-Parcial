import React from 'react';
import JiraBoardTemplate from './templates/JiraBoardTemplate';

function App() {
  // Datos de ejemplo (mover a un archivo externo si es necesario)
  const columns = [
    {
      id: 1,
      title: "Por Hacer",
      tasks: [
        {
          id: 101,
          type: "Tarea",
          typeColor: "#61bd4f",
          title: "Implementar templates",
          description: "Crear JiraBoardTemplate",
          assignee: { avatar: "https://i.pravatar.cc/40?img=3", name: "Carlos" },
          storyPoints: 3
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
          description: "Ajustar padding en StatusTag",
          assignee: { avatar: "https://i.pravatar.cc/40?img=5", name: "María" },
          storyPoints: 5
        }
      ]
    }
  ];

  return <JiraBoardTemplate columns={columns} />;
}

export default App;