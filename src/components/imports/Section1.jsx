import { useEffect, useRef } from 'react';
import ImgSection1 from '../../assets/images/Imagen section 1.webp';

export const Section1 = () => {
    const handleContactClick = (e) => {
        e.preventDefault();
        const targetElement = document.querySelector('#contacto');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    const imageRef = useRef(null);
    const cintillaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        if (cintillaRef.current) {
            observer.observe(cintillaRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
            if (cintillaRef.current) {
                observer.unobserve(cintillaRef.current);
            }
        };
    }, []);

    return (
        <section>
            <div className="section-1-container">
                <div className="section-1-1">
                    <p className="section-1-parrafo light-text">
                        Únete a <strong>MetLife</strong> una de las empresas líderes en el sector asegurador y recibe el respaldo de Agentes de seguro
                        profesionales que te guiarán en cada paso hacia el éxito.
                    </p>

                    <a href="#contacto" onClick={handleContactClick}>
                        <button className="boton-section-1 bold-text">Contáctanos</button>
                    </a>
                </div>

                <div className="section-1-2">
                    <div className="section-1-2-1">
                        <img
                            src={ImgSection1}
                            alt="Agente de seguros MetLife de brazos cruzados orgullosa de lo que ha logrado"
                            className="img-section-1"
                            ref={imageRef}
                            loading="lazy"
                        />
                    </div>

                    <div className="section-1-2-2" ref={cintillaRef}>
                        <h2 className="light-text">Andrea Díaz</h2>
                        <p className="light-text-curve">Asesora Profesional de Seguros</p>
                    </div>
                </div>
            </div>

            <div className="hr-final-section">
                <hr />
            </div>
        </section>
    );
};
