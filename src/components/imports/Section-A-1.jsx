import MetLifeIcon from '../../../public/images/FavIcon.webp';
import ImgSection1 from '../../assets/images/Imagen section 1.webp';

export const SectionA1 = () => {
    return (
        <section>
            <div className="section-A1-container">
                <div className="section-1-1 textos-section-A1">
                    <h1 className="bold-text">¡Impulsa tu Carrera con VitaMet!</h1>

                    <img src={MetLifeIcon} alt="Icono de MetLife bajo el titulo principal" className="logo-metlife-main" loading="lazy" />

                    <p className="light-text">
                        Si ya cuentas con tu Cédula de Agente <strong>MetLife</strong>, estás listo para alcanzar nuevas alturas en tu desarollo
                        profesional.
                    </p>

                    <h2 className="bold-text">¡Únete al mejor equipo de asesor de seguros!</h2>
                </div>

                <div className="section-1-2">
                    <div className="section-1-2-1">
                        <img
                            src={ImgSection1}
                            alt="Agente de seguros MetLife de brazos cruzados orgullosa de lo que ha logrado"
                            className="img-section-A1"
                            loading="lazy"
                        />
                    </div>

                    <div className="section-1-2-2">
                        <h2 className="light-text">Arturo Elizondo</h2>
                        <p className="light-text-curve">Ceo VitaMet</p>
                    </div>
                </div>
            </div>

            <div className="hr-final-section-A1">
                <hr />
            </div>
        </section>
    );
};
