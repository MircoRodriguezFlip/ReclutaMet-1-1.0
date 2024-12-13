import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        // Verifica si el usuario ha hecho scroll hacia abajo
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleLinkClick = (e, link) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Si ya estás en la página principal, realiza el scroll a la sección
            const targetElement = document.querySelector(link.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para compensar el navbar
                    behavior: 'smooth',
                });
            }
        } else {
            // Si estás en otra página, navega a la landing page con el hash
            navigate(`/${link.to}`);
        }

        toggleMenu(); // Cerrar el menú hamburguesa
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

        toggleMenu(); // Cerrar el menú hamburguesa
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="burger-menu">
            {/* Icono de barras para abrir el menú */}
            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" onClick={toggleMenu} />

            {/* Contenedor del menú móvil */}
            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* Botón "X" independiente */}
                {isScrolled && <FontAwesomeIcon icon={faTimes} className="close-menu-icon" onClick={toggleMenu} />}

                {/* Opciones del menú */}
                <ul className="burger-menu-nav bold-text">
                    {navLinks.map((link, index) => (
                        <div className="link-container" key={link.id}>
                            <li className={index === navLinks.length - 1 ? 'last-item' : ''}>
                                {link.id === 'inicio' ? (
                                    <a href="/" onClick={handleInicioClick} title={link.title}>
                                        {link.label}
                                    </a>
                                ) : link.to.startsWith('#') ? (
                                    <a href={link.to} onClick={(e) => handleLinkClick(e, link)} title={link.title}>
                                        {link.label}
                                    </a>
                                ) : (
                                    <NavLink to={link.to} onClick={toggleMenu} title={link.title}>
                                        {link.label}
                                    </NavLink>
                                )}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
