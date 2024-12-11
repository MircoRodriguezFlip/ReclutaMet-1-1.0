import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LogoNavbar from '../../assets/images/Logo MetLife NavBar 2.webp';
import LogoNavbar2 from '../../assets/images/Logo Vitamet navbar.webp';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (e, to) => {
        e.preventDefault();
        const targetElement = document.querySelector(to);
        if (targetElement) {
            // Realizar el desplazamiento suave
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajusta el valor para que el navbar no tape la parte superior
                behavior: 'smooth',
            });
        }
    };

    const handleInicioClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            // Ya estás en la página principal, scroll al top
            const topElement = document.querySelector('#inicio') || document.body;
            topElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navegar a la página principal
            navigate('/#inicio');
        }
    };

    return (
        <header>
            <nav className="navbar">
                {/* Logo y Reclutamet */}
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={LogoNavbar} alt="Logotipo de MetLife en la barra de navegación" className="logo-navbar" loading="lazy" />
                    </NavLink>
                    <img src={LogoNavbar2} alt="Logotipo de VitaMet en la barra de navegación" className="logo-navbar-2" loading="lazy" />
                </div>

                {/* Menú de Navegación */}
                <ul className="menu-nav light-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            {item.id === 'inicio' ? (
                                <a href="/" onClick={handleInicioClick} title={item.title}>
                                    {item.label}
                                </a>
                            ) : item.to.startsWith('#') && location.pathname === '/' ? (
                                <a href={item.to} onClick={(e) => handleScroll(e, item.to)} title={item.title}>
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink to={item.to} title={item.title}>
                                    {item.label}
                                </NavLink>
                            )}
                            {item.id !== navLinks[navLinks.length - 1].id && <span className="linea-separadora">|</span>}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menú Hamburguesa */}
            <BurgerMenu />
        </header>
    );
};
