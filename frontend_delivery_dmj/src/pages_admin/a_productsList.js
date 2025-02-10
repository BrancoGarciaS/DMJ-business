import { useState } from "react";
import humitasImage from "../images/pai.jpg";
import Cart from "./a_cart";

const ProductsList = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [cart, setCart] = useState([]);

    const categories = [
        { id_category: 1, name: "helado", additional_cost: 1000.0, color: "#9AC4F8" },
        { id_category: 2, name: "amor", additional_cost: 2500.0, color: "#99EDCC" },
        { id_category: 3, name: "flores", additional_cost: 0.0, color: "#E36588" }
    ];

    const list_products = [
        {
            id_product: 1, product_name: "Pastel 3 leches", description: "Encantador y rico pastel 3 leches",
            original_price: 10000, price: 8000, discount: 20, star_rating: 5, reviews: 100,
            categories: [{ id_category: 2, name: "amor", additional_cost: 2500.0 }, { id_category: 1, name: "helado", additional_cost: 1000.0 }]
        },
        {
            id_product: 5, product_name: "dmj", description: "maria", price: 5000.0, original_price: 10000,
            discount: 10, star_rating: 4.5, reviews: 300,
            categories: [{ id_category: 3, name: "flores", additional_cost: 0.0 }, { id_category: 1, name: "helado", additional_cost: 0.0 }]
        }
    ];

    const toggleCategory = (id) => {
        setSelectedCategories(prev => prev.includes(id) ? prev.filter(cat => cat !== id) : [...prev, id]);
    };

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id_product === product.id_product);
            return existingProduct
                ? prevCart.map(item => item.id_product === product.id_product ? { ...item, quantity: item.quantity + 1 } : item)
                : [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const filteredProducts = selectedCategories.length === 0
        ? list_products
        : list_products.filter(product =>
            product.categories.some(category => selectedCategories.includes(category.id_category))
        );

    return (
        <div className="flex flex-1 h-full p-2">
            {/* Sección de productos */}
            <div className="w-1/2 flex flex-col items-center">
                {/* Filtros */}
                <div className="flex justify-center items-center space-x-4 mb-4">
                    <span>Filtrar por Categoría:</span>
                    <div className="flex flex-wrap w-2/3 gap-2 items-center">
                        {categories.map(category => (
                            <button
                                key={category.id_category}
                                style={{ backgroundColor: selectedCategories.includes(category.id_category) ? category.color : "#D1D5DB" }}
                                className="px-4 py-2 rounded-lg text-white"
                                onClick={() => toggleCategory(category.id_category)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lista de productos */}
                <div className="bg-gray-100 grid grid-cols-4 gap-5 p-4">
                    {filteredProducts.map(product => {
                        const totalDeliveryCost = product.categories.reduce((acc, category) => acc + category.additional_cost, 0);

                        return (
                            <div key={product.id_product} className="rounded-xl bg-white p-3 shadow-lg hover:scale-105">
                                <img src={humitasImage} alt="Producto" className="w-full h-auto object-cover rounded-lg"/>
                                <h2 className="text-slate-700">{product.product_name}</h2>
                                <p className="text-sm text-slate-400">{product.description}</p>
                                <p className="text-sm text-slate-400"><strong>{product.discount}% de descuento</strong></p>
                                <p className="text-sm text-slate-400">
                                    <strong>{totalDeliveryCost > 0 ? `Costo de Envío: $${totalDeliveryCost}` : "Envío Gratis"}</strong>
                                </p>
                                <div className="flex justify-between mt-3">
                                    <div>
                                        <p className="text-lg font-bold text-blue-500">${product.price}</p>
                                        <span className="text-sm font-medium text-gray-500 line-through">${product.original_price}</span>
                                  </div>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600" onClick={() => addToCart(product)}>
                                        Añadir a carrito
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Componente de carrito */}
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
};

export default ProductsList;
