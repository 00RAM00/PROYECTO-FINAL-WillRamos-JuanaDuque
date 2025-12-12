# 🚀 Documentación de la API: Todo-List

Esta API permite gestionar una lista de tareas mediante operaciones CRUD estándar.

## 📍 URL Base

  * **Producción:** `https://[TU-URL-DE-RENDER].onrender.com/api/todos`
  * **Local:** `http://localhost:5000/api/todos`

-----

## 🛠️ Endpoints

### 1\. Obtener todas las tareas

Retorna la lista completa de tareas almacenadas en la base de datos.

  * **Método:** `GET`
  * **URL:** `/`
  * **Respuesta Exitosa (200 OK):**
    ```json
    [
      {
        "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
        "title": "Comprar leche",
        "description": "Ir al supermercado antes de las 6pm",
        "completed": false,
        "createdAt": "2023-09-01T10:00:00.000Z"
      }
    ]
    ```

### 2\. Crear una nueva tarea

Añade una tarea a la base de datos.

  * **Método:** `POST`
  * **URL:** `/`
  * **Cuerpo de la Petición (JSON):**
    | Campo | Tipo | Requerido | Descripción |
    | :--- | :--- | :--- | :--- |
    | `title` | String | **Sí** | Título de la tarea. |
    | `description` | String | No | Detalles adicionales. |
  * **Respuesta Exitosa (201 Created):** Retorna el objeto de la tarea creada con su `_id`.

### 3\. Actualizar una tarea

Modifica una tarea existente (por ejemplo, para marcarla como completada).

  * **Método:** `PUT`
  * **URL:** `/:id`
  * **Cuerpo de la Petición (JSON):** Se pueden enviar uno o varios campos.
    ```json
    {
      "completed": true
    }
    ```
  * **Respuesta Exitosa (200 OK):** Retorna el objeto actualizado.

### 4\. Eliminar una tarea

Borra permanentemente una tarea de la base de datos.

  * **Método:** `DELETE`
  * **URL:** `/:id`
  * **Respuesta Exitosa (204 No Content):** No devuelve cuerpo en la respuesta.

-----

## ⚠️ Códigos de Error

| Código | Significado | Descripción |
| :--- | :--- | :--- |
| **400** | Bad Request | Falta el título o el formato del JSON es incorrecto. |
| **404** | Not Found | No se encontró una tarea con el ID proporcionado. |
| **500** | Server Error | Error interno en el servidor o fallo de conexión con MongoDB. |

-----

### ✅ ¡Proyecto Finalizado\!

Con estos tres archivos (`README.md`, `ARQUITECTURA.md` y `API.md`) en tu repositorio, has cumplido con el 100% de los requisitos solicitados en la guía del proyecto:

1.  **Frontend en React** funcional.
2.  **Backend en Express** con lógica CRUD.
3.  **Base de Datos NoSQL** (MongoDB/Railway).
4.  **Despliegue** en Vercel y Render.
5.  **Documentación Completa**.
