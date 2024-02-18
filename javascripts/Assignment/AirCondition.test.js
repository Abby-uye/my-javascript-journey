const {AirCondition} = require("./AirCondition");


test("Test that can turn on ac",()=>{
    const airCondition = new AirCondition();
   let theSwitch = airCondition.turnOnSwitch();
    expect(theSwitch).toBe(true)

})

test("Test that can turn off ac",()=>{
    const airCondition = new AirCondition();
    let theSwitch = airCondition.turnOfSwitch();
    expect(theSwitch).toBe(false)

})

test("Test that  change temperature",()=>{
    const airCondition = new AirCondition();
    let temperature = airCondition.changeTemperature(29);
    expect(temperature).toBe(29)

})

test("Test that  increase temperature",()=>{
    const airCondition = new AirCondition();
    let temperature = airCondition.increaseTemperature();
    expect(temperature).toBe(17)

})

test("Test that can decrease temperature ",()=>{
    const airCondition = new AirCondition();
    airCondition.changeTemperature(25);
    let newTemperature = airCondition.decreaseTemperature()
    expect(newTemperature).toBe(24)

})

test("Test that cannot change temperature to less than 16 ",()=>{
    const airCondition = new AirCondition();
   let newTemperature= airCondition.changeTemperature(15);
    expect(newTemperature).toBe(16)

})
test("Test that cannot change temperature to greater than 30 ",()=>{
    const airCondition = new AirCondition();
    airCondition.increaseTemperature()
    airCondition.increaseTemperature()
    airCondition.increaseTemperature()
    airCondition.increaseTemperature()
    airCondition.decreaseTemperature()
    let newTemperature= airCondition.changeTemperature(35);
    expect(newTemperature).toBe(19)

})