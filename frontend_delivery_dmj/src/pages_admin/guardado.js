import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from "react";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';



const Chat_exp = () => {

    
    const admins = [
        { username: "C_DMJ_1", name: "Carlos García", color: "#FFF232", gender: "Masculino", email: "ejemplo1@gmail.com", phone: "+56 9 8787 8989"},
        { username: "E_DMJ_2", name: "Ernesto Galvez",color: "#32FF57",  gender: "Masculino", email: "ejemplo1@gmail.com", phone: "+56 9 8787 8989"},
        { username: "L_DMJ_3", name: "Lucas Paredes", color: "#32A8FF", gender: "Masculino", email: "ejemplo1@gmail.com", phone: "+56 9 8787 8989"},
        { username: "D_DMJ_4", name: "Diego Santana",color: "#32FF57", gender: "Masculino", email: "ejemplo1@gmail.com", phone: "+56 9 8787 8989"},
        { username: "M_DMJ_5", name: "María García", color: "#FFF232", gender: "Masculino", email: "ejemplo1@gmail.com", phone: "+56 9 8787 8989"},

    ]

    const username = "DMJ_1";
    localStorage.setItem("username", username);
    const us = localStorage.getItem("username");

    const chats = [
        { id_message: 1, sender: "DMJ_1", receiver: "carloto", message: "Hola", m_date: "2025-02-06T15:18:44.170172", read: true },
        { id_message: 2, sender: "carloto", receiver: "DMJ_1", message: "Hola", m_date: "2025-02-06T15:20:44.170172", read: true },
        { id_message: 3, sender: "DMJ_1", receiver: "carloto", message: "¿Cómo estás?", m_date: "2025-02-06T15:22:44.170172", read: true },
        { id_message: 4, sender: "roberto", receiver: "DMJ_1", message: "¿Bien y tú?", m_date: "2025-02-06T15:24:44.170172", read: true },
        { id_message: 5, sender: "DMJ_1", receiver: "carloto", message: "Bien, gracias", m_date: "2025-02-06T15:26:44.170172", read: true },
        { id_message: 6, sender: "DMJ_1", receiver: "carloto", message: "Buenas tardes", m_date: "2025-02-06T15:27:44.170172", read: false },
    ];

    const list_products = [
        { id_product: 1, product_name: "Pastel 3 leches" },
        { id_product: 5, product_name: "dmj" },
    ];

    const predefinedMessages = [
        "Mi pedido no ha llegado en el tiempo estimado. ¿Pueden decirme dónde está?",
        "Recibí una notificación de que el pedido había sido entregado, pero no lo he recibido. ¿Pueden investigar?",
        "El repartidor no pudo encontrar mi dirección. ¿Pueden asegurarse de que llegue correctamente?",
        "Mi pedido llegó dañado. ¿Qué pasos debo seguir para que me lo reemplacen?",
    ];

    const [selectedMessage, setSelectedMessage] = useState("");
    const [customMessage, setCustomMessage] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const receiver = "carloto"; // Simulación del receptor del mensaje

    const messagesEndRef = useRef(null); // Referencia para el contenedor de mensajes

    const handleSendMessage = () => {
        let messageToSend = selectedMessage;

        if (selectedMessage.includes("producto incorrecto") && selectedProducts.length > 0) {
        const productsText = selectedProducts.map(p => p.product_name).join(", ");
        messageToSend += ` Productos incorrectos: ${productsText}`;
        }

        if (customMessage.trim()) {
        messageToSend = customMessage;
        }

        const newMessage = {
        sender: us,
        receiver,
        message: messageToSend,
        };

        console.log("Mensaje enviado:", newMessage);
        setCustomMessage("");
        setSelectedMessage("");
        setSelectedProducts([]);
    };

    const toggleProductSelection = (product) => {
        setSelectedProducts((prev) =>
        prev.some((p) => p.id_product === product.id_product)
            ? prev.filter((p) => p.id_product !== product.id_product) // Eliminar si ya está seleccionado
            : [...prev, product] // Agregar si no está seleccionado
        );
    };

    // Obtener el nombre del usuario con el que se conversa
    const otherUser = chats.find(chat => chat.sender !== us)?.sender || "Desconocido";

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("es-CL", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" });
    };

    // Efecto para desplazar al final cuando se renderiza o cambia el estado de chats
    useEffect(() => {
        if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chats]); // Dependencia en los chats


    return (
    <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
            {/* Panel izquierdo */}
            <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 h-full">
                <div className="flex flex-row items-center justify-center h-12 w-full">
                    <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                        <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6" />
                    </div>
                    <div className="ml-2 font-bold text-lg">Atención al Cliente</div>
                </div>
                <div className="flex flex-col items-center justify-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                    {/* Círculo interior con símbolo */}
                    <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center text-white bg-indigo-700 font-bold">
                        <FontAwesomeIcon icon={faUserTie} className="w-10 h-10" />
                    </div>
                    <div className="text-sm font-semibold mt-2">Chile a Domicilio</div>
                    <div className="text-xs text-gray-500 text-center">De la tienda a tu puerta, sin demoras</div>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="flex flex-row items-center justify-between text-xs">
                        <span className="font-bold text-xs">Contactos Administrativos</span>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-64 overflow-y-auto">
                        {admins.map(admin => (
                            <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                <div className="flex items-center justify-center h-8 w-8 rounded-full" style={{ backgroundColor: admin.color }}>
                                    {admin.username.charAt(0).toUpperCase()}
                                </div>
                                <div className="ml-2 text-sm font-semibold">{admin.name}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Panel derecho */}
            <div className="flex flex-col flex-auto h-full p-6">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div className="flex flex-col overflow-x-auto mb-4">
                        <div className="flex flex-col ">
                            <div className="overflow-y-auto flex flex-col gap-y-2">
                                {chats.map(({ id_message, sender, message, m_date, read }) => {
                                    const isSender = sender === us;
                                    return (
                                        <div key={id_message} className={`flex items-center p-3 ${isSender ? "flex-row-reverse" : "justify-start"}`}>
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                {sender.charAt(0).toUpperCase()}
                                            </div>
                                            <div className={`relative text-sm py-2 px-4 shadow rounded-xl ${isSender ? "bg-indigo-100 mr-3" : "bg-white ml-3"}`}>
                                                <p>{message}</p>
                                                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                    {formatDate(m_date)}
                                                    {isSender && (
                                                        <span className={`ml-1 text-base ${read ? "text-green-500" : "text-gray-400"}`}>
                                                            {read ? "✓✓" : "✓"}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* Referencia al final del chat */}
                                <div ref={messagesEndRef} /> 
                            </div>
                        </div>

                        {/* Selector de mensajes predeterminados */}
                        <div className="flex flex-row items-center p-4 border-t rounded-xl bg-white px-4">
                            <div className="flex-grow px-3">
                                <div className='flex flex-col'>
                                    <select
                                        className="w-full relative p-2 border rounded-lg"
                                        value={selectedMessage}
                                        onChange={(e) => setSelectedMessage(e.target.value)}
                                    >
                                        <option value="">Selecciona un mensaje</option>
                                        {predefinedMessages.map((msg, index) => (
                                            <option key={index} value={msg}>{msg}</option>
                                        ))}
                                        <option value="Recibí el producto incorrecto, ¿pueden corregirlo y enviarme lo que pedí?">
                                            Recibí el producto incorrecto, ¿pueden corregirlo y enviarme lo que pedí?
                                        </option>
                                        <option value="Enviar mensaje personalizado">
                                            Enviar mensaje personalizado (Mensaje no predeterminado)
                                        </option>
                                    </select>
                                    {/* Selección de productos incorrectos */}
                                    {selectedMessage.includes("producto incorrecto") && (
                                        <div className="mt-3">
                                            <label className="block text-sm font-medium">Selecciona los productos incorrectos:</label>
                                            <div className="grid grid-cols-2 gap-2 mt-2">
                                                {list_products.map((product) => (
                                                    <div
                                                        key={product.id_product}
                                                        className={`p-2 border rounded-md cursor-pointer ${selectedProducts.some((p) => p.id_product === product.id_product) ? "bg-blue-300" : "bg-white"}`}
                                                        onClick={() => toggleProductSelection(product)}
                                                    >
                                                        {product.product_name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Entrada de mensaje personalizado */}
                                    {selectedMessage.includes("mensaje personalizado") && (
                                        <textarea
                                            className="w-full p-2 border rounded-lg mt-3"
                                            placeholder="Escribe un mensaje personalizado..."
                                            value={customMessage}
                                            onChange={(e) => setCustomMessage(e.target.value)}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="ml-2">
                                <button
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                    onClick={handleSendMessage} disabled={!selectedMessage && !customMessage.trim()}
                                >
                                    <span>Enviar Mensaje</span>
                                    <FontAwesomeIcon icon={faPaperPlane} className="pl-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

};

export default Chat_exp;