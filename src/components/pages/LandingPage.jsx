import MetLifeIcon from '../../../public/images/FavIcon.webp';
import { Section1 } from '../imports/Section1';
import { Section2 } from '../imports/section2';
import { Section3 } from '../imports/Section3';
import { Section4 } from '../imports/Section4';

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

            <section>
                <Section2 />
            </section>

            <section>
                <Section3 />
            </section>

            <section>
                <Section4 />
            </section>

            <section>
                <p className="parrafo2 light-text">
                    Ya sea que cuentes con cédula de Agente o estés recién comenzando en el mundo de las ventas en MetLife, Reclutamet te ofrece todo
                    lo necesario para impulsar tu carrera. Te brindamos capacitación continua, asesoramiento personalizado y un esquema de comisiones
                    altamente competitivo en la venta de seguros. Buscamos personas comprometidas, con educación mínima de preparatoria, edad ideal
                    entre 30 y 50 años, con mentalidad ganadora y disciplina. Juntos, te ayudaremos a obtener tu cédula y/o a consolidar una carrera
                    exitosa con proyección a largo plazo. ¡Estamos listos para apoyarte en cada paso hacia el éxito!
                </p>
            </section>
        </main>
    );
};
