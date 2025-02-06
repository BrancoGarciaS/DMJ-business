package com.example.delivery_dmj.Controllers;

import com.example.delivery_dmj.Entities.Category;
import com.example.delivery_dmj.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getCategories();
    }

    @PostMapping
    public Category postCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }
}
