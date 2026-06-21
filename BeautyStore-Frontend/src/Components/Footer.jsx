import { Link } from 'react-router-dom'

const serif = { fontFamily: "'Cormorant Garamond', 'Times New Roman', Georgia, serif" }
const sans  = { fontFamily: "'Jost', 'Inter', sans-serif" }

export default function Footer() {
  return (
    <footer className="bg-[#2A1F1F] text-white/70 px-16 py-10" style={sans}>
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="text-2xl font-semibold text-white mb-2" style={serif}>
            Beauty<span className="text-[#C9758A] italic">Store</span> CR
          </div>
          <p className="text-sm font-light max-w-xs leading-relaxed">
            Todo para resaltar tu belleza en un solo lugar. Entrega en toda Costa Rica.
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <div>
            <div className="text-white font-medium tracking-widest text-xs uppercase mb-3">Tienda</div>
            <div className="flex flex-col gap-2">
              <Link to="/catalogo" className="text-white/60 hover:text-[#C9758A] transition-colors no-underline">Catálogo</Link>
            </div>
          </div>
          <div>
            <div className="text-white font-medium tracking-widest text-xs uppercase mb-3">Cuenta</div>
            <div className="flex flex-col gap-2">
              <Link to="/login" className="text-white/60 hover:text-[#C9758A] transition-colors no-underline">Iniciar sesión</Link>
              <Link to="/registro" className="text-white/60 hover:text-[#C9758A] transition-colors no-underline">Registrarse</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/40">
        <span>© 2025 Beauty Store CR — Todos los derechos reservados</span>
        <span>IF4101 · Sede del Caribe</span>
      </div>
    </footer>
  )
}
