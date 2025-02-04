package com.dmj.business_backend.services;

import com.dmj.business_backend.entities.ProductEntity;
import com.dmj.business_backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Para GET
    public List<ProductEntity> getAllProducts() {
        return productRepository.findAll();
    }

    public ProductEntity getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // Para POST

    public ProductEntity createProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    // Para PUT

    public ProductEntity updateProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    // Para DELETE

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }






}
