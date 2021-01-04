while True: 
    if input.light_level() > 8:
        light.set_all(light.rgb(1, 50, 32))
    if input.light_level() < 6:
        light.set_all(light.rgb(255,255,0))
    else:
        light.set_all(light.rgb(255,0,255))
   