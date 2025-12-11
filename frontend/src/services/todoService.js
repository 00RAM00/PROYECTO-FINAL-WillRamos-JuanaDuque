const API_URL = import.meta.env.VITE_API_URL; // Carga la URL del backend

// 1. LISTAR TAREAS (GET /api/todos) [cite: 64]
export const getTodos = async () => {
    try {
        const response = await fetch(`${API_URL}/api/todos`);
        if (!response.ok) {
            // Manejo de errores básicos [cite: 39]
            throw new Error(`Error al listar: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};

// 2. CREAR TAREA (POST /api/todos) [cite: 65]
export const createTodo = async (title, description) => {
    // El backend ya tiene la validación de título obligatorio [cite: 38]
    const response = await fetch(`${API_URL}/api/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear la tarea.');
    }
    return await response.json();
};

// 3. ACTUALIZAR TAREA (PUT /api/todos/:id) [cite: 66]
export const updateTodo = async (id, updates) => {
    const response = await fetch(`${API_URL}/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar la tarea.');
    }
    return await response.json();
};

// 4. ELIMINAR TAREA (DELETE /api/todos/:id) [cite: 67]
export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/api/todos/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 404) {
        throw new Error('Tarea no encontrada para eliminar.'); // Manejo de error 404 [cite: 39]
    }
    if (!response.ok && response.status !== 204) {
        throw new Error('Error al eliminar la tarea.');
    }
    // No devuelve JSON (cuerpo vacío con status 204 No Content)
};