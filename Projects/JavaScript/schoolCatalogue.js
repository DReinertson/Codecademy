class School{
  constructor(name, numberOfStudents, level){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(students){
    if(typeof students === 'Number'){
    	this._numberOfStudents = students;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    let randomNumber = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomNumber];
  }
}

class Primary extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, numberOfStudents);
    this._level = 'primary';    
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School{
  constructor(name, numberOfStudents){
    super(name, numberOfStudents);
    this._level = 'middle';
  }
}

class High extends School{
  constructor(name, numberOfStudents, sportsTeam){
    super(name, numberOfStudents);
    this._level = 'high';
    this._sportsTeam = sportsTeam;
  }
  get sportsTeams(){
    return this._sportsTeam;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);
console.log(alSmith.sportsTeams);
