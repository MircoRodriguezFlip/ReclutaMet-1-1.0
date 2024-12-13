import ImgSection1 from '../../assets/images/Imagen section 1.webp';

export const Section1 = () => {
    const handleContactClick = (e) => {
        e.preventDefault();
        const targetElement = document.querySelector('#contacto');
        if (targetElement) {
            // Realizar el desplazamiento suave
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajusta el valor para que el navbar no tape la parte superior
                behavior: 'smooth',
            });
        }
    };

    return (
        <section>
            <div className="section-1-container">
                <div className="section-1-1">
                    <p className="section-1-parrafo light-text">
                        Únete a <strong>MetLife</strong> una de las empresas líderes en el sector asegurador y recibe el respaldo de Agentes de seguro
                        profesionales que te guiarán en cada paso hacia el éxito.
                    </p>

                    <a href="#contacto" onClick={handleContactClick}>
                        <button className="boton-section-1 bold-text">Contáctanos</button>
                    </a>
                </div>

                <div className="section-1-2">
                    <div className="section-1-2-1">
                        <img
                            src={ImgSection1}
                            alt="Agente de seguros MetLife de brazos cruzados orgullosa de lo que ha logrado"
                            className="img-section-1"
                            loading="lazy"
                        />
                    </div>

                    <div className="section-1-2-2">
                        <h2 className="light-text">Andrea Díaz</h2>
                        <p className="light-text-curve">Asesora Profesional de Seguros</p>
                    </div>
                </div>
            </div>

            <div className="hr-final-section">
                <hr />
            </div>
        </section>
    );
};
