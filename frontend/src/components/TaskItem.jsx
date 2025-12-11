// frontend/src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ todo, onToggleStatus, onDelete }) => {
    const isCompleted = todo.status === 'completed';

    return (
        // AÑADIR CLASES task-item y completed
        <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <small>Creada: {new Date(todo.created_at).toLocaleDateString()}</small>
            
            <div className="task-buttons"> 
                <button onClick={() => onToggleStatus(todo._id, todo.status)}>
                    {isCompleted ? 'Marcar como Pendiente' : 'Completar Tarea'}
                </button>
                
                <button onClick={() => onDelete(todo._id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default TaskItem;