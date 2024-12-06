import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { RequisitosPage } from './components/RequisitosPage';
import { OfrecemosPage } from './components/OfrecemosPage';
import { ContactPage } from './components/ContactPage';
import { EresAgentePage } from './components/EresAgentePage';
import { Footer } from './components/footer';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/requisitos" element={<RequisitosPage />} />
                <Route path="/ofrecemos" element={<OfrecemosPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/eres-agente" element={<EresAgentePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
