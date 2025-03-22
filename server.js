const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;  // Cambia el puerto si es necesario

// Sirve archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
