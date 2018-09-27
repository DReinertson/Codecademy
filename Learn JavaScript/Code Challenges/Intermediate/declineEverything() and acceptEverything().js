const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
}

const acceptEverything = (arr) =>{
  for (let x in arr){
    console.log('Ok, I guess I will eat some ' + arr[x] + '.');
  }
}

declineEverything(veggies);
acceptEverything(veggies);
