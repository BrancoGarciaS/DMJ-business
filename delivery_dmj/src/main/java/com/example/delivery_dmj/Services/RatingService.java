package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Rating;
import com.example.delivery_dmj.Repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RatingService {
    @Autowired
    RatingRepository ratingRepository;

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Optional<Rating> getRatingById(Long id) {
        return ratingRepository.findById(id);
    }

    public Rating saveRating(Rating rating) {
        rating.setLikes(0); // inicialmente el comentario tiene 0 likes
        rating.setCreated_at(LocalDateTime.now()); // se rellena automaticamente con la fecha actual de creación
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
