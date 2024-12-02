import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { estadosMexico } from './utils/EstadosMexico';
import { useForm } from '../hooks/useForm';

export const FormContact = () => {
    const navigate = useNavigate();
    const { formData, errors, loading, handleChange, handleSubmit } = useForm(
        {
            nombreCompleto: '',
            telefono: '+52',
            email: '',
            estado: '',
        },
        (success, data) => {
            if (success) {
                Swal.fire({
                    title: 'Excelente',
                    text: 'Datos enviados correctamente',
                    icon: 'success',
                }).then(() => {
                    navigate('/FormularioEnviado');
                });
            } else {
                Swal.fire({
                    title: 'Ups',
                    text: 'Hubo un error al enviar los datos',
                    icon: 'error',
                });
            }
        }
    );

    return (
        <form onSubmit={handleSubmit} className="content-form " noValidate>
            <div className="form-block-1">
                {/* NOMBRE COMPLETO */}
                <div>
                    <label htmlFor="nombreCompleto" className="bold-text" aria-label="Nombre del usuario">
                        Nombre Completo:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleChange}
                    />
                    {errors.nombreCompleto && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.nombreCompleto}
                        </small>
                    )}
                </div>

                {/* TELEFONO */}
                <div>
                    <label htmlFor="telefono" className="bold-text" aria-label="Telefono del usuario">
                        Teléfono:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        maxLength="13"
                    />
                    {errors.telefono && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.telefono}
                        </small>
                    )}
                </div>
            </div>

            <div className="form-block-2">
                {/* EMAIL */}
                <div>
                    <label htmlFor="email" className="bold-text" aria-label="Email del usuario">
                        Correo Electrónico:
                    </label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.email}
                        </small>
                    )}
                </div>

                {/* ESTADO */}
                <div>
                    <label htmlFor="estado" className="bold-text" aria-label="Estado donde vive del usuario">
                        Estado donde vives:
                    </label>
                    <select className="form-control" id="estado" name="estado" value={formData.estado} onChange={handleChange}>
                        <option value="">Selecciona un estado</option>
                        {estadosMexico.map((estado, index) => (
                            <option key={index} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
                    {errors.estado && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.estado}
                        </small>
                    )}
                </div>
            </div>

            {/* BOTÓN DE ENVÍO */}
            <div className=" content-envio">
                <button type="submit" className="boton-form bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    Enviar
                </button>
                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>
        </form>
    );
};
