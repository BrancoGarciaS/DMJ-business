import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    const categorias = [
        { id: 1, name: "Helado", descripcion: "Para alimentos muy helados", creator: "Juan33", cost: 2000.0, color: "#FFF232" },
        { id: 2, name: "Categoria2", descripcion: "Descripcion 2", creator: "Juan33", cost: 2000.0, color: "#32FF57" },
        { id: 3, name: "Categoria3", descripcion: "Descripcion 3", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
        { id: 4, name: "Categoria4", descripcion: "Descripcion 4", creator: "Carloto1", cost: 0, color: "#32A8FF" },
        { id: 5, name: "Categoria5", descripcion: "Descripcion 5", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
        { id: 6, name: "Categoria6", descripcion: "Descripcion 6", creator: "DMJ", cost: 2000.65, color: "#32A8FF" }
    ];


    return (
        <div className='p-8'>
            <h1>Categorías</h1>

            <div className="bg-gray-100 grid grid-cols-3 gap-7 p-4">
                {categorias.map(categoria => (
                    <div
                        key={categoria.id}
                        className="min-h-[20vh] bg-white border border-gray-250 rounded-lg flex flex-col justify-between shadow-md"
                    >
                        <div className="p-6 flex items-center justify-between">
                            {/* Detalles de la categoría */}
                            <div>
                                <p className="text-black font-bold mb-2">{categoria.name}</p>
                                <p className="text-black text-sm mb-3">{categoria.descripcion}</p>
                                <p className="text-black text-sm mb-2"><strong>Costo Adicional de envío: </strong> 
                                    {categoria.cost === 0 ? "Sin costos" : `$${categoria.cost}`}</p>
                                <p className="text-black text-sm"><strong>Creador:</strong> {categoria.creator}</p>
                            </div>
                            {/* Círculo con el color de la categoría y el ID */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-14 h-14 flex items-center justify-center">
                                    {/* Borde exterior */}
                                    <div className="absolute w-full h-full rounded-full border-4"
                                        style={{borderColor: categoria.color}}>
                                    </div>
                                    {/* Círculo interior */}
                                    <div
                                        className="w-10 h-10 rounded-full"
                                        style={{ backgroundColor: categoria.color }}
                                    ></div>
                                </div>
                                <p className="text-black text-sm mt-2">ID: #{categoria.id}</p>
                            </div>
                        </div>
                        {/* Botones */}
                        <div className="flex border-t border-gray-300">
                            <button className="w-1/2 py-2 text-center text-blue-600 font-semibold hover:bg-gray-100 border-r border-gray-300">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" /> Editar
                            </button>
                            <button className="w-1/2 py-2 text-center text-red-600 font-semibold hover:bg-gray-100">
                                <FontAwesomeIcon icon={faTrash} className="mr-2" />  Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

