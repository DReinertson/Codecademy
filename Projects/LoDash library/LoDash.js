let _ = {
  
  clamp (num, low, high) {
    if (num < low){
      return low;
    }
    else if (num > high){
      return high;
    }
    else{
      return num;
    };
  },
  //In switch statement, not sure which is more efficient. 
  /*
  switch(num) {
  	case (num < low):
    	return low;
      break;
    case (num > high):
    	return high;
      break;
    default:
    	return num;
      break;
  }
  */
  inRange(num, start, end){
    
    if (end === undefined){
      end = start;
      start = 0;
    }
    
    if(start > end){
      let tempstart = start;
      let tempend = end;
      start = tempend;
      end = tempstart;
    }
    
    if(num >= start && num <= end){
      return true;
    }
    else{
      return false;
    }
  },
  
  words (str) {
    let arr = str.split(' ');
    return arr;
  },
  
  pad(str, len){
    const space = ' ';
    if (str.length > len){
      return str;
    }
    let padStart = (Math.floor((len - str.length) / 2))
    let padEnd = len - (str.length + padStart);
    
    let paddedString = space.repeat(padStart) + str;
    paddedString += space.repeat(padEnd)
    /*Using for loops
    for (let x = 0; x < padStart; x++){
      str = ' ' + str;
    }
    for (let y = 0; y < padEnd; y++){
      str += ' ';
    }
    */
    return paddedString;
  },
  
};




// Do not write or modify code below this line.
module.exports = _;
