package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Rating;
import com.example.delivery_dmj.Entities.User;
import com.example.delivery_dmj.Repositories.RatingRepository;
import com.example.delivery_dmj.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RatingService {
    @Autowired
    RatingRepository ratingRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Optional<Rating> getRatingById(Long id) {
        return ratingRepository.findById(id);
    }

    public Rating saveRating(Rating rating) {
        // Verifica si el usuario existe
        Optional<User> userOptional = userRepository.findById(rating.getUser().getId_user());

        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found with ID: " + rating.getUser().getId_user());
        }

        // Asigna el usuario encontrado a la valoración
        rating.setUser(userOptional.get());
        rating.setUsername(rating.getUser().getUsername());

        // Validación para evitar que un mismo usuario comente varias veces
        Optional<Rating> existingRating = ratingRepository.findRatingByUsername(rating.getUsername());
        if (existingRating.isPresent()) {
            Rating r_username = existingRating.get();
            r_username.setComment(rating.getComment());
            r_username.setStars(rating.getStars());
            return updateRating(r_username);
        }

        rating.setLikes(0); // Inicializa los "me gusta" en 0
        rating.setCreated_at(LocalDateTime.now()); // Fecha de creación automática

        return ratingRepository.save(rating);
    }

    public Rating updateRating(Rating rating) {
        if(rating.getId_rating() != null){
            rating.setUpdated_at(LocalDateTime.now()); // se rellena automaticamente con la fecha actual de actualización
        }
        return ratingRepository.save(rating);
    }

    public void deleteRating(Long id) {
        ratingRepository.deleteById(id);
    }
}
