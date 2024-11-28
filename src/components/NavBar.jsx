import { NavLink } from 'react-router-dom';
import LogoNavbar from '../assets/images/Logo ReclutaMet NavBar.webp';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from './utils/NavBarMenu';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                {/* Logo */}
                <NavLink to="/">
                    <img src={LogoNavbar} alt="Logotipo de ReclutaMet en la barra de navegación" className="logo-navbar" loading="lazy" />
                </NavLink>

                {/* Menú de Navegación */}
                <ul className="menu-nav light-text">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.to} title={item.title}>
                                {item.label}
                            </NavLink>
                            {index < navLinks.length - 1 && <span className="linea-separadora">|</span>}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menú Hamburguesa */}
            <BurgerMenu />
        </header>
    );
};
