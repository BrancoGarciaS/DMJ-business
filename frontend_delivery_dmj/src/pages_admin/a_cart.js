import humitasImage from "../images/pai.jpg";

// npm install framer-motion


const Cart = ({ cart, setCart }) => {
    const updateQuantity = (id, amount) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id_product === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id_product !== id));
    };

    return (
        <div className="w-2/5 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-4">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Imagen</th>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Cantidad</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id_product} className="border-t">
                                <td className="p-2">
                                    <img src={humitasImage} alt={item.product_name} className="w-10 h-10 object-cover rounded" />
                                </td>
                                <td className="p-2">{item.product_name}</td>
                                <td className="p-2 flex justify-center items-center">
                                    <button className="px-2 bg-gray-300 rounded" onClick={() => updateQuantity(item.id_product, -1)}>-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button className="px-2 bg-gray-300 rounded" onClick={() => updateQuantity(item.id_product, 1)}>+</button>
                                </td>
                                <td className="p-2">${item.price * item.quantity}</td>
                                <td className="p-2">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(item.id_product)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cart;
