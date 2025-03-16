import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    const [showModal, setShowModal] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const categorias = [
        { id: 1, name: "Helado", descripcion: "Para alimentos muy helados", creator: "Juan33", cost: 2000.0, color: "#FFF232" },
        { id: 2, name: "Categoria2", descripcion: "Descripcion 2", creator: "Juan33", cost: 2000.0, color: "#32FF57" },
        { id: 3, name: "Categoria3", descripcion: "Descripcion 3", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
        { id: 4, name: "Categoria4", descripcion: "Descripcion 4", creator: "Carloto1", cost: 0, color: "#32A8FF" },
        { id: 5, name: "Categoria5", descripcion: "Descripcion 5", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
        { id: 6, name: "Categoria6", descripcion: "Descripcion 6", creator: "DMJ", cost: 2000.65, color: "#32A8FF" }
    ];

    const handleDeleteClick = (categoria) => {
        setCategoryToDelete(categoria);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        console.log(`Categoria ${categoryToDelete.name} eliminada`); // Aquí deberías realizar la lógica de eliminación
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold text-center mb-8 font-sans">Categorías</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categorias.map(categoria => (
                    <div
                        key={categoria.id}
                        className="col-span-1 divide-y divide-gray-200 rounded-lg  shadow-lg border border-gray-200"
                    >
                        <div className="flex w-full items-center justify-between space-x-6 p-6 font-sans">
                            {/* Detalles de la categoría */}
                            <div>
                                <p className="truncate text-base font-bold text-gray-900 mb-3">{categoria.name}</p>
                                <p className="text-gray-500 text-sm mb-3">{categoria.descripcion}</p>
                                <p className="text-gray-500 text-sm mb-2"><strong className='text-gray-700'>Costo Adicional de envío: </strong> 
                                    {categoria.cost === 0 ? "Sin costos" : `$${categoria.cost}`}</p>
                                <p className="text-gray-500 text-sm"><strong className='text-gray-700'>Creador:</strong> {categoria.creator}</p>
                            </div>
                            {/* Círculo con el color de la categoría y el ID */}
                            {/* Círculo con el color de la categoría y la primera letra del nombre */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-14 h-14 flex items-center justify-center">
                                    {/* Borde exterior */}
                                    <div className="absolute w-full h-full rounded-full border-4"
                                        style={{borderColor: categoria.color}}></div>
                                    {/* Círculo interior con la primera letra */}
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                        style={{ backgroundColor: categoria.color }}
                                    >
                                        {categoria.name.charAt(0).toUpperCase()}
                                    </div>
                                </div>
                                <p className="text-black font-bold text-sm mt-2">ID: #{categoria.id}</p>
                            </div>
                        </div>
                        {/* Botones */}
                        <div className="flex border-t border-gray-300 font-sans">
                            <button className="w-1/2 py-2 text-center text-gray-600 font-semibold hover:bg-gray-50 border-r border-gray-300">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" /> Editar
                            </button>
                            <button 
                                className="w-1/2 py-2 text-center text-gray-600 font-semibold hover:bg-gray-50"
                                onClick={() => handleDeleteClick(categoria)}>
                                <FontAwesomeIcon icon={faTrash} className="mr-2" />  Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 font-sans">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">¿Estás seguro de borrar la categoría?</h2>
                        <div className="flex justify-end space-x-4">
                            <button 
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                onClick={handleCancelDelete}>
                                Cancelar
                            </button>
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                onClick={handleConfirmDelete}>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
