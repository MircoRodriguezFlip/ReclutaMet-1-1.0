import { useState } from 'react';
import ImgNecesito1 from '../assets/images/necesito 1.webp';
import ImgNecesito2 from '../assets/images/necesito 2.webp';
import ImgNecesito3 from '../assets/images/necesito 3.webp';
import ImgNecesito4 from '../assets/images/necesito 4.webp';
import ImgNecesito5 from '../assets/images/necesito 5.webp';
import ImgNecesito6 from '../assets/images/necesito 6.webp';

export const Beneficios = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="content-necesito">
            <h1 className="necesito-title" onClick={toggleVisibility}>
                Beneficios de ser agente VITAMET
            </h1>
            <section className={`necesito-section ${isVisible ? 'visible' : 'hidden'}`}>
                <div className="necesito-item">
                    <img src={ImgNecesito1} alt="sombrero de recien graduado" loading="lazy" />
                    <p>Licenciatura terminada, pasante o bachillerato</p>
                </div>
                <div className="necesito-item">
                    <img src={ImgNecesito2} alt="ampolleta con un cerebro dentro teniendo una idea" loading="lazy" />
                    <p>Alta iniciativa empresarial</p>
                </div>
                <div className="necesito-item">
                    <img src={ImgNecesito3} alt="3 personas enlazadas" loading="lazy" />
                    <p>Facilidad para relacionarse</p>
                </div>
                <div className="necesito-item">
                    <img src={ImgNecesito4} alt="grafica de dinero en aumento" loading="lazy" />
                    <p>Expectativa económica mayor a $50.000 pesos</p>
                </div>
                <div className="necesito-item">
                    <img src={ImgNecesito5} alt="3 personas posando para una foto con la empresa a sus espaldas" loading="lazy" />
                    <p>Imagen corporativa</p>
                </div>
                <div className="necesito-item">
                    <img src={ImgNecesito6} alt="2 personas llegando a un acuerdo mientras se dan la mano" loading="lazy" />
                    <p>habilidad comercial</p>
                </div>
            </section>
        </div>
    );
};
