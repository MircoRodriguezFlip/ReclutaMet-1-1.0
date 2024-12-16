import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const SectionA2 = () => {
    return (
        <section>
            <div className="section-A2-container">
                <div className="section-A2-1">
                    <h2 className="bold-text">¿Quieres saber cómo es vivir la experiencia de ser asesor MetLife?</h2>

                    <p className="light-text"> Mira este video y descubre todo lo que esta oportunidad tiene para ofrecerte. ¡Te sorprenderá!</p>
                </div>

                <div className="section-A2-2">
                    <ReactPlayer url="https://www.youtube.com/watch?v=mlIl9JQdub4" controls width="100%" height="100%" />
                </div>
            </div>

            <Link to="/#contacto" className="boton-section-A2 bold-text">
                Contáctanos
            </Link>

            <div>
                <hr className="hr-final-section-A2" />
            </div>
        </section>
    );
};
