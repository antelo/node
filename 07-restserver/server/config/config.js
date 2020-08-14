

// ===========
// Puerto
// ===========

process.env.PORT = process.env.PORT || 3000;

// ===========
// Entorno
// ===========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========
// Base de datos
// ===========

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===========
// Vencimiento del Token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
// ===========

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========
// SEED de autenticacion
// ===========

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===========
// Google Client ID
// ===========

process.env.CLIENT_ID = process.env.CLIENT_ID || '203723639006-9r66f298qh0v4j52de15fvnrud4udmsf.apps.googleusercontent.com';