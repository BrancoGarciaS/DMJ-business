package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Category;
import com.example.delivery_dmj.Entities.Product;
import com.example.delivery_dmj.Repositories.CategoryRepository;
import com.example.delivery_dmj.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Product saveProducts(Product product) {
        Set<Category> categories = new HashSet<>();
        for (Category category : product.getCategories()) {
            Category categoryFromDb = categoryRepository.findById(category.getId_category()).orElse(null);
            if (categoryFromDb != null) {
                categories.add(categoryFromDb);
            }
        }
        product.setPrice(product.getPrice() - product.getPrice() * (product.getDiscount()/100));
        product.setCategories(categories);
        return productRepository.save(product);
    }

    public ArrayList<Product> getProducts() {
        return (ArrayList<Product>) productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }


}
