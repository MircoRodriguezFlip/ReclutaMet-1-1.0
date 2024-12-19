import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { estadosMexico } from '../utils/EstadosMexico';
import { tiposCedula } from '../utils/TiposCedula';
import { useForm } from '../../hooks/useForm';

export const FormContact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { formData, errors, loading, handleChange, handleSubmit, handleFileChange, showExtraFields, toggleExtraFields } = useForm(
        {
            nombreCompleto: '',
            telefono: '+52',
            email: '',
            estado: '',
            cvFile: null,
            contactoPreferido: '',
            tipoCedula: '',
            cedula: '',
            fechaVencimiento: '',
        },
        (success, data) => {
            if (success) {
                setFormSubmitted(true);
                Swal.fire({
                    title: 'Excelente',
                    text: 'Datos enviados correctamente',
                    icon: 'success',
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

    if (formSubmitted) {
        return (
            <div className="confirmation-message">
                <h2>¡Gracias por contactarnos!</h2>
                <p>Hemos recibido tu información y nos pondremos en contacto contigo pronto.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="content-form " noValidate>
            <p className="campos-obligatorios">(*) Campos obligatorios</p>

            <div className="form-block-1">
                {/* NOMBRE COMPLETO */}
                <div className="input-control">
                    <label htmlFor="nombreCompleto" className="bold-text" aria-label="Nombre del usuario">
                        *Nombre Completo:
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

                {/* ESTADO */}
                <div className="input-control">
                    <label htmlFor="estado" className="bold-text" aria-label="Estado donde vive del usuario">
                        *Estado donde vives:
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

            <div className="form-block-2">
                {/* ¿CÓMO QUIERES QUE TE CONTACTEMOS? */}
                <div className="input-control">
                    <label htmlFor="contactoPreferido" className="bold-text" aria-label="Método de contacto preferido">
                        *¿Cómo quieres que te contactemos?
                    </label>
                    <select
                        className="form-control"
                        id="contactoPreferido"
                        name="contactoPreferido"
                        value={formData.contactoPreferido}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="llamada">Llamada Telefónica</option>
                        <option value="email">Correo Electrónico</option>
                    </select>
                    {errors.contactoPreferido && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.contactoPreferido}
                        </small>
                    )}
                </div>

                {/* TELÉFONO */}
                {['whatsapp', 'llamada'].includes(formData.contactoPreferido) && (
                    <div className="input-control">
                        <label htmlFor="telefono" className="bold-text" aria-label="Teléfono del usuario">
                            *Teléfono:
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
                )}

                {/* EMAIL */}
                {formData.contactoPreferido === 'email' && (
                    <div className="input-control">
                        <label htmlFor="email" className="bold-text" aria-label="Correo Electrónico del usuario">
                            *Correo Electrónico:
                        </label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && (
                            <small className="text-danger" aria-live="assertive">
                                {errors.email}
                            </small>
                        )}
                    </div>
                )}
            </div>

            <div className="form-block-3">
                {/* CURRICULUM */}
                <div className="input-control">
                    <label htmlFor="cvFile" className="bold-text" aria-label="Carga tu curriculum">
                        Cargar tu CV:
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="cvFile"
                        name="cvFile"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    {errors.cvFile && (
                        <small className="text-danger" aria-live="assertive">
                            {errors.cvFile}
                        </small>
                    )}
                </div>
            </div>

            <div className="form-block-4">
                {/* CHECKBOX PARA MOSTRAR CAMPOS EXTRAS */}
                <div className="input-control checkbox-control">
                    <label htmlFor="extraFieldsCheckbox" className="bold-text">
                        ¿Tienes cédula?
                    </label>
                    <input
                        type="checkbox"
                        id="extraFieldsCheckbox"
                        checked={showExtraFields}
                        onChange={toggleExtraFields}
                        className="form-check-input"
                    />
                </div>
            </div>

            <div className="form-block-5">
                {/* CAMPOS ADICIONALES */}
                {showExtraFields && (
                    <>
                        {/* TIPO CEDULA */}
                        <div className="input-control">
                            <label htmlFor="tipoCedula" className="bold-text">
                                *Tipo de Cédula
                            </label>
                            <select className="form-control" id="tipoCedula" name="tipoCedula" value={formData.tipoCedula} onChange={handleChange}>
                                <option value="">Selecciona un tipo</option>
                                {tiposCedula.map((tipoCedula, index) => (
                                    <option key={index} value={tipoCedula}>
                                        {tipoCedula}
                                    </option>
                                ))}
                            </select>
                            {errors.tipoCedula && (
                                <small className="text-danger" aria-live="assertive">
                                    {errors.tipoCedula}
                                </small>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div className="form-block-6">
                {showExtraFields && (
                    <>
                        {/* CEDULA */}
                        <div className="input-control">
                            <label htmlFor="cedula" className="bold-text">
                                *Cédula:
                            </label>
                            <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleChange} className="form-control" />
                            {errors.cedula && (
                                <small className="text-danger" aria-live="assertive">
                                    {errors.cedula}
                                </small>
                            )}
                        </div>

                        {/* FECHA VEC CEDULA */}
                        <div className="input-control">
                            <label htmlFor="fechaVencimiento" className="bold-text">
                                *Fecha de vencimiento:
                            </label>
                            <input
                                type="date"
                                id="fechaVencimiento"
                                name="fechaVencimiento"
                                value={formData.fechaVencimiento}
                                onChange={handleChange}
                                className="form-control"
                                min={new Date().toISOString().split('T')[0]}
                            />
                            {errors.fechaVencimiento && (
                                <small className="text-danger" aria-live="assertive">
                                    {errors.fechaVencimiento}
                                </small>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* BOTÓN DE ENVÍO */}
            <div className=" content-envio">
                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
                <button type="submit" className="boton-form bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    Enviar
                </button>
            </div>
        </form>
    );
};
