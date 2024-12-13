import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import { LadingPage } from './components/pages/LandingPage';
import { AgentePage } from './components/pages/AgentePage';
import { PoliticasPage } from './components/pages/PoliticasPage';
import { Footer } from './components/common/footer';
import { ScrollToTop } from './hooks/ScrollTop';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar id="inicio" />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/eres-agente" element={<AgentePage />} />
                <Route path="/politica-privacidad" element={<PoliticasPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
