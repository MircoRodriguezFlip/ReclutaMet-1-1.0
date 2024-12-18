import { useState, useRef } from 'react';
import ImgBeneficio1 from '../../assets/images/beneficio 1.webp';
import ImgBeneficio2 from '../../assets/images/beneficio 2.webp';
import ImgBeneficio3 from '../../assets/images/beneficio 3.webp';
import ImgBeneficio4 from '../../assets/images/beneficio 4.webp';
import ImgBeneficio5 from '../../assets/images/beneficio 5.webp';
import ImgBeneficio6 from '../../assets/images/beneficio 6.webp';

export const Section2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);

        // Si estamos cerrando la sección, desplazamos la página al inicio de la sección
        if (isVisible && sectionRef.current) {
            const offsetTop = sectionRef.current.offsetTop - 80; // Ajustar el desplazamiento (80px para evitar que se superponga con el navbar)
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section ref={sectionRef}>
            <div className="section-2-container">
                <h2 className="beneficios-title bold-text" onClick={toggleVisibility}>
                    Beneficios de ser agente MetLife
                </h2>

                <div className={`beneficio-section ${isVisible ? 'visible' : 'hidden'}`}>
                    {[
                        {
                            img: ImgBeneficio1,
                            text: 'Desarrollo/capacitación permanente y constante.',
                            alt: 'Personas de palitos en una conferencia',
                        },
                        {
                            img: ImgBeneficio2,
                            text: 'Crecimiento profesional',
                            alt: 'Cabeza animada de persona con engranes y flechas apuntando hacia arriba',
                        },
                        {
                            img: ImgBeneficio3,
                            text: 'Capacitación en la prospección y venta',
                            alt: 'Personas de palitos en una conferencia sobre ventas',
                        },
                        {
                            img: ImgBeneficio4,
                            text: 'Comisiones y bonos mayores a 100 mil pesos mensualmente sin tope',
                            alt: 'Moneda con grafico en subida',
                        },
                        {
                            img: ImgBeneficio5,
                            text: 'Seminarios nacionales e internacionales',
                            alt: 'México, visto desde una perspectiva aérea completa',
                        },
                        {
                            img: ImgBeneficio6,
                            text: 'Posibilidad de administrar tu tiempo',
                            alt: 'Reloj sobre un calendario, indicando libertad de horarios',
                        },
                    ].map((beneficio, index) => (
                        <div className="beneficio-item" key={index}>
                            <div className="background-circle-beneficio">
                                <img src={beneficio.img} alt={beneficio.alt} className="img-circle-beneficio" loading="lazy" />
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
