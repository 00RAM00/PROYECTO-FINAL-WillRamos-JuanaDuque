// backend/src/controllers/todoController.js

const Todo = require('../models/Todo');
const mongoose = require('mongoose'); // Necesario para validar IDs

// GET /api/todos - Listar tareas
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error al listar tareas', error: error.message });
    }
};

// POST /api/todos - Crear tarea
exports.createTodo = async (req, res) => {
    const { title, description } = req.body;

    // Validación mínima (Requisito: No permitir crear tareas sin título)
    if (!title) {
        return res.status(400).json({ message: 'El título de la tarea es obligatorio.' });
    }

    try {
        const newTodo = await Todo.create({ title, description });
        res.status(201).json({ message: 'Tarea creada exitosamente', todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error: error.message });
    }
};

// PUT /api/todos/:id - Actualizar tarea (incluye cambiar el status)
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID de tarea no válido.' });
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true } // 'new: true' devuelve el doc actualizado
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Tarea no encontrada.' }); // Manejo de errores básicos
        }

        res.status(200).json({ message: 'Tarea actualizada exitosamente', todo: updatedTodo });

    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error: error.message });
    }
};

// DELETE /api/todos/:id - Eliminar tarea
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID de tarea no válido.' });
    }

    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Tarea no encontrada.' }); // Manejo de errores básicos
        }

        res.status(204).send(); // 204 No Content para eliminación exitosa

    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error: error.message });
    }
};