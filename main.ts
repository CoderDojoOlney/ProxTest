let distance = 0
let distanceb = 0
let distancea = 0
basic.forever(() => {
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    distanceb = pins.pulseIn(DigitalPin.P8, PulseValue.High) / 58
    basic.pause(100)
})
basic.forever(() => {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distancea = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
    basic.pause(100)
})
basic.forever(() => {
    if (distancea > distanceb) {
        distance = distanceb
    } else {
        distance = distancea
    }
    led.plotBarGraph(
        distance,
        0
    )
})
distancea = 0
distanceb = 0
