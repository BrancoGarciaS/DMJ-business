import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPencil, faStarHalf, faStarHalfAlt, faUserCircle, faUserAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';




const R = () => {

    const username = "uwu"
    const id_user = 1
    localStorage.setItem("username", username);
    localStorage.setItem("id_user", id_user);

    const product =
    {
        id_product: 3,
        product_name: "Pastel 3 leches",
        description: "Encantador y rico pastel 3 leches",
        original_price: 10000,
        price: 8000,
        discount: 20,
        star_rating: 5,
        reviews: 100,
        categories: [
            {
                id_category: 2,
                name: "amor",
                additional_cost: 2500.0,
            },
            {
                id_category: 1,
                name: "helado",
                additional_cost: 1000.0,
            },
        ],
    }

    

    const reviews = [
        {
            id_rating: 1, stars: 3, comment: "Muy buen producto, que rico",
            user: {
                id_user: 1, username: "DMJ_1", color: "#32FF57", name: "DMJ Maria"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
        {
            id_rating: 2, stars: 1, gender: "femenino", comment: "muy bonito", 
            user: {
                id_user: 4, username: "vale", color: "#FFF232", name:"Valeria García"
            },
            likes: 0, created_at: "2025-01-06T15:45:01.297238", updated_at: null
        },
        {
            id_rating: 3, stars: 1, comment: "Muy buen producto, que rico",
            user: {
                id_user: 3, username: "DMJ_3", color: "#32FF57", name: "Gabriela Soto"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
        {
            id_rating: 4, stars: 4, comment: "Muy buen producto, que rico", 
            user: {
                id_user: 4, username: "DMJ_4", color: "#32A8FF", name: "Julia Paredes"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
    ]

    


    const userReview = reviews.find(review => review.user.username === username);
    const getUserReview = () => userReview || null;

    const [activeTab, setActiveTab] = useState("reviews"); // para ver qué panel mostrar

    // Calcular la distribución de estrellas y el promedio
    const totalReviews = reviews.length;
    const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalStars = 0;

    reviews.forEach(review => {
        ratingsCount[review.stars] += 1;
        totalStars += review.stars; // Sumar las estrellas para el promedio
    });

    const averageRating = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : 0;

    const renderStars = (average) => {
        const fullStars = Math.floor(average);
        const hasHalfStar = average % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
        const stars = [];
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-indigo-600 mr-2" />);
        }
        
        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-indigo-600 mr-2" />);
        }
    
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={`empty-${i}`}
                    icon= {faStarRegular}
                    className="text-gray-300 mr-2"
                />
            );
        }
        
        return stars;
    };


     // Estados con valores iniciales según si hay reseña o no
    const [stars, setStars] = useState(userReview ? userReview.stars : 1);
    const [hoveredStars, setHoveredStars] = useState(0);
    const [comment, setComment] = useState(userReview ? userReview.comment : "");
    const [focused, setFocused] = useState(false);
    // Para enviar reseña


    const handleStarClick = (index) => {
        setStars(index);
      };
    
      const handleStarHover = (index) => {
        setHoveredStars(index);
      };
    
      const handleStarLeave = () => {
        setHoveredStars(0);
      };
    
      const handleSubmit = () => {
        const reviewData = {
          stars: stars,
          comment: comment.trim(),
          user: {
            id_user: id_user,
          },
        };
    
        console.log("Reseña enviada:", reviewData);
        // Conectar con backend


        setActiveTab("reviews");
      };
    
    

    const renderContent = () => {
        switch (activeTab) {
            
            case "reviews":
                return(
                    <div className="mx-auto bg-white shadow-lg rounded-lg my-8 px-4 py-4 w-1/3 ">
                        <div className="mb-1 tracking-wide px-4 py-4">
                            <h2 className="text-gray-800 text-xl font-semibold mt-1">{totalReviews} Opiniones para "{product.product_name}"</h2>

                            <div className="flex items-center mb-4">
                                {/* Promedio de estrellas con íconos de estrellas rellenas */}
                                <div className="flex flex-col items-center mb-4">
                                    <div className="text-4xl font-bold text-indigo-600">{averageRating}</div>
                                    <div className="flex text-sm">{renderStars(parseFloat(averageRating))}</div>
                                </div>


                                {/* Mostrar las barras de estrellas y porcentajes */}
                                <div className="w-full border-b -mx-8 px-8 pb-3">
                                    {[5, 4, 3, 2, 1].map(star => {
                                        const count = ratingsCount[star]; // Cantidad de opiniones con esta estrella
                                        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0; // Porcentaje calculado

                                        return (
                                            <div className="flex items-center mt-1 pl-10" key={star}>
                                                <div className="w-1/4 flex flex-row-reverse text-indigo-500 tracking-tighter">
                                                    {Array.from({ length: star }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStar} className="mr-2" />
                                                    ))}
                                                </div>
                                                <div className="w-1/4 ">
                                                    <div className="bg-gray-300 w-full rounded-lg h-2">
                                                        <div
                                                            className="bg-indigo-600 rounded-lg h-2"
                                                            style={{ width: `${percentage}%` }} // Ajusta el ancho dinámicamente
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="w-1/4 text-gray-700 pl-3">
                                                    <span className="text-sm">{percentage.toFixed(0)}%</span>
                                                </div>
                                                <div className="w-1/4 text-gray-700">
                                                    <span className="text-sm">({count} opiniones)</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                        
                        <div className="max-h-80 overflow-y-auto mt-2 mb-2  border rounded-lg bg-gray-100 shadow-md"> 
                            {reviews.map((review) => (
                            <div key={review.id_rating} className="relative flex  my-2 mx-2 flex-col border rounded-lg p-3 bg-white shadow-md">
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faUserCircle} className="text-4xl" style={{ color: review.user.color }} />
                                    <div className="flex flex-col w-full">
                                    <div className="flex justify-between items-center">
                                        <h5 className="text-base font-sans font-semibold text-gray-900">{review.user.name}</h5>
                                        <div className="flex text-sm text-yellow-500">
                                        {Array.from({ length: review.stars }).map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
                                        ))}
                                        </div>
                                    </div>
                                    <p className="text-sm font-sans text-gray-500">@{review.user.username}</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-800">{review.comment}</p>

                                <div className="border-t border-gray-300 my-3"></div>
                                <div className="flex text-gray-500 justify-between items-center font-sans text-xs">
                                    <div class= "text-left">{review.user.username === username ? (
                                        <div className='text-left'>
                                            <button 
                                                onClick={() => setActiveTab("my_review")} 
                                                className="group relative ml-3 text-white rounded transform hover:scale-105 transition-all duration-200 mr-2">
                                                <FontAwesomeIcon icon={faPencil} className="mr-1 text-gray-500 group-hover:text-gray-700" />

                                                {/* Descripción visible solo al pasar el mouse */}
                                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                                                    Editar Reseña
                                                </span>
                                            </button>

                                            <button 
                                                onClick={() => setActiveTab("my_review")} 
                                                className="group relative ml-2 text-white rounded transform hover:scale-105 transition-all duration-200">
                                                <FontAwesomeIcon icon={faTrash} className="mr-1 text-gray-500 group-hover:text-gray-700" />
                                                
                                                {/* Descripción visible solo al pasar el mouse */}
                                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap group-hover:opacity-100 transition-opacity duration-200">
                                                    Eliminar Reseña
                                                </span>
                                            </button>

                                                
                                        </div>): null}
                                    </div>
                                    <div className="text-right">
                                        {/* Mostrar la fecha y hora completas */}
                                        {new Date(review.updated_at || review.created_at).toLocaleString('es-ES', { 
                                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                                        hour: '2-digit', minute: '2-digit' 
                                        })} 
                                        {review.updated_at && review.updated_at !== review.created_at ? " (editado)" : ""}
                                    </div>
                                </div>      
                            </div>
                            ))}
                        </div>
                        <div className="w-full p-4">
                            {userReview ? (
                                <div>
                                    <p className="text-gray-800 font-bold text-lg mb-2">Edita tu reseña</p>
                                    <p className="text-gray-700 font-sans text-sm py-1 mb-2">
                                        Anteriormente habías dado tu opinión sobre este producto, puedes editarla o eliminarla si deseas.
                                    </p>
                                    <div class="flex justify-between items-center border-t border-gray-100 px-5 py-4  font-bold">
                                        <div class="text-left text-lg">
                                            <button  className="px-4 py-2 bg-red-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                                                Eliminar Reseña
                                            </button>
                                        </div>
                                        <div class="text-right text-lg">
                                            <button onClick={() => setActiveTab("my_review")} className="px-4 py-2 bg-blue-500 text-white rounded transform hover:scale-105 transition-all duration-200">
                                                Editar Reseña
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-gray-800 font-bold text-lg mb-2">Escribe tu reseña</p>
                                    <p className="text-gray-700 font-sans text-sm py-1 mb-2">
                                        Comparte tu opinión sobre este producto <strong>({product.product_name})</strong>.
                                    </p>
                                    <button
                                        className="bg-gray-100 border border-gray-400 px-3 py-1 rounded text-gray-800 mt-2"
                                        onClick={() => setActiveTab("my_review")}
                                    >
                                        <FontAwesomeIcon icon={faPencil} className="mr-1" /> Escribir una reseña
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )

                case 'my_review': // para dar la opinión del usuario
                return(
                    <div>
                        <div class="py-3 w-1/3 sm:mx-auto">
                            <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                            <div class="px-8 py-5">
                                <h2 className="text-gray-800 text-xl font-semibold mt-1">¡Tu opinión nos importa!</h2>
                            </div>
                            <div class="bg-gray-100 w-full flex flex-col items-center">
                                <div class="flex flex-col items-center py-6 space-y-3">
                                <span class=" text-gray-800">¿Cómo evaluarías el producto "{product.product_name}"?</span>
                                    <div className="flex space-x-2">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FontAwesomeIcon
                                            key={i}
                                            icon={i < (hoveredStars || stars) ? faStar : faStarRegular}
                                            className="text-yellow-500 text-2xl cursor-pointer"
                                            onMouseEnter={() => handleStarHover(i + 1)}
                                            onMouseLeave={handleStarLeave}
                                            onClick={() => handleStarClick(i + 1)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-3/4 flex flex-col">
                                    <textarea
                                    rows="3"
                                    className="p-4 text-gray-700 rounded-xl resize-none shadow-md focus:outline-none"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(comment.length > 0)}
                                    placeholder={focused ? "" : "Escribe un comentario sobre este producto si deseas"}
                                    />
                                    
                                    <button
                                    className="py-3 my-4 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                                    onClick={handleSubmit}
                                    disabled={stars === 0}
                                    >
                                        {getUserReview() ? (<p>Editar Reseña</p>): (<p>Enviar Reseña</p>)}
                                    </button>
                                </div>

                            </div>
                            <div class="h-20 flex items-center justify-center">
                                <button class="text-gray-600" onClick={() => setActiveTab('reviews')}>Tal vez después</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return(
        <div>
            {renderContent()}
        </div>
    )
}

export default R;