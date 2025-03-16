import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


const DeliveryCost = () => {
  const categorias = [
    { id: 1, name: "Helado", descripcion: "Para alimentos muy helados", creator: "Juan33", cost: 2000.0, color: "#FFF232" },
    { id: 2, name: "Categoria2", descripcion: "Descripcion 2", creator: "Juan33", cost: 2000.0, color: "#32FF57" },
    { id: 3, name: "Categoria3", descripcion: "Descripcion 3", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
    { id: 4, name: "Categoria4", descripcion: "Descripcion 4", creator: "Carloto1", cost: 0, color: "#32A8FF" },
    { id: 5, name: "Categoria5", descripcion: "Descripcion 5", creator: "Juan33", cost: 2000.0, color: "#32A8FF" },
    { id: 6, name: "Categoria6", descripcion: "Descripcion 6", creator: "DMJ", cost: 2000.65, color: "#32A8FF" },
    { id: 6, name: "Categoria6", descripcion: "Descripcion 6", creator: "DMJ", cost: 2000.65, color: "#32A8FF" }
    ,{ id: 6, name: "Categoria6", descripcion: "Descripcion 6", creator: "DMJ", cost: 2000.65, color: "#32A8FF" }

];

  const delivery_cost = [
    { id: 3, delivery: 5000, quantity: 15 },
    { id: 2, delivery: 4000, quantity: 10 },
    { id: 1, delivery: 3000, quantity: 5 }
  ];

  const itemsPerPage = 6; // Cantidad de elementos por página
  const [currentPageDelivery, setCurrentPageDelivery] = useState(1);
  const [currentPageCategories, setCurrentPageCategories] = useState(1);

  // Paginación para delivery costs
  const totalPagesDelivery = Math.ceil(delivery_cost.length / itemsPerPage);
  const displayedDelivery = delivery_cost.slice(
    (currentPageDelivery - 1) * itemsPerPage,
    currentPageDelivery * itemsPerPage
  );

  // Paginación para categorías
  const totalPagesCategories = Math.ceil(categorias.length / itemsPerPage);
  const displayedCategories = categorias.slice(
    (currentPageCategories - 1) * itemsPerPage,
    currentPageCategories * itemsPerPage
  );

  return (
    <div className="flex h-full p-6">
      {/* Columna de Costos de Delivery */}
      <div className="w-1/2 p-4 border  order-gray-100 rounded-lg shadow-lg ml-4 p-6 font-sans">
        <h2 className="text-xl font-semibold text-center mb-4">Costos de Delivery</h2>
        <table className="w-full table-auto border-gray-50 border shadow">
            <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
            <tr>
              <th className=" p-2">ID</th>
              <th className=" p-2">Cantidad de productos para aplicar costo</th>
              <th className=" p-2">Costo</th>
              <th className="p-2">Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-sm">
            {displayedDelivery.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="px-2 py-4">{item.id}</td>
                <td className="px-2 py-4">{item.quantity}</td>
                <td className="px-2 py-4">${item.delivery}</td>
                <td>
                    <button 
                        className="group relative ml-3 text-white rounded transform hover:scale-105 transition-all duration-200 mr-2">
                        <FontAwesomeIcon icon={faPencil} className="mr-1 text-gray-500 group-hover:text-gray-700" />
                        {/* Descripción visible solo al pasar el mouse */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                            Editar costo de envío
                        </span>
                    </button>
                    <button 
                        className="group relative ml-3 text-white rounded transform hover:scale-105 transition-all duration-200 mr-2">
                        <FontAwesomeIcon icon={faTrash} className="mr-1 text-gray-500 group-hover:text-gray-700" />
                        {/* Descripción visible solo al pasar el mouse */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                            Eliminar costo de envío
                        </span>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Paginación para costos de delivery */}
        <div className="flex justify-center mt-4 ">
          <button
            className="px-4 py-2 bg-gray-300 rounded-l-md disabled:opacity-50"
            onClick={() => setCurrentPageDelivery(currentPageDelivery - 1)}
            disabled={currentPageDelivery === 1}
          >
            {"<"}
          </button>
          <span className="px-4 py-2 bg-white border">{currentPageDelivery} / {totalPagesDelivery}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded-r-md disabled:opacity-50"
            onClick={() => setCurrentPageDelivery(currentPageDelivery + 1)}
            disabled={currentPageDelivery === totalPagesDelivery}
          >
            {">"}
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-4 text-sm space-y-2">
            <p><strong>Nota:</strong> En esta sección se muestran los precios considerados en el 
                envío según la cantidad de productos solicitados. El sistema aplicará 
                el costo de envío acorde a la cantidad de productos que solicite el usuario, 
                haciendo calzar el número mayor de esta tabla con la condición que sea menor 
                a la cantidad de productos del carrito del cliente, y aplicando el costo asociado.
            </p>
            <p><strong>Ejemplo: </strong>Si se establecen costos de envío de $5000 para 
            15 productos, $4000 para 10 productos y $3000 para 5 productos, en caso 
            de que un cliente realice una compra con un carrito de 20 productos, el costo 
            de envío (sin considerar el de las categorías) sería de $5000, por otro lado, 
            si el carrito tiene 11 productos se aplica el costo de $4000, y si tiene 1 producto
            se aplica un costo de $0</p>

            <p>En caso de no agregar costos de delivery, el sistema solo considerará los costos 
                de envío de las categorías, y si estas no tienen costos asociados tampoco, no se 
                cobrarán costos de envío
            </p>
        </div>
      </div>

      {/* Columna de Categorías */}
      <div className="w-1/2 p-4 border border-gray-100 rounded-lg shadow-lg ml-4 p-6 font-sans">
        <h2 className="text-xl font-semibold text-center mb-4">Categorías y Costos</h2>
        <table className="w-full table-auto border-gray-50 border shadow">
            <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
            <tr>
                <th></th>
              <th className="p-2">Categoría</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Costo</th>
              <th className="p-2">Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-sm">
            {displayedCategories.map((cat) => (
              <tr key={cat.id} className="text-center border-t" >
                <td className=" p-2">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: cat.color }}
                    >
                        {cat.name.charAt(0).toUpperCase()}
                    </div>
                </td>
                <td className=" p-2 font-semibold">
                    {cat.name}  
                </td>
                <td className=" p-2">{cat.descripcion}</td>
                <td className=" p-2 font-bold">${cat.cost}</td>
                <td>
                    <button 
                        className="group relative ml-3 text-white rounded transform hover:scale-105 transition-all duration-200 mr-2">
                        <FontAwesomeIcon icon={faPencil} className="mr-1 text-gray-500 group-hover:text-gray-700" />
                        {/* Descripción visible solo al pasar el mouse */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                            Editar Categoría
                        </span>
                    </button>
                    <button 
                        className="group relative ml-3 text-white rounded transform hover:scale-105 transition-all duration-200 mr-2">
                        <FontAwesomeIcon icon={faTrash} className="mr-1 text-gray-500 group-hover:text-gray-700" />
                        {/* Descripción visible solo al pasar el mouse */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                            Eliminar Categoría
                        </span>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Paginación para categorías */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-l-md disabled:opacity-50"
            onClick={() => setCurrentPageCategories(currentPageCategories - 1)}
            disabled={currentPageCategories === 1}
          >
            {"<"}
          </button>
          <span className="px-4 py-2 bg-white border">{currentPageCategories} / {totalPagesCategories}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded-r-md disabled:opacity-50"
            onClick={() => setCurrentPageCategories(currentPageCategories + 1)}
            disabled={currentPageCategories === totalPagesCategories}
          >
            {">"}
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow-md mt-4 text-sm space-y-2">
            <p><strong>Nota:</strong> En esta sección se muestran los precios considerados en el 
                envío según la categoría de los productos solicitados. El sistema calculará 
                el costo de envío de cada producto sumando los costos de todas las categorías
                de dicho producto, y se aplicará la suma de costos de envío de categorías solo 
                una vez por cada producto agregado en el carrito 
            </p>
            <p>
                <strong>Ejemplo:</strong> Si un producto tiene las categoría A y B, con costos de envío 
                de $1200 y $800 respectivamente, el sistema sumará y calculará el costo de envío por categoría 
                de ese producto como $2000, y ese costo de envío se aplica una 
                vez en el carrito del cliente, o sea si el usuario pide 5 o 9 veces ese producto, se le aplicará igualmente 
                el costo de envío por categoría de $2000
            </p>
            <p> <strong>Sugerencia: </strong> Se recomienda aplicar costos de categoría a productos
                que requieran un cuidado especial en su envío. Además, se sugiere 
                aplicar costos bajos a algunas categorías (no todas), para no aumentar
                el costo total de los productos. En caso de no querer agregar costos, 
                pero si tener categorías para mantener el orden en la tienda,
                el sistema permite tener categorías sin costos de envío ($0)
            </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCost;
