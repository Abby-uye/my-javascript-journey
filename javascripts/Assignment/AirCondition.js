class AirCondition{
    constructor(isTurnedOnSwitch,temperature) {
        this.isTurnedOnSwitch = isTurnedOnSwitch;
        temperature = 16
        this.temperature = temperature ;
    }

    turnOnSwitch(){
        return this.isTurnedOnSwitch = true
    }
    turnOfSwitch(){
        return this.isTurnedOnSwitch = false
    }
    increaseTemperature(){
        if(this.temperature === 30){
            return this.temperature;
        }else return this.temperature++;
    }
    changeTemperature(temperatureLevel){
        if ( temperatureLevel < 16 || temperatureLevel > 30){
            return this.temperature
        } else return this.temperature = temperatureLevel
    }
    decreaseTemperature(){
        if(this.temperature === 16){
            return this.temperature;
        }else return this.temperature--;
    }

}

module.exports = {AirCondition}