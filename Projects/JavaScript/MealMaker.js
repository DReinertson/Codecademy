let menu = {
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      name : dishName,
      price : dishPrice
    };
    
    if(courseName === 'appetizers'){
      this._courses.appetizers = dish;
    }
    
    else if (courseName === 'mains'){
      this._courses.mains = dish;
    }
    else if (courseName === 'desserts'){
      this._courses.desserts = dish;
    }
  }, 
  
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let ranNum = Math.floor(Math.random() * dishes.length);
    return dishes[ranNum];
  },
  
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let total = appetizer.price + main.price + dessert.price;
    return (`Your meal consists of ${appetizer.name} as your appetizer, ${main.name} as your main course, and ${dessert.name} for dessert. The total price will be $${total}`);
  },
  
  get _courses(){
    return {
      appetizers: this._courses.appetizers,
      mains : this._courses.mains,
      desserts : this._courses.desserts
    }
  },
  
  _courses : {
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(app){
      this._appetizers.push(app);
    },
    _appetizers: [],
    
    
    get mains(){
      return this._mains;
    },
    set mains(food){
      this._mains.push(food);
    },
    _mains: [],
    
    
    get desserts(){
      return this._desserts;
    },
    set desserts(zert){
      this._desserts.push(zert);
    },    
    _desserts: []
  }
  
};

menu.addDishToCourse('appetizers', 'onion rings', 5.50);
menu.addDishToCourse('appetizers', 'nachos', 7.50);
menu.addDishToCourse('appetizers', 'wings', 6.50);
menu.addDishToCourse('mains', 'steak', 15.00);
menu.addDishToCourse('mains', 'lobster', 18.00);
menu.addDishToCourse('mains', 'pasta', 8.00);
menu.addDishToCourse('desserts', 'cheesecake', 8.00);
menu.addDishToCourse('desserts', 'cookie', 3.00);
menu.addDishToCourse('desserts', 'doughnut', 1.00);

console.log(menu._courses);
let meal = menu.generateRandomMeal();
console.log(meal);
