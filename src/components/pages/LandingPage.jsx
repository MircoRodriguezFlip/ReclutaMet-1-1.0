import MetLifeIcon from '../../../public/images/FavIcon.webp';
import { Section1 } from '../imports/Section1';

export const LadingPage = () => {
    return (
        <main className="landing-page-container">
            <section className="section-landing-1">
                <h1 className="bold-text">Descubre cómo iniciar tu carrera como Asesor de Seguros con MetLife</h1>
                <img src={MetLifeIcon} alt="Icono de MetLife bajo el titulo principal" className="logo-metlife-main" loading="lazy" />
            </section>

            <section>
                <Section1 />
            </section>
        </main>
    );
};
