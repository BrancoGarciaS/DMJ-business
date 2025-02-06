package com.example.delivery_dmj.Services;

import com.example.delivery_dmj.Entities.Location;
import com.example.delivery_dmj.Repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LocationService {
    @Autowired
    LocationRepository locationRepository;

    public ArrayList<Location> getLocations() {
        return (ArrayList<Location>) locationRepository.findAll();
    }

    public Location saveLocations(Location usuario) {
        return locationRepository.save(usuario);
    }
}
