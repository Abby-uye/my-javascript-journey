const{characterFrequency} = require("./CharacterFrequency");
test("test that can get the frequency of of letters in a string ",()=>{
    let word = "semicolon.africa";
    let actual = characterFrequency(word);
    let theExpected = {"s":1,"e":1,"m":1,"i":2,"c":2,"o":2,"l":1,"n":1,".":1,"a":2,"f":1,"r":1}
    expect(actual).toEqual(theExpected);
})