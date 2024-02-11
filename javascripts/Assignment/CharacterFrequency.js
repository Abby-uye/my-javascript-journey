function characterFrequency(word) {
    let wordPair = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (wordPair[letter] === undefined) {
            wordPair[letter] = 1;
        } else {
            wordPair[letter]++;
        }
    }

    return wordPair;
}
module.exports={characterFrequency};
// let theWord = "semicolo.africa";
// let theDictionary = characterFrequency(theWord);
//console.log(JSON.stringify(theDictionary));