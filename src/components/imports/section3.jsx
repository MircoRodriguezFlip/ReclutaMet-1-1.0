import { useState } from 'react';
import ImgNecesito1 from '../../assets/images/necesito 1.webp';
import ImgNecesito2 from '../../assets/images/necesito 2.webp';
import ImgNecesito3 from '../../assets/images/necesito 3.webp';
import ImgNecesito4 from '../../assets/images/necesito 4.webp';
import ImgNecesito5 from '../../assets/images/necesito 5.webp';
import ImgNecesito6 from '../../assets/images/necesito 6.webp';

export const Section3 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <section>
            <div className="section-3-container">
                <h2 className="necesito-title bold-text" onClick={toggleVisibility}>
                    ¿Que necesito para ser Agente MetLife?
                </h2>

                <div className={`necesito-section ${isVisible ? 'visible' : 'hidden'}`}>
                    <div className="necesito-items">
                        {[
                            { img: ImgNecesito1, text: 'Licenciatura terminada, trunca o pasante', alt: 'sombrero de recien graduado' },
                            { img: ImgNecesito2, text: 'Alta iniciativa empresarial', alt: 'ampolleta con un cerebro dentro teniendo una idea' },
                            { img: ImgNecesito3, text: 'Facilidad para relacionarse', alt: '3 personas enlazadas' },
                            { img: ImgNecesito4, text: 'Expectativa económica mayor a $100.000 pesos', alt: 'grafica de dinero en aumento' },
                            { img: ImgNecesito5, text: 'Imagen corporativa', alt: '3 personas posando para una foto con la empresa a sus espaldas' },
                            { img: ImgNecesito6, text: 'Habilidad comercial', alt: '2 personas llegando a un acuerdo mientras se dan la mano' },
                        ].map((necesito, index) => (
                            <div className="necesito-item" key={index}>
                                <img src={necesito.img} alt={necesito.alt} loading="lazy" />

                                <div className="content-parrafo-necesito">
                                    <p className="light-text">{necesito.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

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
