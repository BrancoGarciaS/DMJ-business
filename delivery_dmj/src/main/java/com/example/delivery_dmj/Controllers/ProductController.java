package com.example.delivery_dmj.Controllers;

import com.example.delivery_dmj.Entities.Location;
import com.example.delivery_dmj.Entities.Product;
import com.example.delivery_dmj.Services.LocationService;
import com.example.delivery_dmj.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ArrayList<Product> getProducts() {
        return productService.getProducts();
    }

    @PostMapping
    public Product postProducts(@RequestBody Product product){
        return productService.saveProducts(product);
    }
}
