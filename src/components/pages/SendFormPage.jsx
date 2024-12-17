import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { SectionA2 } from '../imports/Section-A-2';

export const SendFormPage = () => {
    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
        });
    }, []);

    return (
        <main className="send-form-container">
            <section>
                <h1 className="bold-text">¡Felicidades!</h1>
                <p className="light-text">Ya recibimos tus datos. En breve un agente se pondrá en contacto contigo.</p>

                <NavLink to="/" aria-label="Ir a la página de inicio.">
                    <button className="boton-section-A2 bold-text" title="Haz clic para ir a la página de inicio">
                        IR AL INICIO
                    </button>
                </NavLink>

                <div>
                    <hr className="hr-final-section-A2" />
                </div>
            </section>

            <section>
                <SectionA2 />
            </section>
        </main>
    );
};
