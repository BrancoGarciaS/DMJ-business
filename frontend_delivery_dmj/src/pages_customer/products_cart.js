import humitasImage from "../images/pai.jpg";

import { useEffect } from "react";
const Cart = ({ cart, setCart }) => {

    

    const delivery_cost = [ 
        { id: 3, delivery: 5000, quantity: 15},
        { id: 2, delivery: 4000, quantity: 10}, 
        { id: 1, delivery: 3000, quantity: 5}
    ]


    // ------------------------------------------------------------------- //

    // Costo de envio de un producto
    const getDelivery = (product) => {
        return product.categories.reduce((acc, category) => acc + category.additional_cost, 0);
    }

    // Costo de categorías (de envío)
    function getTotalCategoryDelivery() {
        let total = 0;
        // Iterar sobre cada producto en el carrito
        cart.forEach(producto => {
            // Iterar sobre las categorías del producto
            producto.categories.forEach(categoria => {
            // Sumar el additional_cost de cada categoría
            total += categoria.additional_cost;
            });
        }); 
        return total;
    }
    
    // Cantidad total pedida de todos los productos
    const totalQuantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

    // Costo de envío aplicable (por cantidad de productos)
    const applicableCost = delivery_cost
    .sort((a, b) => b.quantity - a.quantity) // Ordena de mayor a menor por quantity
    .find(({ quantity }) => totalQuantity >= quantity);

    const getDeliveryCost = () => { // si el costo aplicable es null, retorno 0
        return applicableCost ? applicableCost.delivery : 0;
    };

    // Costo de envío total (envio por categorías + envio por cantidad de productos)
    const totalDelivery = getDeliveryCost() + getTotalCategoryDelivery();

    // Costo total de precios
    function getTotalPrices() {
        let total = 0;
        // Iterar sobre cada producto en el carrito
        cart.forEach(producto => {
            // Iterar sobre los precios del producto

            total += producto.price * producto.quantity
            
        }); 
        return total;
    }

    // Costo total final
    const total = getTotalPrices() + totalDelivery;


    // ------------------------------------------------------------------- //

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id_product !== id));
    };

    const updateQuantity = (id, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id_product === id ? { ...item, quantity: Math.max(1, item.quantity + amount)} : item
            )
        );
    };

    // Vacia carrito
    const clearCart = () => {
        setCart([]); // Vacía el carrito
    };

    return(
        <div className="w-2/5 p-4 border border-gray-200 bg-white shadow-lg rounded-sm">
            <header class="border-b border-gray-100 px-5 py-4">
                <div class="text-xl font-semibold text-gray-800 mb-3">Carrito de Compras: {totalQuantity} productos pedidos</div>
                {cart.length !== 0 ? (
                    <div className="flex flex-col text-sv text-gray-500">
                        {getDeliveryCost() !== 0 ?
                            (<span className="text-gray-500 mb-1"> <strong>Costo de Envío (por Cantidad de Productos):</strong> $ {getDeliveryCost()} </span>)
                            : null
                        }
                        {getTotalCategoryDelivery() !== 0 ? 
                            (<span className="text-gray-500"> <strong>Costo de Envío (por Categoría):</strong> $ {getTotalCategoryDelivery()}</span>)
                            : null
                        }
                    </div>
                ) : null}

                
            </header>
            <div class="overflow-x-auto p-3">
            {cart.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <table class="w-full table-auto">
                    <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                            <th className="w-24"></th>
                            <th className="p-2"><div class="text-left font-semibold">Producto</div></th>
                            <th className="p-2"><div class="text-left font-semibold">Cantidad</div></th>
                            <th className="p-2"><div class="text-left font-semibold">Envío</div></th>
                            <th className="p-2"><div class="text-left font-semibold">Precio</div></th>
                            <th className="p-2"><div class="text-center font-semibold">Eliminar</div></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 text-sm">
                        {cart.map((item) => (
                            <tr key={item.id_product} className="border-t">
                                <td className="p-2">
                                    <img src={humitasImage} alt={item.product_name} className="w-16 h-16 object-cover rounded-lg" />
                                </td>
                                <td className="p-2"> <div class="font-medium text-gray-800">{item.product_name}</div></td>
                                <td className="p-2 ">
                                    <div class="left">
                                    <button
                                        className="px-2 bg-gray-300 rounded"
                                        onClick={() => updateQuantity(item.id_product, -1)}
                                    >-</button>
                                    <input
                                        type="number"
                                        className="w-12 text-center border rounded"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = Math.max(1, parseInt(e.target.value) || 1); 
                                            updateQuantity(item.id_product, newQuantity - item.quantity);
                                        }}
                                    />
                                    <button
                                        className="px-2 bg-gray-300 rounded"
                                        onClick={() => updateQuantity(item.id_product, 1)}
                                    >+</button>
                                    </div>
                                </td>
                                <td className="p-2"><div class="text-left font-bold text-green-500">$ {getDelivery(item)} </div></td>
                                <td className="p-2"><div class="text-left font-bold text-green-500">${item.price * item.quantity}</div></td>
                                <td className="p-2">
                                    <div class="flex justify-center">
                                        <button onClick={() => removeFromCart(item.id_product)}>
                                            <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>

            {cart.length !== 0 ? (
                <div>
                    <div class="flex justify-between items-center border-t border-gray-100 px-5 py-4  font-bold">
                        <div class="text-left ">
                            Costo de Envío Total: $ {totalDelivery}
                        </div>
                        <div class="text-right text-2xl text-blue-600">
                            Total: $ {total}
                        </div>
                    </div>

                    <div class="flex justify-between items-center border-t border-gray-100 px-5 py-4  font-bold">

                        <div class="text-left text-lg">
                            <button onClick={() => clearCart()} className="px-4 py-2 bg-red-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                                Eliminar Carrito
                            </button>
                        </div>
                        <div class="text-right text-lg">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            ): null }


        </div>

    );
};

export default Cart;