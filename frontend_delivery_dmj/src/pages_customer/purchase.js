import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Función para manejar los datos del usuario
const handleUserData = (userData) => {
    console.log("Datos del usuario con coordenadas:", userData);
    // Aquí podrías guardarlos en un backend
};

// Función para obtener coordenadas a partir de la dirección
const getCoordinatesFromAddress = async (address) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const data = await response.json();
    if (data.length > 0) {
        return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    }
    return null;
};

const UserLocationForm = () => {
    const { register, handleSubmit } = useForm();
    const [coordinates, setCoordinates] = useState(null);

    const handleFormSubmit = async (data) => {
        const coords = await getCoordinatesFromAddress(data.address);
        if (coords) {
            setCoordinates(coords);
            // Usamos handleUserData aquí para enviar los datos
            handleUserData({ ...data, latitude: coords.lat, longitude: coords.lon });
        } else {
            alert("No se pudo obtener la ubicación. Verifica la dirección.");
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Datos de Envío</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                {/* Nombre Completo */}
                <div>
                    <label className="block text-sm font-medium">Nombre Completo</label>
                    <input type="text" {...register("fullName", { required: true })} className="mt-1 p-2 w-full border rounded" />
                </div>

                {/* Correo Electrónico */}
                <div>
                    <label className="block text-sm font-medium">Correo Electrónico</label>
                    <input type="email" {...register("email", { required: true })} className="mt-1 p-2 w-full border rounded" />
                </div>

                {/* Número de Celular */}
                <div>
                    <label className="block text-sm font-medium">Número de Celular</label>
                    <input type="tel" {...register("phone", { required: true })} className="mt-1 p-2 w-full border rounded" />
                </div>

                {/* Género */}
                <div>
                    <label className="block text-sm font-medium">Género</label>
                    <select {...register("gender")} className="mt-1 p-2 w-full border rounded">
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                        <option value="Prefiero no contestar">Prefiero no contestar</option>
                    </select>
                </div>

                {/* Dirección */}
                <div>
                    <label className="block text-sm font-medium">Dirección</label>
                    <input type="text" {...register("address", { required: true })} className="mt-1 p-2 w-full border rounded" />
                </div>

                {/* Botón Enviar */}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-2">
                    Guardar Ubicación
                </button>
            </form>

            {/* Mapa con la ubicación */}
            {coordinates && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Ubicación en el mapa</h3>
                    <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={15} style={{ height: "300px", width: "100%", marginTop: "10px" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[coordinates.lat, coordinates.lon]} icon={L.icon({ iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png", iconSize: [30, 30] })} />
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default UserLocationForm;

