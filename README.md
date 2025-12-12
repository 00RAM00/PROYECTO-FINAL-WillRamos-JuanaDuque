# 📚 PROYECTO FINAL: Aplicación de Lista de Tareas (MERN Stack)

## Descripción del Proyecto

Este proyecto es una aplicación completa de lista de tareas pendiente (To-Do List) desarrollada con la arquitectura MERN (MongoDB, Express, React y Node.js). Permite a los usuarios crear, leer, actualizar y eliminar tareas (CRUD), demostrando un dominio de la lógica del negocio, el desarrollo frontend y backend, y el despliegue en entornos de producción.

## Estructura del Repositorio

El proyecto está organizado en una estructura de monorepo con las siguientes carpetas principales:

```
.
├── backend/            # Código del servidor Express/Node.js y la API REST
├── frontend/           # Código de la interfaz de usuario con React y Vite
├── .gitignore
├── ARQUITECTURA.md     # Documentación del diseño y componentes
├── API.md              # Documentación detallada de los Endpoints
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Uso |
| :--- | :--- | :--- |
| **Frontend** | React, Vite | Interfaz de usuario interactiva |
| **Backend** | Node.js, Express | Servidor y API REST |
| **Base de Datos** | MongoDB, Mongoose | Almacenamiento NoSQL de las tareas |
| **Despliegue** | Vercel | Alojamiento del Frontend |
| **Despliegue** | Render | Alojamiento del Backend |

-----

## 🚀 Instalación y Uso Local

Para ejecutar el proyecto en tu máquina local, sigue los pasos a continuación.

### 1\. Requisitos Previos

Asegúrate de tener instalado:

  * **Node.js** (versión 18 o superior recomendada)
  * **npm** (incluido con Node.js)
  * **Git**

### 2\. Clonar el Repositorio

Abre tu terminal y clona el proyecto:

```bash
git clone [REEMPLAZAR_URL_DEL_REPOSITORIO]
cd [REEMPLAZAR_NOMBRE_DEL_PROYECTO]
```

### 3\. Configuración de Variables de Entorno

**Crea un archivo `.env` en la carpeta `backend/`** con la siguiente variable:

```
# backend/.env

# Sustituye [TU_URL_DE_CONEXION] con tu cadena de conexión de MongoDB/Railway
DATABASE_URL="[TU_URL_DE_CONEXION]" 

# Puerto en el que correrá el servidor local
PORT=5000 
```

### 4\. Instalación de Dependencias

Instala las dependencias para el Backend y el Frontend por separado:

```bash
# Instalar dependencias del Backend
cd backend
npm install

# Instalar dependencias del Frontend
cd ../frontend
npm install
```

### 5\. Configuración de Conexión del Frontend

**Crea un archivo `.env` en la carpeta `frontend/`** con la siguiente variable. Como lo ejecutarás en local, usa la URL de tu servidor Express local:

```
# frontend/.env

# URL del servidor backend local (Express)
VITE_API_URL="http://localhost:5000"
```

### 6\. Ejecución del Proyecto

Ejecuta ambos servicios en terminales separadas:

#### Terminal 1: Iniciar el Backend

```bash
cd backend
npm start
# Deberías ver: "✅ MongoDB Connected" y "Servidor Express corriendo en el puerto 5000"
```

#### Terminal 2: Iniciar el Frontend

```bash
cd frontend
npm run dev
# Deberías ver la URL de tu servidor Vite (ej. http://localhost:5173/)
```

Abre la URL del Frontend en tu navegador para comenzar a usar la aplicación.

-----

## 🌐 Despliegue en Producción

La aplicación se encuentra desplegada y accesible a través de los siguientes dominios:

| Componente | Plataforma | URL |
| :--- | :--- | :--- |
| **Frontend** | Vercel | [REEMPLAZAR\_URL\_PÚBLICA\_VERCEL] |
| **Backend** | Render | [REEMPLAZAR\_URL\_PÚBLICA\_RENDER] |
