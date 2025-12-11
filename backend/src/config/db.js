const mongoose = require('mongoose');

const connectDB = async () => {
    // La variable de entorno DATABASE_URL es obligatoria [cite: 69]
    if (!process.env.DATABASE_URL) {
        console.error("Error: La variable de entorno DATABASE_URL no está definida.");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        // Detener la aplicación si la conexión falla
        console.error(`❌ Error al conectar con MongoDB: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;