import { useState } from 'react';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

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
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
    };
};
