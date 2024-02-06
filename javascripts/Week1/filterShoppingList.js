let shoppingList = [
    {name:"Apple",
    category:"friuts",
    isHealthy:true
},

{name:"Potato chips",
    category:"snacks",
    isHealthy:false
},

{name:"carrots",
    category:"vegetables",
    isHealthy:true
},

{name:"Chocolate Bars",
    category:"Sweets",
    isHealthy:false
},

{name:"Greek Youghurt",
    category:"Diary",
    isHealthy:true
},
{name:"Soda",
    category:"Beverage",
    isHealthy:false
}

]
 let healthyList = shoppingList.filter((element)=>element.isHealthy===true);
 healthyList.forEach((item)=>console.log(item.name))
