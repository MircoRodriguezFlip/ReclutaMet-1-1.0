import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { Requisitos } from './components/Requisitos';
import { OfrecemosPage } from './components/OfrecemosPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/footer';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/requisitos" element={<Requisitos />} />
                <Route path="/ofrecemos" element={<OfrecemosPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/otro" element={<ContactPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
