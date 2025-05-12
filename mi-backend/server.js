const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.post('/send-message', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Aquí conectarías a Supabase y Twilio
  console.log('Formulario recibido:', { nombre, email, mensaje });

  res.status(200).json({ message: 'Mensaje recibido correctamente' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
