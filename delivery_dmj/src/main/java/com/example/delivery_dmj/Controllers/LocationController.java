package com.example.delivery_dmj.Controllers;

import com.example.delivery_dmj.Entities.Location;
import com.example.delivery_dmj.Services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/locations")
public class LocationController {
    @Autowired
    LocationService locationService;

    @GetMapping
    @ResponseBody
    public ArrayList<Location> getLocations() {
        return locationService.getLocations();
    }

    @PostMapping
    @ResponseBody
    public Location postLocations(@RequestBody Location location){
        return locationService.saveLocations(location);
    }
}
