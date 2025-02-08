import React from 'react';
import homeImage from '../images/home.jpeg';
import humitasImage from '../images/humitas.jpg';
import pastelChocloImage from '../images/pastelchoclo.jpg';
import pebreImage from '../images/pebre.jpg';
import picanteGuata from '../images/picanteguata.jpg'
import sopaipillas from '../images/sopaipillas.jpg'
import terremoto from '../images/terremoto.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const images = [
    { src: humitasImage, alt: 'Humitas' },
    { src: pastelChocloImage, alt: 'Pastel de Choclo' },
    { src: pebreImage, alt: 'Pebre' },
    { src: picanteGuata, alt: 'Picante Guata' },
    { src: sopaipillas, alt: 'Sopaipillas' },
    { src: terremoto, alt: 'Terremoto' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: true,  // Habilita las flechas de navegación
    prevArrow: (
        <button className="slick-prev text-3xl text-black absolute left-0 z-10">
          ‹
        </button>
      ),
      nextArrow: (
        <button className="slick-next text-3xl text-black absolute right-0 z-10">
          ›
        </button>
      ),
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Columna izquierda - Texto */}
      <div className="flex flex-col justify-center items-start p-10 md:w-1/2 bg-white">
        <h1 className="font-slab font-bold text-4xl mb-4">RECORRIENDO CHILE</h1>
        <hr className="w-48 border-t-4 border-black mb-4" />
        <p className="text-lg leading-relaxed">
          Descubre la esencia de Chile a través de sus sabores más auténticos. Desde el norte árido con su exótica gastronomía andina,
          hasta el sur lluvioso con sus platos llenos de historia y tradición, te invitamos a recorrer cada rincón de nuestro país a través de su cocina.
        </p>

        {/* Carrusel */}
        <div className="mt-6 w-full p-5">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover max-w-full rounded-lg shadow-md"  // Tamaño fijo para las imágenes
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Línea separadora centrada */}
        <div className="my-6 flex justify-center w-full py-4">
          <hr className="border-t-2 border-gray-600" style={{ width: '30rem' }}/>
        </div>

        <p className="text-lg leading-relaxed">En esta página encontrarás las recetas más representativas de cada región, sus historias, y los secretos que hacen de la comida 
            chilena un patrimonio lleno de amor y sabor.</p>
            
        <p className="text-lg leading-relaxed py-4">Prepárate para degustar la riqueza cultural de Chile con platos como el pastel de choclo, el curanto en hoyo, las empanadas de pino y mucho más.</p>
        <p className="text-lg">
          Para obtener más información sobre la increíble cultura Chilena, <a href="/hola" className="text-red-500 hover:text-blue-700 underline">presione aquí</a>.
        </p>

      </div>

      {/* Columna derecha - Imagen */}
      <div className="md:w-1/2 h-full">
        <img
          src={homeImage}
          alt="Recorriendo Chile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
