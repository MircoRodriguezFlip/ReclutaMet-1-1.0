import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { RequisitosPage } from './components/RequisitosPage';
import { OfrecemosPage } from './components/OfrecemosPage';
import { ContactPage } from './components/ContactPage';

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Requisitos" element={<RequisitosPage />} />
                <Route path="/Ofrecemos" element={<OfrecemosPage />} />
                <Route path="/Contacto" element={<ContactPage />} />
                <Route path="/Otro" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
