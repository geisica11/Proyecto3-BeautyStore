import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Páginas pendientes de crear
const Placeholder = ({ nombre }) => (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-[#3D2A2A]">{nombre}</h2>
            <p className="text-[#6B4E4E] mt-2">Esta pantalla está en desarrollo</p>
        </div>
    </div>
)

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Placeholder nombre="Iniciar sesión" />} />
                <Route path="/registro" element={<Placeholder nombre="Registro" />} />
                <Route path="/catalogo" element={<Placeholder nombre="Catálogo de productos" />} />
                <Route path="/admin" element={<Placeholder nombre="Panel de administrador" />} />
            </Routes>
        </BrowserRouter>
    )
}