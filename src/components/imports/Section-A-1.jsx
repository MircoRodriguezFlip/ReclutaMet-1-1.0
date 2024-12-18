import { useEffect, useRef } from 'react';
import MetLifeIcon from '../../../public/images/FavIcon.webp';
import ImgSectionA1 from '../../assets/images/Imagen section A1.webp';

export const SectionA1 = () => {
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
            <div className="section-A1-container">
                <div className="section-1-1 textos-section-A1">
                    <h1 className="bold-text">¡Impulsa tu Carrera con MetLife!</h1>

                    <img src={MetLifeIcon} alt="Icono de MetLife bajo el titulo principal" className="logo-metlife-main" loading="lazy" />

                    <p className="light-text">
                        Si ya cuentas con tu Cédula de Agente <strong>MetLife</strong>, estás listo para alcanzar nuevas alturas en tu desarrollo
                        profesional.
                    </p>

                    <h2 className="bold-text">¡Únete al mejor equipo de asesor de seguros!</h2>
                </div>

                <div className="section-1-2">
                    <div className="section-1-2-1">
                        <img
                            src={ImgSectionA1}
                            alt="Agente de seguros MetLife de brazos cruzados orgullosa de lo que ha logrado"
                            className="img-section-A1"
                            ref={imageRef}
                            loading="lazy"
                        />
                    </div>

                    <div className="section-1-2-2" ref={cintillaRef}>
                        <h2 className="light-text">Rocío Olivos</h2>
                        <p className="light-text-curve">Asesora Profesional de Seguros</p>
                    </div>
                </div>
            </div>

            <div className="hr-final-section-A1">
                <hr />
            </div>
        </section>
    );
};
