export const WhatsAppIcon = () => {
    const whatsappLink =
        'https://wa.me/+528128802899?text=Hola%2C%20estoy%20buscando%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20ser%20agente%20MetLife.';

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <button onClick={handleClick} className="whatsapp-button" aria-label="Haz click para chatear con un agente por whatsapp">
            <span className="whatsapp-text bold-text">WhatsApp</span>
        </button>
    );
};
