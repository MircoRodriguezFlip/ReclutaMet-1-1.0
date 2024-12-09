import { NavLink } from 'react-router-dom';
import LogoNavbar from '../assets/images/Logo MetLife NavBar 2.webp';
import LogoNavbar2 from '../assets/images/Logo Vitamet 1.webp';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from './utils/NavBarMenu';

export const NavBar = () => {
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
                            <NavLink to={item.to} title={item.title}>
                                {item.label}
                            </NavLink>
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
