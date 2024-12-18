import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import { LadingPage } from './components/pages/LandingPage';
import { AgentePage } from './components/pages/AgentePage';
import { SendFormPage } from './components/pages/SendFormPage';
import { PoliticasPage } from './components/pages/PoliticasPage';
import { Footer } from './components/common/footer';
import { ScrollToTop } from './hooks/ScrollTop';
import { WhatsAppIcon } from './components/utils/WhatsAppIcon';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar id="inicio" />

            <WhatsAppIcon />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/eres-agente" element={<AgentePage />} />
                <Route path="/formulario-enviado" element={<SendFormPage />} />
                <Route path="/politica-privacidad" element={<PoliticasPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
