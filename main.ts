input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 70)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 70)
    basic.pause(1000)
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
	
})
