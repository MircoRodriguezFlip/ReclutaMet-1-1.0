import LogoNavbar from '../../assets/images/Logo MetLife NavBar 2.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={LogoNavbar} alt="Logotipo de MetLife marcando en final de la pagina" className="logo-footer" loading="lazy" />
            </div>
        </footer>
    );
};
