function armUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function armDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
joystickbit.initJoystickBit()
radio.setGroup(30)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
