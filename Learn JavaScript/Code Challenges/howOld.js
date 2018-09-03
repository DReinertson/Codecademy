// Write your function here:

function howOld(age, year){
  let diffYear = year - 2018;
  let born = 2018 - age;
  //If year is in the future.
  if (diffYear > 0){
    console.log('year in the future');
    let newAge = age + (diffYear);
    return "You will be " + newAge + " in the year " + year;
  }
  //If year is in the past
  else{
    console.log('year in the past');
    let newAge = age + diffYear;
    //If year is in the past but after person was born
    if (year > born){
      return "You were " + newAge + " in the year " + year;
    }
    //If year is in the past but before the person was born.
    else {
      return "The year " + year + " was " + Math.abs(newAge) + " years before you were born";
    }
  }
}



// Once your function is written, write function calls to test your code!

console.log(howOld(28, 1970));
