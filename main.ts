let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
    for (let index_2 = 0; index_2 <= -16; index_2++) {
        let index = 0
        angle = index * -10 - 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
})
