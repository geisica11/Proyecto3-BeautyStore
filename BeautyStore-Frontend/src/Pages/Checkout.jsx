import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout({ onPagoExitoso }) {
    const { cart, total, className } = useCart();
    const [datos, setDatos] = useState({ numeroTarjeta: '', nombre: '' });
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState(null);

    const procesarPago = async () => {
        if (cart.length === 0) return;
        
        setCargando(true);
        setMensaje(null);

        try {
            const response = await fetch('http://localhost:5090/api/Pagos/procesar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    monto: total,
                    numeroTarjeta: datos.numeroTarjeta,
                    carrito: cart.map(item => ({
                        idProducto: item.id, 
                        cantidad: item.cantidad
                    }))
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMensaje({ texto: data.mensaje || "Pago procesado con éxito", tipo: 'success' });
                clearCart();
                setTimeout(onPagoExitoso, 2000); 
            } else {
                setMensaje({ texto: data.mensaje || "Error al procesar el pago", tipo: 'error' });
            }
        } catch (error) {
            setMensaje({ texto: "Error de conexión con el servidor.", tipo: 'error' });
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Finalizar Compra</h2>

            <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <p className="text-gray-500 text-sm">Total a pagar</p>
                {/* Ahora usamos el total del contexto */}
                <p className="text-3xl font-bold text-[#C9758A]">₡{total.toLocaleString()}</p>
            </div>

            <div className="space-y-4">
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#C9758A] outline-none"
                    placeholder="Nombre en la tarjeta"
                    onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                />
                <input
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#C9758A] outline-none"
                    placeholder="Número de tarjeta (ej: 1234...)"
                    onChange={(e) => setDatos({ ...datos, numeroTarjeta: e.target.value })}
                />
            </div>

            {mensaje && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${mensaje.tipo === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {mensaje.texto}
                </div>
            )}

            <button
                onClick={procesarPago}
                disabled={cargando || cart.length === 0}
                className={`w-full mt-6 py-3 rounded-xl font-bold text-white transition ${cargando ? 'bg-gray-400' : 'bg-[#2A1F1F] hover:bg-[#C9758A]'}`}
            >
                {cargando ? 'Procesando...' : 'Confirmar Pago'}
            </button>
        </div>
    );
}