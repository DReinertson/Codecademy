// Write your code here:

const dogFactory = (name, breed, weight) => {
 return {
   get name(){
     return this._name;
   },
   set name(word){
     this._name = word;
   },
   _name: name,
   
   get breed(){
     return this._breed;
   },
   set breed(word){
     this._breed = word
   },
   _breed: breed,
   
   get weight(){
     return this._weight;
   },
   set weight(lbs){
     this._weight = lbs;
   },
   _weight: weight,
   
   bark(){
     return ('ruff! ruff!');
   },
   eatTooManyTreats(){
     return this.weight +=1;
   }
 }
}
