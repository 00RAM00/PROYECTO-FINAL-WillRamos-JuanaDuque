const express = require('express');
const dotenv = require('dotenv');
const path = require('path'); // Importar el módulo 'path'
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors'); // El módulo CORS ya está importado

// 1. Calcular la ruta absoluta del archivo .env
// '__dirname' es la ruta del directorio actual (src/).
// path.resolve lo usa para construir la ruta al archivo '../.env' de forma segura.
const envPath = path.resolve(__dirname, '..', '.env');

// Cargar variables de entorno de .env usando la ruta absoluta
dotenv.config({ path: envPath });

// Establecer conexión con la base de datos de Railway
connectDB(); // Probar conexión local antes de desplegar

const app = express();

// -------------------------------------------------------------
// 2. CONFIGURACIÓN DE CORS
// Definir los orígenes permitidos (necesario para la prueba local)
const allowedOrigins = [
    'http://localhost:5173', // Frontend de Vite/React
    // Aquí añadirás el dominio de Vercel cuando despliegues
];

app.use(cors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Middlewares
app.use(express.json()); // Necesario para parsear el body de las peticiones POST/PUT

// Rutas
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;

// Esta línea es la que Render debe detectar
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});