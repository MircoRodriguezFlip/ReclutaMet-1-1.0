import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/common/NavBar';
import { LadingPage } from './components/pages/LandingPage';
import { AgentePage } from './components/pages/AgentePage';
import { Footer } from './components/common/footer';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar />

            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/eres-agente" element={<AgentePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
