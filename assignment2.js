// class KioskCalc{
  // constructor(fruit,quantity){
      // this.fruit=fruit
      // this.quantity=quantity
      // totalcost=function(total){
          // return `${KioskCalc.quantity} ${KioskCalc.fruit} for KES ${totalcost}`
      // }
  // }
// }
  // var kioskCalc=new KioskCalc("orange",2);
  // console.log(kioskCalc.totalcost(30.0));
// 

class KioskCalc{
  constructor(fruit,quantity){
    this.fruit=fruit
    this.quantity=quantity
    this.fruitsPriceList={"oranges":30,"mangoes":15,"avocados":40}
    this.getTotalCost=function(){
        return `${this.quantity} ${this.fruit} for KES ${this.quantity*this.fruitsPriceList[this.fruit]}`
    }
  }
}

var kioskCalc = new KioskCalc("mangoes",2);
console.log(kioskCalc.getTotalCost())