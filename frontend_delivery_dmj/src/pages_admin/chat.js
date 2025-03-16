import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const username = "DMJ_1";
  localStorage.setItem("username", username);
  const us = localStorage.getItem("username");

  const chats = [
    { id_message: 1, sender: "DMJ_1", receiver: "carloto", message: "Hola", m_date: "2025-02-06T15:18:44.170172", read: true },
    { id_message: 2, sender: "carloto", receiver: "DMJ_1", message: "Hola", m_date: "2025-02-06T15:20:44.170172", read: true },
    { id_message: 3, sender: "DMJ_1", receiver: "carloto", message: "¿Cómo estás?", m_date: "2025-02-06T15:22:44.170172", read: true },
    { id_message: 4, sender: "carloto", receiver: "DMJ_1", message: "¿Bien y tú?", m_date: "2025-02-06T15:24:44.170172", read: true },
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
    <div className="w-full mx-auto border rounded-lg shadow-lg bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white text-lg font-semibold p-4 text-center">
        Chat con {otherUser}
      </div>

      {/* Chat Container */}
      <div className="p-4 h-96 overflow-y-auto flex flex-col gap-3">
        {chats.map(({ id_message, sender, message, m_date, read }) => {
          const isSender = sender === us;
          return (
            <div key={id_message} className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] p-3 rounded-lg shadow-md ${isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                <p className="text-sm">{message}</p>
                <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                  {formatDate(m_date)}
                  {isSender && (
                    <span className={`ml-1 ${read ? "text-green-500" : "text-gray-400"}`}>
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

      {/* Selector de mensajes predeterminados */}
      <div className="p-4 border-t bg-gray-100">
        <select
          className="w-full p-2 border rounded-lg"
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

        {/* Botón de enviar */}
        <button
          className="w-full bg-blue-500 text-white p-2 mt-3 rounded-lg hover:bg-blue-600"
          onClick={handleSendMessage}
          disabled={!selectedMessage && !customMessage.trim()}
        >
          Enviar Mensaje
        </button>
      </div>
    </div>
  );
};

export default Chat;
