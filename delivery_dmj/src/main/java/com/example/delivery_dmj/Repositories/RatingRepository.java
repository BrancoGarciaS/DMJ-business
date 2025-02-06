package com.example.delivery_dmj.Repositories;

import com.example.delivery_dmj.Entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    Optional<Rating> findRatingByUsername(String username);
}
