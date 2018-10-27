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
  /*switch(num) {
  	case (num < low):
    	return low;
      break;
    case (num > high):
    	return high;
      break;
    default:
    	return num;
      break;
  }*/
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
};




// Do not write or modify code below this line.
module.exports = _;
