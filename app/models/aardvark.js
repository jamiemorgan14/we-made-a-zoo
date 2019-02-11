export default class Aardvark {
  constructor(name, legs, favFood) {
    this.name = name;
    this.legs = legs;
    this.favFood = favFood;
  };
  eat(food) {
    if (food.toLowerCase() == this.favFood) {
      console.log(`I love ${this.favFood}!`)
    } else {
      console.log('yuck');
    }
  }
}