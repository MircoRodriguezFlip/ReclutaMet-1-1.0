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
                    El crédito Mejoravit permite obtener hasta $156,445.00 pesos para remodelar o ampliar tu vivienda, dependiendo de tu plazo,
                    capacidad de pago y saldo en la subcuenta de vivienda. Ofrece una tasa de interés anual del 11%, y es accesible con solo 6 meses
                    cotizando en el IMSS con el mismo patrón.
                </p>
            </section>
        </main>
    );
};
