import { useState } from 'react';
import ImgBeneficio1 from '../assets/images/beneficio 1.webp';
import ImgBeneficio2 from '../assets/images/beneficio 2.webp';
import ImgBeneficio3 from '../assets/images/beneficio 3.webp';
import ImgBeneficio4 from '../assets/images/beneficio 4.webp';
import ImgBeneficio5 from '../assets/images/beneficio 5.webp';
import ImgBeneficio6 from '../assets/images/beneficio 6.webp';
import ImgBeneficio7 from '../assets/images/beneficio 7.webp';
import ImgBeneficio8 from '../assets/images/beneficio 8.webp';

export const Beneficios = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="content-necesito">
            <h1 className="beneficios-title bold-text" onClick={toggleVisibility}>
                Beneficios de ser agente VitaMet
            </h1>
            <section className={`beneficio-section ${isVisible ? 'visible' : 'hidden'}`}>
                {[
                    { img: ImgBeneficio1, text: 'Desarollo/capacitación permanente y constante.' },
                    { img: ImgBeneficio2, text: 'Crecimiento profesional' },
                    { img: ImgBeneficio3, text: 'Capacitación en la prospección y venta' },
                    { img: ImgBeneficio4, text: 'Ingresos por comisiones y bonos mayores a 30 mil pesos mensualmente sin tope' },
                    { img: ImgBeneficio5, text: 'Seminarios nacionales e internacionales' },
                    { img: ImgBeneficio6, text: 'Increíble ambiente de trabajo' },
                    { img: ImgBeneficio7, text: 'Si eres de Monterrey 30% presencial y si no eres de Monterrey puedes hacer Home Office' },
                    { img: ImgBeneficio8, text: 'Horarios cómodos y flexibles' },
                ].map((beneficio, index) => (
                    <div className="beneficio-item" key={index}>
                        <div className="background-circle-beneficio" style={{ backgroundImage: `url(${beneficio.img})` }}></div>
                        <div className="content-parrafo-beneficio">
                            <p className="light-text">{beneficio.text}</p>
                        </div>
                    </div>
                ))}

                {/* Botón para cerrar */}
                <button className="close-section-btn bold-text" onClick={toggleVisibility}>
                    Cerrar
                </button>
            </section>
        </div>
    );
};
