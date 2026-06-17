import { useEffect, useState } from "react";
import { getProductos } from "../Services/productoService";

function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const data = await getProductos();
        setProductos(data);
    };

    return (
        <div>
            <h1>Productos</h1>

            {productos.map((producto) => (
                <div key={producto.idProducto}>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p>₡ {producto.precio}</p>
                </div>
            ))}
        </div>
    );
}

export default Productos;