// import { useGlobalContext } from '../utils/GlobalModelContext';
import humitasImage from "../images/pai.jpg";

const Cart = () => {

    // importante: ordenar de mayor a menor
    const delivery_cost = [ 
        { id: 3, delivery: 5000, quantity: 15},
        { id: 2, delivery: 4000, quantity: 10}, 
        { id: 1, delivery: 3000, quantity: 5}
    ]

    const cart_products = 
    
    [
        {
            product: {
                id_product: 1,
                product_name: "Pastel 3 leches",
                description: "Encantador y rico pastel 3 leches",
                original_price: 10000,
                price: 8000,
                discount: 20,
                star_rating: 5,
                reviews: 100,
                categories: [
                    {
                        id_category: 2,
                        name: "amor",
                        additional_cost: 2500.0,
                    },
                    {
                        id_category: 1,
                        name: "helado",
                        additional_cost: 0.0,
                    },
                ],
            },
            quantity: 1
        },

        {
            product: {
                id_product: 5,
                product_name: "dmj",
                description: "maria",
                price: 5000.0,
                original_price: 10000,
                discount: 10,
                star_rating: 4.5,
                reviews: 300,
                categories: [
                    {
                        id_category: 3,
                        name: "flores",
                        additional_cost: 100.0,
                    },
                    {
                        id_category: 1,
                        name: "helado",
                        additional_cost: 0.0,
                    },
                ],
            },
            quantity: 2
        },
        
    ];

    
    

    

    const getDelivery = (product) => {
        return product.product.categories.reduce((acc, category) => acc + category.additional_cost, 0);
    }

    const getTotalCategoryCost = () => {
        return cart_products.reduce((total, { product }) => {
            const categoryCost = product.categories.reduce((acc, { additional_cost }) => acc + additional_cost, 0);
            return total + categoryCost;
        }, 0);
    };

    // Calcular el total de los productos
    const getTotal = () => {
        return cart_products.reduce((acc, { product, quantity }) => {
            const productTotal = product.price * quantity;
            const categoriesTotal = product.categories.reduce((catAcc, { additional_cost }) => catAcc + additional_cost, 0);
            return acc + productTotal + categoriesTotal;
        }, 0);
    };
    
    const totalQuantity = cart_products.reduce((acc, { quantity }) => acc + quantity, 0);

    const applicableCost = delivery_cost
    .sort((a, b) => b.quantity - a.quantity) // Ordena de mayor a menor por quantity
    .find(({ quantity }) => totalQuantity >= quantity);

    const getTotalProduct = (product) => {
        return product.product.price * product.quantity; // Multiplica por la cantidad
    };

    
    


    // Calcular el costo de envío según la cantidad total
    const getDeliveryCost = () => {
        return applicableCost ? applicableCost.delivery : 0;
    };

    // Calcular el total final
    const total = getTotal() + getDeliveryCost();


    return(
        <div class="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
            <header class="border-b border-gray-100 px-5 py-4">
                <div class="font-semibold text-gray-800">Carrito de Compras: {totalQuantity} productos pedidos</div>
                <span className="text-sm text-gray-500">
                    Costo de Envío (Por cantidad de Productos): $ {getDeliveryCost()}
                </span>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="w-full table-auto">
                    <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                            <th className="w-24"></th>
                            <th class="p-2">
                                <div class="text-left font-semibold">Nombre del Producto</div>
                            </th>
                            <th class="p-2">
                                <div class="text-left font-semibold">Cantidad</div>
                            </th>
                            <th class="p-2">
                                <div class="text-left font-semibold">Envío</div>
                            </th>
                            <th class="p-2">
                                <div class="text-left font-semibold">Valor</div>
                            </th>
                            <th class="p-2">
                                <div class="text-center font-semibold">Eliminar</div>
                            </th>
                        </tr>
                    </thead>

                    
                    <tbody class="divide-y divide-gray-100 text-sm">
                    {cart_products.length > 0 ? (
                        cart_products.map((product) => (
                        <tr>
                            <td class="p-2">
                                <img src={humitasImage} alt="Producto" className="w-16 h-16 object-cover rounded-lg"/>
                            </td>
                            <td class="p-2">
                                <div class="font-medium text-gray-800">{product.product.product_name}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">{product.quantity}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">{getDelivery(product)}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">{getTotalProduct(product)}</div>
                            </td>
                            <td class="p-2">
                                <div class="flex justify-center">
                                    <button>
                                        <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        
                    ))
                    ) : (
                        <tr>
                        <td colSpan="12" className="text-center py-4">
                            Agregue productos al Carrito.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            
            <div class="flex justify-between border-t border-gray-100 px-5 py-4  font-bold">
                <div class="text-left">
                    Costo de Envío: $ {getTotalCategoryCost()}
                </div>
                <div class="text-right text-2xl text-blue-600">
                    Total: $ {total}
                </div>
            </div>


            
        </div>

    )

}

export default Cart;