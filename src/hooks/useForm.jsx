import { useState } from 'react';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validFormats = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/png',
            ];
            const maxSize = 2 * 1024 * 1024; // Tamaño máximo: 2 MB

            if (!validFormats.includes(file.type)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cvFile: 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).',
                }));
                return;
            }

            if (file.size > maxSize) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cvFile: 'El archivo es demasiado grande. Máximo 2 MB.',
                }));
                return;
            }

            setErrors((prevErrors) => ({ ...prevErrors, cvFile: '' }));
            setFormData((prevState) => ({ ...prevState, cvFile: file }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const phoneNumber = value.replace(/[^0-9]/g, '');
            const newPhoneValue = phoneNumber ? '+52' + phoneNumber.slice(2) : '+52';
            setFormData((prevData) => ({ ...prevData, telefono: newPhoneValue }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = 'Completa este campo.';
        if (!formData.telefono.match(/^\+52\d{10}$/)) newErrors.telefono = 'Ingresa un número de teléfono válido.';
        if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Ingresa un correo electrónico válido.';
        if (!formData.estado) newErrors.estado = 'Selecciona un estado válido.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nombre', formData.nombreCompleto);
            formDataToSend.append('telefono', formData.telefono);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('estado', formData.estado);
            formDataToSend.append('cvFile', formData.cvFile);

            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                submitCallback(true, data);
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        loading,
        handleChange,
        handleSubmit,
        handleFileChange,
    };
};
