import ImgPortadaHomePage from '../assets/images/Portada Home Page.webp';
import { FormContact } from './Form';
import { QueNecesito } from './QueNecesito';
import { Beneficios } from './Beneficios';

export const HomePage = () => {
    return (
        <main className="homepage">
            <section>
                <div className="background-circle"></div>

                <div className="content-home-1">
                    <div>
                        <p className="light-text">
                            ¿te gustaría aprender, tener un crecimiento <br /> profesional, laboral y ser bien compensado asi <br /> como trabajar
                            desde casa?
                        </p>
                    </div>
                    <div>
                        <h1 className="bold-text">
                            ¡Únete a nuestro <br />
                            equipo!
                        </h1>
                    </div>
                    <div className="content-img-portada-home">
                        <img
                            src={ImgPortadaHomePage}
                            alt="Ejecutivos capacitados y motivados para vender seguros"
                            className="img-portada-home"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="content-home-2">
                <h2 className="bold-text">Deja aquí tus datos y en breve un asesor se pondrá en contacto contigo</h2>

                <FormContact />
            </section>

            <div className="div-pag">
                <hr />
            </div>

            <section>
                <Beneficios />
            </section>

            <div className="div-pag">
                <hr />
            </div>

            <section>
                <QueNecesito />
            </section>

            <div className="div-pag">
                <hr />
            </div>

            <section>
                <p className="container parrafo2 light-text">
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
