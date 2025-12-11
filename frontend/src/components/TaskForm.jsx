import React, { useState } from 'react';

const TaskForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return; // Validación básica de frontend
        onCreate(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título de la nueva tarea (obligatorio)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Añadir Tarea</button>
        </form>
    );
};

export default TaskForm;