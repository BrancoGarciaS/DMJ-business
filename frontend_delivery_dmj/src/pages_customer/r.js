import React, { useState, useEffect } from 'react';

const R = () => {

    const username = "xdd"
    localStorage.setItem("username", username);

    

    const reviews = [
        {
            id_rating: 1, stars: 5, comment: "Muy buen producto, que rico",
            user: {
                id_user: 1, username: "DMJ_1", color: "#32FF57", name: "DMJ Maria"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
        {
            id_rating: 2, stars: 5, gender: "femenino", comment: "muy bonito", 
            user: {
                id_user: 4, username: "vale", color: "#FFF232", name:"Valeria García"
            },
            likes: 0, created_at: "2025-02-06T15:45:01.297238", updated_at: "2025-02-06T15:45:26.541062"
        },
        {
            id_rating: 3, stars: 5, comment: "Muy buen producto, que rico",
            user: {
                id_user: 3, username: "DMJ_3", color: "#32FF57", name: "Gabriela Soto"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
        {
            id_rating: 4, stars: 3, comment: "Muy buen producto, que rico", 
            user: {
                id_user: 4, username: "DMJ_4", color: "#32A8FF", name: "Julia Paredes"
            },
            created_at: "2025-02-06T15:18:44.170172", updated_at: "2025-02-06T15:19:55.806108"
        },
    ]


    const userReview = reviews.find(review => review.user.username === username);

    const getUserReview = () => userReview || null;

    const [activeTab, setActiveTab] = useState("reviews"); // para ver que panel mostrar

    // Calcular la distribución de estrellas
    const totalReviews = reviews.length;
    const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews.forEach(review => {
        ratingsCount[review.stars] += 1;
    });

    const renderContent = () => {
        switch (activeTab) {
            case 'my_review': // para dar la opinión del usuario
                return(
                    <div>
                        <div class="py-3 sm:max-w-xl sm:mx-auto">
                            <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                            <div class="px-12 py-5">
                                <h2 class="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
                            </div>
                            <div class="bg-gray-200 w-full flex flex-col items-center">
                                <div class="flex flex-col items-center py-6 space-y-3">
                                <span class="text-lg text-gray-800">How was quality of the call?</span>
                                <div class="flex space-x-3">
                                    <svg class="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg class="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                </div>
                                <div class="w-3/4 flex flex-col">
                                <textarea rows="3" class="p-4 text-gray-500 rounded-xl resize-none">Leave a message, if you want</textarea>
                                <button class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">Rate now</button>
                                </div>
                            </div>
                            <div class="h-20 flex items-center justify-center">
                                <button href="#" class="text-gray-600" onClick={() => setActiveTab('reviews')}>Maybe later</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            case "reviews":
                return(
                    <div className="mx-auto bg-white shadow-lg rounded-lg my-8 px-4 py-4 w-1/3">
                        <div className="mb-1 tracking-wide px-4 py-4">
                            <h2 className="text-gray-800 font-semibold mt-1">{totalReviews} Opiniones</h2>
                            <div className="border-b -mx-8 px-8 pb-3">
                                {[5, 4, 3, 2, 1].map(star => {
                                    const count = ratingsCount[star]; // Cantidad de opiniones con esta estrella
                                    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0; // Porcentaje calculado

                                    return (
                                        <div className="flex items-center mt-1" key={star}>
                                            <div className="w-1/5 text-indigo-500 tracking-tighter">
                                                <span>{star} estrellas</span>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="bg-gray-300 w-full rounded-lg h-2">
                                                    <div
                                                        className="bg-indigo-600 rounded-lg h-2"
                                                        style={{ width: `${percentage}%` }} // Ajusta el ancho dinámicamente
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="w-1/2 text-gray-700 pl-3">
                                                <span className="text-sm">{percentage.toFixed(0)}% ({count} opiniones)</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="w-full px-4">
                            {userReview ? (
                                <div>
                                    <h1>{userReview.user.username}</h1>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-medium tracking-tight">Escribe tu reseña</h3>
                                    <p className="text-gray-700 text-sm py-1">
                                        Comparte tu opinión sobre este producto.
                                    </p>
                                    <button
                                        className="bg-gray-100 border border-gray-400 px-3 py-1 rounded text-gray-800 mt-2"
                                        onClick={() => setActiveTab("my_review")}
                                    >
                                        Escribir una reseña
                                    </button>
                                </div>
                            )}
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