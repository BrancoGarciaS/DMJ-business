import { useState } from "react";
import humitasImage from "../images/pai.jpg";

const Products = () => {
   // codigo aca
    return (
        <div className="flex flex-1 h-full p-2">
                <div className="w-2/3 justify-center items-center flex flex-1 flex-col">
                {/* Codigo Lista de categorías para filtrar */}
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
                                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
                                key={product.id_product}
                            >
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={humitasImage} alt="Producto" className="w-full h-auto object-cover rounded-lg"/>
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
                                            <p className="text-lg font-bold text-blue-500">${product.price}</p>
                                            <span className="mt-1 text-sm font-medium text-gray-500 line-through">${product.original_price}</span>
                                        </div>
                                        <div className="flex items-center space-x-1.4 rounded-lg bg-blue-500 px-3 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                            </svg>
                                            <button className="text-sm">Añadir a carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Carrito de compras */}
            <div className="w-1/3">
                {/* Insertar codigo carrito de compras */}
            </div>
        </div>
    );
};

export default Products;
