import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { RequisitosPage } from './components/RequisitosPage';
import { OfrecemosPage } from './components/OfrecemosPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/footer';

function App() {
    return (
        <BrowserRouter basename="/ReclutaMet-1-1.0">
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Requisitos" element={<RequisitosPage />} />
                <Route path="/Ofrecemos" element={<OfrecemosPage />} />
                <Route path="/Contacto" element={<ContactPage />} />
                <Route path="/Otro" element={<ContactPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
