package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Order;
import com.example.delivery_dmj.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Order saveOrder(Order order) {
        order.setState("Pendiente");
        order.setOrder_date(LocalDateTime.now());
        float t = order.getProducts_cost() + order.getShipping_cost();
        order.setTotal(t);
        return orderRepository.save(order);
    }

    public Order changeState(Order order) {
        if(order.getState().equals("Finalizado")){
            order.setDelivery_date(LocalDateTime.now()); // se completa la orden
        }
        // Si el estado no es finalizado, y la orden tiene fecha de entrega, se le quita
        if(!Objects.equals(order.getState(), "Finalizado") && order.getDelivery_date() != null){
            order.setDelivery_date(null);
        }
        return orderRepository.save(order);
    }

    public void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }
}
