import { useState } from 'react';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showExtraFields, setShowExtraFields] = useState(false);

    const toggleExtraFields = () => {
        setShowExtraFields(!showExtraFields);
    };

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

        // Validar teléfono solo si el método de contacto es WhatsApp o Llamada Telefónica
        if (['whatsapp', 'llamada'].includes(formData.contactoPreferido)) {
            if (!formData.telefono.match(/^\+52\d{10}$/)) {
                newErrors.telefono = 'Ingresa un número de teléfono válido.';
            }
        }

        // Validar correo electrónico solo si el método de contacto es Correo Electrónico
        if (formData.contactoPreferido === 'email') {
            if (!formData.email.trim() || !formData.email.includes('@')) {
                newErrors.email = 'Ingresa un correo electrónico válido.';
            }
        }

        if (!formData.estado) newErrors.estado = 'Selecciona un estado válido.';
        if (!formData.contactoPreferido) newErrors.contactoPreferido = 'Selecciona un método de contacto.';

        // Validar campos de cédula y fecha de vencimiento si el checkbox está marcado
        if (showExtraFields) {
            if (!formData.tipoCedula) {
                newErrors.tipoCedula = 'El tipo de cédula es obligatorio.';
            }

            if (!formData.cedula.trim()) {
                newErrors.cedula = 'La cédula es obligatoria.';
            }
            if (!formData.fechaVencimiento) {
                newErrors.fechaVencimiento = 'La fecha de vencimiento es obligatoria.';
            }
        }

        // El archivo CV solo se valida si es necesario
        if (
            formData.cvFile &&
            !formData.cvFile.type.match(
                /application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|image\/jpeg|image\/png/
            )
        ) {
            newErrors.cvFile = 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).';
        }

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

            // Solo agregamos el archivo si está presente
            if (formData.cvFile) {
                formDataToSend.append('cvFile', formData.cvFile);
            }

            // Agregar cédula y fecha de vencimiento solo si están rellenos
            if (formData.tipoCedula) {
                formDataToSend.append('tipoCedula', formData.tipoCedula);
            }

            if (formData.cedula.trim()) {
                formDataToSend.append('cedula', formData.cedula.trim());
            }

            if (formData.fechaVencimiento) {
                formDataToSend.append('fechaVencimiento', formData.fechaVencimiento);
            }

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
        showExtraFields,
        toggleExtraFields,
    };
};
