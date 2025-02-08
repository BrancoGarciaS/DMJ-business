import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import mapIconUrl from "../images/office-building.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter, faCaretDown, faCaretUp, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const customIcon = new L.Icon({
    iconUrl: mapIconUrl,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const createLabelIcon = (text) => {
    return L.divIcon({
        className: "custom-label",
        html: `<div style="color: black; font-size: 14px; font-weight: bold; display: flex; 
        justify-content: center; align-items: center; text-align: center; white-space: nowrap;"> Sede ${text}</div>`
    });
};

const locations = [
    {
        id: 1,
        name: "Costanera Center",
        address: "Avenida Andrés Bello 2425",
        longitude: -70.60651800646522,
        latitude: -33.41765576160351,
    },
    {
        id: 2,
        name: "Mall Florida",
        address: "Av. Vicuña Mackenna Ote. 6100, 8242155 La Florida, Región Metropolitana",
        longitude: -70.6070638996833,
        latitude: -33.510391363787,
    },
    {
        id: 3,
        name: "Mall Arauco Maipú",
        address: "Av. Américo Vespucio 399, 9250000 Maipú, Región Metropolitana",
        longitude: -70.75200325466888,
        latitude: -33.48000633720189,
    }
];

const ResetViewButton = () => {
    const map = useMap();

    const resetView = () => {
        map.setView([-33.45, -70.65], 12);
    };

    return <button onClick={resetView} style={{
        position: "absolute", top: "10px", right: "10px", zIndex: 1000, backgroundColor: "white", color: "black",
        padding: "10px 20px", borderRadius: "12px", border: "2px solid #777777", fontWeight: "bold", 
        fontFamily: "'Roboto Slab', serif", cursor: "pointer", transition: "background-color 0.3s, transform 0.3s",
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#bdb9b9"}
    onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
    onFocus={(e) => e.target.style.transform = "scale(1.05)"}
    onBlur={(e) => e.target.style.transform = "scale(1)"}> 
        <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} className="mr-2" /> Centrar Mapa
    </button>;
};

const Locations = () => {
    // Estado para controlar qué sede está abierta
    const [openLocation, setOpenLocation] = useState(null);

    const toggleLocation = (id) => {
        setOpenLocation(openLocation === id ? null : id);
    };

    return (
        <div className="flex flex-1 justify-center items-center h-full">

            {/* Lista de sedes */}
            <div className="w-1/2 p-9">
                <h1 className="text-xl font-bold mb-4">Sedes de la Empresa:</h1>
                <ul className="list-disc">
                    {locations.map((location) => (
                        <div key={location.id}>
                        <hr className="w-full my-8" />
                        <div className="w-full md:px-6">
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p className="flex items-center text-lg font-semibold">
                                        <span className="mr-4 text-2xl">{location.id}.</span> 
                                        {location.name}
                                    </p>
                                </div>
                                <button 
                                    aria-label="toggler" 
                                    onClick={() => toggleLocation(location.id)}
                                    className="focus:outline-none"
                                >
                                    <FontAwesomeIcon icon={openLocation === location.id ? faCaretUp : faCaretDown} />
                                </button>
                            </div>
                            {/* Contenedor con animación */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openLocation === location.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="mt-2 p-2 border-l-4 border-gray-400 text-base text-gray-600">
                                        {location.address}
                                    </p>
                                </div>
                        </div>
                    </div>
                        
                    ))}
                </ul>

                <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                        <FontAwesomeIcon icon={faPlus} className="mr-1"/> Agregar Sede
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                        <FontAwesomeIcon icon={faTrash} className="mr-1"/> Eliminar Sede
                    </button>
                </div>


                
                
            </div>
            
            {/* Mapa */}
            <div className="w-1/2 p-10">
                <p className="py-2">Presione los iconos para obtener las direcciones:</p>
                <MapContainer center={[-33.45, -70.65]} zoom={12} style={{ height: "750px", width: "100%", position: "relative" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {locations.map((location) => (
                        <>
                            <Marker
                                key={location.id}
                                position={[location.latitude, location.longitude]}
                                icon={customIcon}
                            >
                                <Popup>
                                    <strong>{location.name}</strong>
                                    <br />
                                    {location.address}
                                </Popup>
                            </Marker>
                            <Marker
                        key={`label-${location.id}`}
                        position={[location.latitude - 0.001, location.longitude]} // ajuste para que aparezca debajo la sede
                        icon={createLabelIcon( `${location.id}`)}
                    />
                        </>
                    ))}
                    <ResetViewButton />
                </MapContainer>
            </div>
        </div>
    );
};



export default Locations;
