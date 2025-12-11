import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';

// Importa los componentes de UI que crearemos
import TaskForm from '../components/TaskForm'; 
import TaskItem from '../components/TaskItem';

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true); // Manejo de estado de carga [cite: 47]
    const [error, setError] = useState(null);     // Manejo de estado de error [cite: 47]

    // Función para cargar las tareas
    const fetchTodos = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTodos();
            setTodos(data);
        } catch (err) {
            setError('Fallo al cargar las tareas. Revisa el backend y CORS.');
        } finally {
            setLoading(false);
        }
    };

    // Cargar tareas al montar el componente
    useEffect(() => {
        fetchTodos();
    }, []);

    // ------------------- CRUD Handlers -------------------

    // Crear
    const handleCreate = async (title, description) => {
        try {
            const newTodo = await createTodo(title, description);
            setTodos([...todos, newTodo.todo]);
        } catch (err) {
            setError(err.message);
        }
    };

    // Actualizar (Estado/Completado)
    const handleToggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
        try {
            const updatedTodoResponse = await updateTodo(id, { status: newStatus });
            
            // Actualizar el estado local (optimista)
            setTodos(todos.map(todo => 
                todo._id === id ? { ...todo, status: newStatus } : todo
            ));

        } catch (err) {
            setError(err.message);
            // Si falla, podrías llamar a fetchTodos() para sincronizar el estado
        }
    };
    
    // Eliminar
    const handleDelete = async (id) => {
        try {
            await deleteTodo(id);
            // Eliminar del estado local
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    // ------------------- Renderizado -------------------

    if (loading) return <div>Cargando tareas...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h1>Todo List Fullstack</h1>
            <TaskForm onCreate={handleCreate} />
            
            <h2>Tareas Pendientes</h2>
            {todos.filter(t => t.status === 'pending').map(todo => (
                <TaskItem 
                    key={todo._id} 
                    todo={todo} 
                    onToggleStatus={handleToggleStatus} 
                    onDelete={handleDelete}
                />
            ))}

            <h2>Tareas Completadas</h2>
            {todos.filter(t => t.status === 'completed').map(todo => (
                <TaskItem 
                    key={todo._id} 
                    todo={todo} 
                    onToggleStatus={handleToggleStatus} 
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default TodoListPage;