import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LogoNavbar from '../../assets/images/Logo MetLife NavBar 2.webp';
import LogoNavbar2 from '../../assets/images/Logo Vitamet navbar.webp';
import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(navLinks[0].id); // Inicio como predeterminado

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setActiveLink(item.id); // Establecer el enlace actual como activo

        if (location.pathname === '/') {
            // Si ya estás en la landing page
            const targetElement = document.querySelector(item.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para compensar el navbar
                    behavior: 'smooth',
                });
            }
        } else {
            // Si estás en otra página, navega a la landing page con el hash
            navigate(`/${item.to}`);
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
                            {item.to.startsWith('#') ? (
                                <a
                                    href={item.to}
                                    onClick={(e) => handleLinkClick(e, item)}
                                    title={item.title}
                                    className={activeLink === item.id ? 'active' : ''}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive || activeLink === item.id ? 'active' : '')}
                                    onClick={() => setActiveLink(item.id)}
                                >
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
