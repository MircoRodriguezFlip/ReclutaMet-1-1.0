import ImgPortadaHomePage from '../assets/images/Portada Home Page.webp';

export const HomePage = () => {
    return (
        <main className="homepage">
            <section>
                <div className="background-circle"></div>

                <div className="content">
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
            <section>
                <h2 className="bold-text">Deja aquí tus datos y en breve un asesor se pondrá en contacto contigo</h2>
            </section>
        </main>
    );
};
