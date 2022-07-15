let fruit={
    fruitsPriceList:{"orange":30,"banana":40,"pineapple":70},
    calculateFruitCost: function(name,quantity){
        return `${quantity} ${name} for KES ${this.fruitsPriceList[name] * quantity}`
    }
}
console.log(fruit.calculateFruitCost("pineapple",2))


