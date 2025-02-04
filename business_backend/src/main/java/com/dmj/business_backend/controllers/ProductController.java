package com.dmj.business_backend.controllers;

import com.dmj.business_backend.entities.ProductEntity;
import com.dmj.business_backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductEntity> getProducts() {
        return productService.getAllProducts();
    }
}
