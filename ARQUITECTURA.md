# 🏗️ Documentación de Arquitectura: Todo-List App

Este documento detalla el diseño, los componentes y el flujo de datos de la aplicación de lista de tareas, basada en el stack **MERN**.

## 1. Visión General del Sistema

La aplicación sigue una arquitectura de **Cliente-Servidor** desacoplada, donde el frontend y el backend se comunican exclusivamente a través de una API RESTful sobre el protocolo HTTP.



### Capas de la Arquitectura:
* **Frontend (Presentación):** Desarrollado con **React** y **Vite**. Se encarga de la interfaz de usuario, el manejo del estado local y el consumo de la API.
* **Backend (Lógica de Negocio):** Desarrollado con **Node.js** y **Express**. Gestiona las rutas, la lógica CRUD y la validación de datos.
* **Base de Datos (Persistencia):** Utiliza **MongoDB** (vía Railway). Almacena los documentos de las tareas de forma no relacional.

---

## 2. Flujo de Datos

El flujo de información sigue un ciclo de vida estándar de solicitud-respuesta:

1.  **Acción del Usuario:** El usuario interactúa con la interfaz (ej. hace clic en "Eliminar").
2.  **Petición HTTP:** El servicio de React (`todoService.js`) realiza una petición fetch (GET, POST, PUT o DELETE) a la URL del backend en Render.
3.  **Procesamiento:** El servidor Express recibe la petición, extrae los parámetros (ID, cuerpo JSON) y llama al controlador correspondiente.
4.  **Interacción con DB:** El controlador usa el modelo de **Mongoose** para realizar la operación en la base de datos MongoDB.
5.  **Respuesta:** El servidor devuelve un código de estado (200, 201, 204, 404, 500) y los datos resultantes al frontend.
6.  **Actualización de Interfaz:** React actualiza el estado (`useState`) y renderiza los cambios para el usuario.

---

## 3. Modelo de Datos (Mongoose Schema)

La aplicación utiliza un único modelo para representar las tareas. Se eligió **MongoDB** por su flexibilidad para manejar documentos JSON similares a los objetos de JavaScript.

**Esquema de `Todo`:**

| Campo | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | String | Sí | El nombre o título de la tarea. |
| `description` | String | No | Detalles adicionales sobre la tarea. |
| `completed` | Boolean | No (Def: `false`) | Indica si la tarea ya fue realizada. |
| `createdAt` | Date | Automático | Fecha de creación del registro. |

---

## 4. Estrategia de Despliegue (CI/CD)

El sistema está diseñado para la entrega continua:
* **Frontend:** Alojado en **Vercel**, configurado para redespliegues automáticos al hacer `push` a la rama `main`.
* **Backend:** Alojado en **Render**, conectado directamente al repositorio de GitHub.
* **Base de Datos:** Instancia gestionada en **Railway**, permitiendo acceso global mediante una URI de conexión segura.

---

## 5. Decisiones de Diseño

* **CORS:** Se implementó una política de seguridad restrictiva que solo permite peticiones desde el dominio de Vercel.
* **Variables de Entorno:** Se utilizan para ocultar credenciales sensibles (como la URL de MongoDB) y permitir que el frontend cambie de API fácilmente entre local y producción.
* **Modularidad:** El código está dividido por responsabilidades (Config, Controllers, Models, Routes) para facilitar el mantenimiento.