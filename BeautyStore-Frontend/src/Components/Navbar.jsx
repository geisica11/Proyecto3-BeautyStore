import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const serif = { fontFamily: "'Cormorant Garamond', 'Times New Roman', Georgia, serif" }
const sans = { fontFamily: "'Jost', 'Inter', sans-serif" }

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between px-16 py-4 bg-[#FAFAF8] border-b border-[#E8D8D2]">
        <Link to="/" className="text-2xl font-semibold text-[#2A1F1F] no-underline" style={serif}>
          Beauty<span className="text-[#C9758A] italic">Store</span> CR
        </Link>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xs font-medium tracking-widest text-[#2A1F1F] uppercase no-underline" style={sans}>Inicio</Link>
          <Link to="/catalogo" className="text-xs font-medium tracking-widest text-[#2A1F1F] uppercase no-underline" style={sans}>Catálogo</Link>
          
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="text-xs font-medium tracking-widest text-[#2A1F1F] uppercase cursor-pointer hover:text-[#C9758A]"
          >
            🛒 Carrito
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-5 py-2 text-xs font-medium tracking-widest text-[#2A1F1F] border border-[#2A1F1F] uppercase no-underline" style={sans}>Iniciar sesión</Link>
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}