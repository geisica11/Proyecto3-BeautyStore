import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartSidebar({ isOpen, onClose }) {
    const { cart, removeFromCart, total } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Fondo oscuro al abrir */}
            <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>
            
            {/* Panel */}
            <div className="relative w-full max-w-sm bg-white h-full shadow-xl p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Tu Carrito</h2>
                    <button onClick={onClose} className="text-2xl">&times;</button>
                </div>

                <div className="flex-grow overflow-y-auto">
                    {cart.length === 0 ? <p className="text-gray-500">Tu carrito está vacío</p> : (
                        cart.map(item => (
                            <div key={item.id} className="flex gap-4 mb-4 border-b pb-4">
                                <img src={item.img} className="w-16 h-16 object-cover" />
                                <div className="flex-grow">
                                    <h3 className="text-sm font-medium">{item.nombre}</h3>
                                    <p className="text-xs text-gray-500">₡{item.precio.toLocaleString()} x {item.cantidad}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-xs">Eliminar</button>
                            </div>
                        ))
                    )}
                </div>

                <div className="pt-4 border-t">
                    <div className="flex justify-between mb-4 font-bold">
                        <span>Total</span>
                        <span>₡{total.toLocaleString()}</span>
                    </div>
                    <Link to="/checkout" onClick={onClose} className="block w-full text-center bg-[#C9758A] text-white py-3 rounded-lg hover:bg-[#b5647a]">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
}