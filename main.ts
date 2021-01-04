while (true) {
    if (input.lightLevel() > 8) {
        light.setAll(light.rgb(1, 50, 32))
    }
    
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.setAll(light.rgb(255, 0, 255))
    }
    
}
