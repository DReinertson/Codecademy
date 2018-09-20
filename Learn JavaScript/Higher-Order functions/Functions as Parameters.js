const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);


function checkConsistentOutput(arg, val){
  let time1 = arg(val);
  let time2 = arg(val);
  if (time1 === time2){
    return arg(val);
  }
  else{
    return ('This function returned inconsistent results');
  }
}

checkConsistentOutput(addTwo, 5);

