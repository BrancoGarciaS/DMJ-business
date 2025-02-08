package com.example.delivery_dmj.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    // Entidad para los productos de la tienda
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_product; // atributo llave

    private String product_name;
    private String description;
    private float price;
    private float original_price;

    private float star_rating;

    // Relación muchos a muchos con Category
    @ManyToMany
    @JoinTable(
            name = "product_category", // Nombre de la tabla intermedia
            joinColumns = @JoinColumn(name = "id_product"), // Columna que referencia a Product
            inverseJoinColumns = @JoinColumn(name = "id_category") // Columna que referencia a Category
    )
    private Set<Category> categories; // Un Set de categorías, puedes usar List si prefieres mantener el orden

    private float discount; // porcentaje de descuento del producto
}
