package com.example.delivery_dmj.Controllers;

import com.example.delivery_dmj.Entities.Variation;
import com.example.delivery_dmj.Services.VariationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/variations")
public class VariationController {
    @Autowired
    private VariationService variationService;

    @GetMapping
    public List<Variation> getAllVariations() {
        return variationService.getAllVariations();
    }

    @GetMapping("/{id}")
    public Optional<Variation> getVariationById(@PathVariable Long id) {
        return variationService.getVariationById(id);
    }

    @PostMapping
    public Variation createVariation(@RequestBody Variation variation) {
        return variationService.saveVariation(variation);
    }
}
