const humus = function(factor){
    const ingredient = function (amount,unit,name){
        let ingredientAmount = factor*amount;
        if(ingredient>1){
            unit +="s"
        }
        return(`${ingredientAmount} ${unit} of ${name}`)
    }
    return ingredient(200,5,"Rice")
}
console.log(humus(5))
