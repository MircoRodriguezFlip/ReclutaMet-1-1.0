import { NavLink } from 'react-router-dom';
import { SectionA1 } from '../imports/Section-A-1';
import { SectionA2 } from '../imports/Section-A-2';

export const AgentePage = () => {
    return (
        <main className="landing-page-container">
            <section>
                <SectionA1 />
            </section>

            <section>
                <SectionA2 />
            </section>

            <section>
                <p className="parrafo2 light-text">
                    Ya sea que cuentes con cédula de Agente o estés recién comenzando en el mundo de las ventas en MetLife, Reclutamet te ofrece todo
                    lo necesario para impulsar tu carrera. Te brindamos capacitación continua, asesoramiento personalizado y un esquema de comisiones
                    altamente competitivo en la venta de seguros. Buscamos personas comprometidas, con educación mínima de preparatoria, edad ideal
                    entre 30 y 50 años, con mentalidad ganadora y disciplina. Juntos, te ayudaremos a obtener tu cédula y/o a consolidar una carrera
                    exitosa con proyección a largo plazo. ¡Estamos listos para apoyarte en cada paso hacia el éxito!
                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                        Conoce más Aquí.
                    </NavLink>
                </p>
            </section>
        </main>
    );
};
