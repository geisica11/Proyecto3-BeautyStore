import { useEffect, useState } from "react";
import { getProductos } from "./services/productoService";

function App() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargar() {
            try {
                const data = await getProductos();
                setProductos(data);
            } catch (error) {
                console.error(error);
            }
        }

        cargar();
    }, []);

   
       return (
        <div style={{ padding: "20px" }}>
            <h1>Beauty Store CR</h1>

            {productos.map((producto) => (
                <div
                    key={producto.idProducto}
                    style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        margin: "10px",
                        borderRadius: "10px"
                    }}
                >
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p><strong>₡{producto.precio}</strong></p>
                </div>
            ))}
        </div>
    );
}

export default App;