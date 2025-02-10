import { useState } from "react";
import humitasImage from "../images/pai.jpg";
import Cart from "./products_cart";



const Products_List = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [cart, setCart] = useState([]);

    
    

    const categories = [
        {
            id_category: 1,
            name: "helado",
            additional_cost: 1000.0,
            color: "#9AC4F8",
        },
        {
            id_category: 2,
            name: "amor",
            additional_cost: 2500.0,
            color: "#99EDCC",
        },
        {
            id_category: 3,
            name: "flores",
            additional_cost: 0.0,
            color: "#E36588",
        },
        
        
        
       
    ];

    const list_products = [
        {
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
                    additional_cost: 1000.0,
                },
            ],
        },
        {
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
                    additional_cost: 0.0,
                },
                {
                    id_category: 1,
                    name: "helado",
                    additional_cost: 0.0,
                },
            ],
        },
        {
            id_product: 3,
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
                    additional_cost: 1000.0,
                },
            ],
        },
        {
            id_product: 4,
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
                    additional_cost: 0.0,
                },
                {
                    id_category: 1,
                    name: "helado",
                    additional_cost: 0.0,
                },
            ],
        },
        
    ];

    

    const toggleCategory = (id) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
        );
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id_product === product.id_product);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id_product === product.id_product
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    
    const filteredProducts =
        selectedCategories.length === 0
            ? list_products
            : list_products.filter((product) =>
                  product.categories.some((category) =>
                      selectedCategories.includes(category.id_category)
                  )
              );

              
        

    return (
        <div className="flex flex-1 h-full p-2">
            <div className="w-1/2 justify-center items-center flex flex-1 flex-col">
                {/* Lista de categorías para filtrar */}
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <span className="whitespace-nowrap">Filtrar por Categoría:</span>
                    <div className="flex flex-wrap w-2/3 gap-2 items-center">

                        {categories.map((category) => (
                            <button
                                key={category.id_category}
                                style={{
                                    backgroundColor: selectedCategories.includes(category.id_category)
                                        ? category.color
                                        : "#D1D5DB", // Gris claro
                                }}
                                className={`px-4 py-2 rounded-lg text-white`}
                                onClick={() => toggleCategory(category.id_category)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div>
                <button className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded transform hover:scale-105 transition-all duration-200 active:bg-red-500">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="whitespace-nowrap">Ver favoritos</span>
                </button>
            </div>

                </div>

                {/* Lista de productos */}
                <div className="bg-gray-100 grid grid-cols-4 gap-5 p-4">
                    {filteredProducts.map((product) => {
                        const totalDeliveryCost = product.categories.reduce(
                            (acc, category) => acc + category.additional_cost,
                            0
                        );

                        return (
                            <div
                                className={`rounded-xl bg-white p-3 shadow-lg duration-300 ${
                                    cart.some((cartItem) => cartItem.id_product === product.id_product)
                                        ? "shadow-xl scale-105 border-2 border-blue-500"
                                        : "hover:shadow-xl hover:transform hover:scale-105"
                                }`}
                                key={product.id_product}
                            >
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={humitasImage} alt="Producto" className="w-full h-auto object-cover rounded-lg"/>
                                    
                                    {/* Botón Corazón en la esquina superior derecha */}
                                    <button className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none z-10">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </button>

                                    {/* Reseña en la esquina inferior izquierda */}
                                    <button className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md group overflow-hidden">
                                        {/* Estrella */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        {/* Número de estrellas */}
                                        <span className="ml-1 text-sm text-slate-400">{product.star_rating}</span>

                                        {/* Desplegar el número de opiniones al hacer hover */}
                                        <span className="ml-2 text-sm text-slate-400 transition-all duration-300 h-0 w-0 group-hover:w-auto group-hover:opacity-100 opacity-0 flex items-center">
                                            {/* Mostrar la cantidad de opiniones solo al pasar el ratón */}
                                            | {product.reviews} opiniones
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-slate-700">{product.product_name}</h2>
                                    <p className="mt-1 text-sm text-slate-400">{product.description}</p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        <strong>{product.discount}% de descuento</strong>
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        <strong>
                                            {totalDeliveryCost > 0
                                                ? `Costo de Envío: $${totalDeliveryCost}`
                                                : "Envío Gratis"}
                                        </strong>
                                    </p>

                                    <div className="flex items-end justify-between">
                                        <div className="mt-3 flex flex-col items-start">
                                            <p className="text-lg font-bold text-blue-500">
                                                ${product.price}
                                            </p>
                                            <span className="mt-1 text-sm font-medium text-gray-500 line-through">
                                                ${product.original_price}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-1.4 rounded-lg bg-blue-500 px-3 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                />
                                            </svg>

                                            <button
                                                className="bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                onClick={() => addToCart(product)}
                                            >
                                                Añadir a carrito
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
            <Cart cart={cart} setCart={setCart} />

            
        </div>
    );
};

export default Products_List;
