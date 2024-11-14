distance = 0
makerbit.connect_ultrasonic_distance_sensor(DigitalPin.P0, DigitalPin.P1)
pins.digital_write_pin(DigitalPin.P12, 0)
pins.digital_write_pin(DigitalPin.P2, 0)
basic.show_icon(IconNames.HEART)

def on_forever():
    global distance
    distance = makerbit.get_ultrasonic_distance(DistanceUnit.CM)
    basic.show_number(distance)
    if distance < 10:
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        pins.digital_write_pin(DigitalPin.P12, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
    else:
        pins.digital_write_pin(DigitalPin.P12, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(1000)
basic.forever(on_forever)
