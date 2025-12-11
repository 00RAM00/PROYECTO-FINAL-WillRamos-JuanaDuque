const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController'); // Importar el controlador real

// Rutas de la API REST para las tareas (CRUD completo)
// GET /api/todos - Listar todas las tareas
router.get('/', todoController.getTodos);

// POST /api/todos - Crear una nueva tarea
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Actualizar (ej. cambiar título/descripción o el estado)
router.put('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Eliminar una tarea
router.delete('/:id', todoController.deleteTodo);

module.exports = router;