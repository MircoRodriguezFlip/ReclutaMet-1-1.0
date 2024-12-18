import { useEffect, useRef } from 'react';
import ImgSection4 from '../../assets/images/Imagen section 4.webp';
import { FormContact } from './Form';

export const Section4 = () => {
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
            <div>
                <div className="section-4-titulo">
                    <h2 className="bold-text">Deja tus datos y emprende con MetLife</h2>
                </div>

                <div className="section-4-container">
                    <div className="section-4-2">
                        <FormContact />
                    </div>

                    <div className="section-4-3">
                        <div className="section-4-3-1">
                            <img
                                src={ImgSection4}
                                alt="CEO de VitaMet en traje, invitandote a dejar tus datos en el formulario."
                                className="img-section-4"
                                ref={imageRef}
                                loading="lazy"
                            />
                        </div>

                        <div className="section-4-3-2" ref={cintillaRef}>
                            <h2 className="light-text">Arturo Elizondo</h2>
                            <p className="light-text-curve">Promotor MetLife</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hr-final-section-4">
                <hr />
            </div>
        </section>
    );
};
