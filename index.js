const express = require('express');
const path = require('path');
const app = express();

// Sirviendo archivos estáticos generados del frontend
app.use(express.static(path.join(__dirname, 'frontend/dist/AxoApp/browser')));

// Redirección de otras rutas al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/AxoApp/browser/index.html'));
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});