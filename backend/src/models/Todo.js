const mongoose = require('mongoose');

// Se define el Schema (esquema) de la tarea
const TodoSchema = new mongoose.Schema({
    // 1. Título (obligatorio) [cite: 29, 38]
    title: {
        type: String,
        required: [true, 'El título de la tarea es obligatorio.'],
        trim: true
    },
    // 2. Descripción (opcional) [cite: 30]
    description: {
        type: String,
        required: false
    },
    // 3. Estado (pendiente/completada) [cite: 31]
    status: {
        type: String,
        enum: ['pending', 'completed'], // Valida que solo sean estos dos valores
        default: 'pending' // Valor por defecto
    },
    // 4. Fecha de creación [cite: 32]
    created_at: {
        type: Date,
        default: Date.now
    },
    // 5. user_id (opcional) [cite: 76]
    user_id: {
        type: mongoose.Schema.Types.ObjectId, // Tipo para IDs de usuario, si lo implementas
        ref: 'User',
        required: false
    }
});

// Exportar el modelo de Mongoose
module.exports = mongoose.model('Todo', TodoSchema);