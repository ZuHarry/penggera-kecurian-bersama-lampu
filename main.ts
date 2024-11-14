input.onButtonPressed(Button.A, function () {
    distance = 18 - makerbit.getUltrasonicDistance(DistanceUnit.CM)
    basic.showNumber(distance)
    if (distance < 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
    basic.pause(1000)
})
let distance = 0
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P0, DigitalPin.P1)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.showIcon(IconNames.Heart)
