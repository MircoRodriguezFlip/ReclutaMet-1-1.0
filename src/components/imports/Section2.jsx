import { useState } from 'react';
import ImgBeneficio1 from '../../assets/images/beneficio 1.webp';
import ImgBeneficio2 from '../../assets/images/beneficio 2.webp';
import ImgBeneficio3 from '../../assets/images/beneficio 3.webp';
import ImgBeneficio4 from '../../assets/images/beneficio 4.webp';
import ImgBeneficio5 from '../../assets/images/beneficio 5.webp';
import ImgBeneficio6 from '../../assets/images/beneficio 6.webp';

export const Section2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section>
            <div className="section-2-container">
                <h2 className="beneficios-title bold-text" onClick={toggleVisibility}>
                    Beneficios de ser agente MetLife
                </h2>

                <div className={`beneficio-section ${isVisible ? 'visible' : 'hidden'}`}>
                    {[
                        { img: ImgBeneficio1, text: 'Desarrollo/capacitación permanente y constante.' },
                        { img: ImgBeneficio2, text: 'Crecimiento profesional' },
                        { img: ImgBeneficio3, text: 'Capacitación en la prospección y venta' },
                        { img: ImgBeneficio4, text: 'Comisiones y bonos mayores a 100 mil pesos mensualmente sin tope' },
                        { img: ImgBeneficio5, text: 'Seminarios nacionales e internacionales' },
                        { img: ImgBeneficio6, text: 'Posibilidad de administrar tu tiempo' },
                    ].map((beneficio, index) => (
                        <div className="beneficio-item" key={index}>
                            <div className="background-circle-beneficio">
                                <img src={beneficio.img} alt={`Beneficio ${index + 1}`} className="img-circle-beneficio" loading="lazy" />
                            </div>
                            <div className="content-parrafo-beneficio">
                                <p className="light-text">{beneficio.text}</p>
                            </div>
                        </div>
                    ))}

                    {/* Botón para cerrar */}
                    <button className="close-section-btn bold-text" onClick={toggleVisibility}>
                        Cerrar
                    </button>
                </div>
            </div>

            <div>
                <hr className="hr-final-section-2" />
            </div>
        </section>
    );
};
