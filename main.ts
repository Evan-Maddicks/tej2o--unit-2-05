/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Sep 2024
 * This program will show the current temperature
*/

let temperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    let temperature = input.temperature()

    temperature = temperature + 273.15
    temperature = Math.round(temperature)

basic.showString('The current temperature is:' + temperature.toString() + ' K')

basic.showIcon(IconNames.Happy)
})
