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
  }
};




// Do not write or modify code below this line.
module.exports = _;
