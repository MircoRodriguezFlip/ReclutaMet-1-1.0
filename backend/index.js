require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const multer = require('multer');
const path = require('path');

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Ruta para manejar el envío de datos y archivo
app.post('/submit', upload.single('cvFile'), async (req, res) => {
    const { nombre, telefono, email, estado } = req.body;
    const cvFile = req.file;

    // Validar el archivo
    const allowedFormats = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
    ];
    const maxSize = 2 * 1024 * 1024; // Tamaño máximo: 2 MB

    if (!cvFile) {
        return res.status(400).json({ message: 'El archivo es obligatorio.' });
    }

    if (!allowedFormats.includes(cvFile.mimetype)) {
        return res.status(400).json({ message: 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).' });
    }

    if (cvFile.size > maxSize) {
        return res.status(400).json({ message: 'El archivo es demasiado grande. Máximo 2 MB.' });
    }

    try {
        // Subir archivo a Cloudinary
        const fileUrl = await uploadFileToCloudinary(cvFile);

        console.log({
            nombre_completo: nombre,
            telefono: telefono,
            email: email,
            estado: estado,
            cvFile: [{ url: fileUrl }], // Verifica el formato aquí
        });

        // Guardar datos en Airtable
        const response = await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
                fields: {
                    nombre_completo: nombre,
                    telefono: telefono,
                    email: email,
                    estado: estado,
                    test: [{ url: fileUrl }], // Enlace del archivo
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json({ message: 'Datos enviados correctamente', data: response.data });
    } catch (error) {
        console.error('Error al enviar los datos a Airtable:', error);
        res.status(500).json({ message: 'Hubo un error al enviar los datos' });
    }
});

// Función para subir archivo a Cloudinary
async function uploadFileToCloudinary(file) {
    const cloudinary = require('cloudinary').v2;
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'cv_files' }, // Opcional: carpeta en Cloudinary
            (error, result) => {
                if (error) {
                    reject(new Error('Error al subir el archivo a Cloudinary: ' + error.message));
                } else {
                    resolve(result.secure_url); // Devuelve la URL segura del archivo subido
                }
            }
        );

        // Escribe el archivo en el flujo
        stream.end(file.buffer);
    });
}

// Configurar el servidor para escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
