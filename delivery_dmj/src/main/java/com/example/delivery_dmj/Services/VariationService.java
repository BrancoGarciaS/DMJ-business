package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Variation;
import com.example.delivery_dmj.Repositories.VariationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VariationService {
    @Autowired
    private VariationRepository variationRepository;

    public List<Variation> getAllVariations() {
        return variationRepository.findAll();
    }

    public Optional<Variation> getVariationById(Long id) {
        return variationRepository.findById(id);
    }

    public Variation saveVariation(Variation variation) {
        return variationRepository.save(variation);
    }
}
