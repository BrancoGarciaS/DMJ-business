package com.example.delivery_dmj.Controllers;

import com.example.delivery_dmj.Entities.Rating;
import com.example.delivery_dmj.Services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rating")
public class RatingController {
    @Autowired
    RatingService ratingService;

    @GetMapping
    List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @GetMapping("/{id}")
    Optional<Rating> getRatingById(@PathVariable Long id){
        return ratingService.getRatingById(id);
    }

    @PostMapping
    Rating createRating(@RequestBody Rating rating) {
        return ratingService.saveRating(rating);
    }

    @PutMapping
    Rating updateRating(@RequestBody Rating rating) {
        return ratingService.updateRating(rating);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteRating(@PathVariable Long id) {
        ratingService.deleteRating(id);
        return ResponseEntity.ok().build();
    }
}
