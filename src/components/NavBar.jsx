import { NavLink } from 'react-router-dom';
import LogoNavbar from '../assets/images/Logo MetLife NavBar.webp';
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
                    <span className="reclutamet-text light-text">Reclutamet</span>
                </div>

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
