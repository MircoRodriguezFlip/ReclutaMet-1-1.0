require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const multer = require('multer');
const filestack = require('filestack-js');

// Inicializa Filestack
const client = filestack.init(process.env.FILESTACK_API_KEY);

// Configura middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Ruta para manejar el envío de datos y archivo
app.post('/submit', upload.single('cvFile'), async (req, res) => {
    const { nombre, telefono, email, estado, tipoCedula, cedula, fechaVencimiento } = req.body;
    const cvFile = req.file;

    try {
        // Si no hay archivo, continuamos sin intentar subir nada a Filestack
        let fileUrl = null;
        if (cvFile) {
            // Validar el archivo
            const allowedFormats = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/png',
            ];
            const maxSize = 2 * 1024 * 1024; // Tamaño máximo: 2 MB

            if (!allowedFormats.includes(cvFile.mimetype)) {
                return res.status(400).json({ message: 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).' });
            }

            if (cvFile.size > maxSize) {
                return res.status(400).json({ message: 'El archivo es demasiado grande. Máximo 2 MB.' });
            }

            // Subir archivo a Filestack si hay archivo
            fileUrl = await uploadFileToFilestack(cvFile);
        }

        // Guardar los datos en Airtable
        const response = await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
                fields: {
                    nombre_completo: nombre,
                    telefono: telefono,
                    email: email,
                    estado: estado,
                    tipo_cedula: tipoCedula,
                    cedula: cedula,
                    fecha_vec_cedula: fechaVencimiento,
                    test: fileUrl ? [{ url: fileUrl }] : [],
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json({ message: 'Datos enviados correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al procesar el formulario.' });
    }
});

// Función para subir archivo a Filestack
async function uploadFileToFilestack(file) {
    try {
        const options = {
            onProgress: (progress) => console.log('Progreso de carga:', progress),
        };
        const result = await client.upload(file.buffer, options);
        return result.url;
    } catch (error) {
        console.error('Error al cargar archivo en Filestack:', error);
        throw new Error('Error al cargar archivo en Filestack.');
    }
}

// Configurar el servidor para escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
