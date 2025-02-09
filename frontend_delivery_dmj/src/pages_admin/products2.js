import humitasImage from '../images/pai.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Products2 = () => {

    const delivery_cost = { // costo de envio se suma al total de carrito
        id: 1, price: 1000, product_quantity: null
    }

    const list_products = [
        {
            id_product: 1, product_name: "Pastel 3 leches", 
            description: "Encantador y rico pastel 3 leches", original_price: 10000, price: 8000, discount: 20, star_rating: 5, reviews: 100, 
            categories: [
                {
                    id_category: 2,
                    name: "amor",
                    additional_cost: 2500.0
                },
                {
                    id_category: 1,
                    name: "helado",
                    additional_cost: 1000.0
                }
            ]
        },
        {
            id_product: 5, product_name: "dmj", description: "maria",
            price: 5000.0, original_price: 10000, price: 9000, discount: 10, star_rating: 4.5, reviews: 100, 
            categories: [
                {
                    id_category: 3,
                    name: "flores",
                    additional_cost: 0.0
                },
                {
                    id_category: 1,
                    name: "helado",
                    additional_cost: 0.0
                }
            ]
        },
    ];

    const products_cart = {
        products: [
            { id_product: 1, price: 8000.0, quantity: 10, additional_cost: 3500},
            { id_product: 5, price: 5000.0, quantity: 20, additional_cost: 0 },
        ],
        
    }
    return(
        <div className="flex flex-1 h-full p-2">

            {/* Lista de productos */}
            <div className="w-2/3 justify-center items-center flex flex-1">
                <div className="bg-gray-100 grid grid-cols-2 gap-7 p-4">
                    {list_products.map(product => {
                        // Calcular el costo de envío sumando los additional_cost de las categorías
                        const totalDeliveryCost = product.categories.reduce((acc, category) => acc + category.additional_cost, 0);

                        return (
                            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" key={product.id_product}>
                                
                                <div className="flex flex-col items-center md:flex-row">
                                    <div className="md:w-3/5 p-4 relative">
                                        <div className="flex flex-col">
                                            <img src={humitasImage} alt="Producto" className="w-full h-auto object-cover rounded-lg"/>
                                            <button className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none">
                                                <svg className="w-6 h-6 absolute top-0 right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="md:w-2/5 p-6">
                                        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.product_name}</h1>
                                        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                                        <div className="flex items-center mb-4">
                                            <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">{product.star_rating} ★</span>
                                            <span className="text-sm text-gray-500 ml-2">{product.reviews} opiniones</span>
                                        </div>
                                        
                                        <ul className="text-sm text-gray-700 mb-2">
                                            {product.categories.map((category) => (
                                                <li key={category.id_category} className="flex items-center mb-1">
                                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    {category.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <span className="text-3xl font-bold text-gray-900">${product.price} </span>
                                                <span className="ml-2 text-sm font-medium text-gray-500 line-through">${product.original_price}</span>
                                            </div>
                                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product.discount}% Descuento</span>
                                        </div>

                                        <p className="text-green-600 text-sm font-semibold mb-4">
                                            {totalDeliveryCost > 0 ? `Costo de Envío: $${totalDeliveryCost}` : 'Envío Gratis'}
                                        </p>

                                        <div className="flex space-x-4">
                                            
                                            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                                                <FontAwesomeIcon icon={faCartShopping} className="mr-2" /> Añadir al Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Carrito de compras */}
            <div className="w-1/3 ">
                {/* Insertar aquí carrito de compras */}
            </div>

        </div>
    );
}

export default Products2;
