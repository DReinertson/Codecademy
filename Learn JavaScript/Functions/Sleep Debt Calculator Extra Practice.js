const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 10;
      break;
    case 'Sunday':
      return 3;
      break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = hours =>{
  return hours *= 7;
}

const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours){
    console.log("You got the perfect amount of sleep");
  }
  else if (actualSleepHours > idealSleepHours){
    console.log(`You got more sleep than needed! By ${actualSleepHours - idealSleepHours} hours.`);
  }
  else{
    console.log(`You should get some rest, you're behind in sleep by ${Math.abs(actualSleepHours - idealSleepHours)} hours`);
}
}

calculateSleepDebt();
